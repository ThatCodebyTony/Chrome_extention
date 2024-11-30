// Promisified delay function
function delay(time, message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message); // Resolving with the message after the delay
        }, time);
    });
}

// Using the promisified delay function
delay(1000, "Delay complete!")
    .then((message) => {
        console.log("Promise resolved:", message);
    })
    .catch((error) => {
        console.error("Promise rejected with:", error);
    });

function rely(time, message) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(message);
        }, time);
    });
}


rely(1000,"Delay Complete!")
    .then((message)=> {
        console.log("Promise resolved:", message);
    })
    .catch((error)=> {
        console.error("Promise rejected with:", error);
    });