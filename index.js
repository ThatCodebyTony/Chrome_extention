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
    // saveInputEl.textContent = "Button Clicked!";
    // console.log("Button Clicked!");
    myLeads.push(inputEl.value);
    renderLeads();
})


function renderLeads() {
    let listeItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        listeItems += "<li>" + myLeads[i] + "</li>";
    }
    ulEl.innerHTML = listeItems;
}
