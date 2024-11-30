

function delayPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(message);
        },delay);
    });
}

function setDelay() {
    return delayPromise("First Promise",1000)
        .then((result)=> {
            console.log(result);
            return delayPromise("Second Promise",2000)
        })
        .then((result)=> {
            console.log(result);
            return delayPromise("Third Promise",3000)
        })
        .then((result)=> {
            console.log(result);
        })
        .catch((error)=> {
            console.error("Error:".error)
        })
}

