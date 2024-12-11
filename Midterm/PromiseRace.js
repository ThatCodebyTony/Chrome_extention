// Create three promises that resolve after different times
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('First promise resolved');
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Second promise resolved');
    }, 2000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Third promise resolved');
    }, 3000);
});

// Use Promise.all to run the promises in parallel
Promise.race([promise1,promise2,promise3])
    .then((message) => {
        console.log("First resolved Promise: ", message);
    })
    .catch((error)=> {
        console.error('Promise rejected:', error);
    })