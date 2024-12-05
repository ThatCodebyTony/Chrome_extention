// Function that returns a promise that resolves after a given time
function delayPromise(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

// Execute promises sequentially
function executeSequentially() {
    return delayPromise('First promise resolved', 1000)
        .then((result) => {
            console.log(result);  // Logs after 1 second
            return delayPromise('Second promise resolved', 2000);
        })
        .then((result) => {
            console.log(result);  // Logs after 2 seconds
            return delayPromise('Third promise resolved', 3000);
        })
        .then((result) => {
            console.log(result);  // Logs after 3 seconds
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Run the sequential execution function
executeSequentially();


function fetchData() {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }


  async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  