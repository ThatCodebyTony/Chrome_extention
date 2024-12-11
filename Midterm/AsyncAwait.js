
async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)
    
    if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
    }
    
    throw new Error(response.status);
    }
    
    loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404 (4)



    
// -------------------------------------------
// differnt async await example

// Async function to load user data from a URL

async function loadUserData(userId) {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`); // Fetch data by userId
      
      if (response.ok) { // Check if the response status is OK (200-299)
        let user = await response.json(); // Parse the JSON response
        return user;
      } else {
        // Handle HTTP errors (e.g., 404 Not Found)
        throw new Error(`HTTP Error: ${response.status} - User not found.`);
      }
    } catch (error) {
      // Catch network or parsing errors
      console.error("Error occurred:", error.message);
      return null; // Return null if there was an error fetching or parsing
    }
  }
  
  // Example usage: Handling result and errors
  loadUserData(1) // Fetch user with ID 1
    .then(user => {
      if (user) {
        console.log("User data:", user); // Handle the valid user data
      } else {
        console.log("User not found or there was an error.");
      }
    })
    .catch(error => alert("Something went wrong: " + error)); // This will catch any other errors outside of the promise
  