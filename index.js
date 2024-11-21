// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const saveInputEl = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");
// const container = document.getElementById("container");

// // Add a Buy button dynamically
// container.innerHTML = "<button id = \"button2\" onclick='buy()'>Buy!</button>";

// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>";
// }

// // Event listener for Save Input button
// saveInputEl.addEventListener("click", function () {
//     myLeads.push(inputEl.value);
//     inputEl.value = ""; // Clear the input field

//     // Call delayMessage and chain Promises
//     delayMessage()
//         .then(message => {
//             console.log(message); // Logs: "Here is your data: ..."
//             renderLeads(); // Render leads after delay
//             return "Sending a thank-you message to subscribers...";
//         })
//         .then(thankYouMessage => {
//             console.log(thankYouMessage); // Logs: "Sending a thank-you message to subscribers..."
//             return "All tasks completed.";
//         })
//         .then(finalMessage => {
//             console.log(finalMessage); // Logs: "All tasks completed."
//         })
//         .catch(error => {
//             console.error(error);
//         });
// });

// // Function to render leads in the list
// function renderLeads() {
//     let listItems = "";
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += `<li>${myLeads[i]}</li>`;
//     }
//     ulEl.innerHTML = listItems;
// }

// // Function to simulate a delay
// function delayMessage() {
//     ulEl.innerHTML = "This is a delayed message"; // Show temporary message
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Here is your data: ..."); // Resolve after 3 seconds
//         }, 3000);
//     });
// }


// function subscribeToSong() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const isSuccessful = Math.random() > 0.3;
//             if (isSuccessful) {
//                 resolve("The has has been released!");
//                 } else {
//                     reject("No release");
//                 }
//             }, 1000);
//         });
// }

// subscribeToSong()
//     .then(message => {
//         console.log(message); // Logs: "The song has been released!"
//         return "Sending a thank-you message to subscribers...";
//     })
//     .then(thankYouMessage => {
//         console.log(thankYouMessage); // Logs: "Sending a thank-you message to subscribers..."
//         return "All tasks completed.";
//     })
//     .then(finalMessage => {
//         console.log(finalMessage); // Logs: "All tasks completed."
//     })
//     .catch(error => {
//         console.error(error);
//     });
    

function greetUser(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccessful = Math.random() > 0.3;
            if (!isSuccessful) {
                console.log(`Hello, ${name}!`);
                resolve("How are you doing?!");
                } else {
                reject("Rip nvm");
            }
        }, 2000);
    });
}

greetUser("Doug")
    .then(message => {
        console.log(message);
    })