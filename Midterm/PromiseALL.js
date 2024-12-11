const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Third promise resolved');
    }, 3000);
});

const promise2 = new Promise((resolve)=> {
    setTimeout(() => {
        resolve("Promise 2 resolved!");
    },1000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 3 resolved!");
    },1000);
})

Promise.all([promise1,promise2,promise3])
    .then((messages) => {
        console.log('All promises resolved:');
        messages.forEach((messages, index) => {
            console.log(`Promise ${index+1}: ${messages}`);
        });
    })
    .catch((error) => {
        console.error("One of the promises rejected:",error)
    });

    