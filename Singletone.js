let countModule = (() => {
    let counter = 0
    let instance = 0
    let getCounter = () => {
        return counter
    }
    let increaseCounter = () => {
        return counter++
    }
    let createInstance = () => {
        return {
            getCounter: getCounter,
            increaseCounter: increaseCounter
        }
    }
    return {
        getInstance: () => {
            return instance || (instance = createInstance())
        }
    }
})()