let myLeads = ["hi", "hello", "hey"];
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
})

for (let item of myLeads) {
    ulEl.innerHTML += "<li>" + item + "</li>";
    

}

// container.innerHTML = "<button>Buy!</button>"
// container.addEventListener("click", function(){
//     container.innerHTML += "<li>Thank you for buying!</li>"
    
// })