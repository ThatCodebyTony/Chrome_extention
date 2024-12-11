async function fetchDataAsync() {
    try {
        let data = await fetchData(); // await the promise resolution
        if (data.age > 18) {
            console.log("Adult user:", data);
        } else {
            console.log("Minor user:", data);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function fetchData() {
    return new Promise((resolve, reject)=> {
        let data = {name: "John", age: 30};
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
}

fetchDataAsync();