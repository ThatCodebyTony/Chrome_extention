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

// Execute promises sequentially using async/await

async function executeSequentially() {
    try{
        const result1 = await delayPromise("First promise resolved",1000);
        console.log(result1);

        const result2 = await delayPromise("Second promise resolved",2000);
        console.log(result2);

        const result3 = await delayPromise("Third promise resolved", 3000);
        console.log(result3);

    } catch(error) {
        console.error("Error",error);
    }

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
  

  const parent = document.body.querySelector(".parent");
  const addChild = document.body.querySelector("#add-child");
  const container = document.body.querySelector(".container")
  addChild.addEventListener("click", () => {
    // Only add a child if we don't already have one
    // in addition to the text node "parent"
    if (parent.childNodes.length > 1) {
      return;
    }
    const child = document.createElement("div");
    child.classList.add("child");
    child.textContent = "child";
    parent.appendChild(child);
    
    // Create a new parent div and add it to the body
    const newParent = document.createElement("div");
    newParent.classList.add("parent");
    newParent.textContent = "New Parent";
    document.body.appendChild(newParent);
  });
  
  const removeChild = document.body.querySelector("#remove-child");
  removeChild.addEventListener("click", () => {
    const child = document.body.querySelector(".child");
    parent.removeChild(child);
    const firstParent = document.body.querySelector(".parent");
    container.removeChild(firstParent);
    
  });
  
  
  
