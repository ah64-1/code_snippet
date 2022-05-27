class EventBus {
    constructor() {
        this.message = {}
    }

    $on(name, cb){
        if(!this.message[name]){
            this.message[name] = [];
        }
        this.message[name].push(cb);
    }

    $emit(name, ...arg){
        this.message[name].forEach(cb => {
            cb(arg);
        });

    }
    // 取消事件订阅
    $off(name, cb){
        this.message[name] = this.message[name].filter(cb => cb !== cb);
    }
    
}

// test
// subscribe
let s1 = new EventBus()
let s2 = new EventBus()
s1.$on('event1',(arg) => {
    console.log("s1 订阅事件event1", arg)
})
s2.$on('event2',() => {
    console.log("s2 订阅事件event2")
})

// publish

s1.$emit("event1","course","JS")