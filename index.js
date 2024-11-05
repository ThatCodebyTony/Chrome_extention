let myLeads = []
const inputEl = document.getElementById("input-el");
const saveInputEl = document.getElementById('input-btn');

saveInputEl.addEventListener("click", function() {
    saveInputEl.textContent = "Button Clicked!";
    console.log("Button Clicked!");
})