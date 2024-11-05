let myLeads = ["hi", "hello", "hey"];
const inputEl = document.getElementById("input-el");
const saveInputEl = document.getElementById('input-btn');
const ulEl = document.getElementById("ul-el");

saveInputEl.addEventListener("click", function() {
    // saveInputEl.textContent = "Button Clicked!";
    // console.log("Button Clicked!");
    myLeads.push(inputEl.value);
})

for (let item of myLeads) {
    ulEl.innerHTML += "<li>" + item + "</li>";
    //container.innerHTML = "<button>Buy!</button>"

}