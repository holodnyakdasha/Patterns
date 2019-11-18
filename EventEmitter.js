class EventEmitter {
    constructor() {
        this.events = {}
    }
    subscribe(eventName, func) {
        if(!this.events[eventName]) {
            this.eventName = []
        }
        this.events[eventName].push(func)
        return () => {
            this.events[eventName] = this.emit[eventName].filter(eventFunc => func !== eventFunc)
        }
    }
    emit(eventName, data) {
        const event = this.events[eventName]
        if (event) {
            event.forEach(func => {
                func.call(null, data)
            })
        }
    }
}