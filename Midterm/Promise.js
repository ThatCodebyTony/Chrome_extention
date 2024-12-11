function fetchDataWithPromise(age) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if (age > 18) {
                let data = {name: "John", age: age};
                resolve(data);
            } else if (age <= 0) {
                reject("Error: Invalid age");
            } else {
                reject("Error: User is a minor");
            }
        }, 2000);
    });
}