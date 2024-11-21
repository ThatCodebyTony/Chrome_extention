let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveInputEl = document.getElementById('input-btn');
const ulEl = document.getElementById("ul-el");
const container = document.getElementById("container");

container.innerHTML = "<button id = \"button2\" onclick='buy()'>Buy!</button>"

function buy(){
    container.innerHTML += "<p>Thank you for buying!</p>"
}

saveInputEl.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = ""; // Clear the input field
    renderLeads();
})


function renderLeads() {
    let listeItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listeItems += "<li>" + myLeads[i] + "</li>";
    }
    ulEl.innerHTML = listeItems;
}

function subscribeToSong() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("The song has been released!");
      }, 3000); 
    });
  }
  
  subscribeToSong().then(message =>{
    console.log(message);
  })