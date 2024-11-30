

function delayPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(message);
        },delay);
    });
}

async function executeAsync() {
    try {
        const result1 = await delayPromise("First Promise done", 1000);
        console.log(result1);
        
        const result2 = await delayPromise("Second Prmise done", 2000);
        console.log(result2)

        const result3 = await delayPromise("Third Promise done", 3000);
        console.log(result3)
    } catch(error) {
        console.error("Error",error);
    }
}
executeAsync();