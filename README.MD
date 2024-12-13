

### 1. Accessing the `<div>` and buttons using `document.querySelector()`

You can use `document.querySelector()` to select HTML elements by their tag name, class, or ID. Here's an example where we access a `<div>` element and two buttons.

#### HTML structure:
```html
<div id="container">
    <button id="addButton">Add</button>
    <button id="removeButton">Remove</button>
</div>
```

#### JavaScript to access the `<div>` and the buttons:
```javascript
// Access the div by its ID
const container = document.querySelector("#container");

// Access the Add button by its ID
const addButton = document.querySelector("#addButton");

// Access the Remove button by its ID
const removeButton = document.querySelector("#removeButton");

console.log(container); // This will log the <div> element
console.log(addButton); // This will log the Add button
console.log(removeButton); // This will log the Remove button
```

#### Explanation:
- `document.querySelector("#container")` selects the `<div>` with the `id="container"`.
- `document.querySelector("#addButton")` selects the "Add" button.
- `document.querySelector("#removeButton")` selects the "Remove" button.



### 2. Listening for Button Clicks using `EventTarget.addEventListener()`

We can use the `addEventListener()` method to listen for specific events on an element. In this case, we want to listen for clicks on the "Add" and "Remove" buttons.

#### JavaScript to listen for clicks:
```javascript
// Add an event listener to the Add button
addButton.addEventListener("click", function() {
    console.log("Add button clicked");
});

// Add an event listener to the Remove button
removeButton.addEventListener("click", function() {
    console.log("Remove button clicked");
});
```

#### Explanation:
- `addButton.addEventListener("click", function() {...})` listens for a click event on the "Add" button. When the button is clicked, it runs the function inside the `addEventListener` callback, which in this case just logs "Add button clicked" to the console.
- Similarly, `removeButton.addEventListener("click", function() {...})` listens for a click event on the "Remove" button and logs "Remove button clicked" to the console.

Try clicking the buttons, and you'll see the corresponding messages printed in the console!


### 3. Creating an Element using `document.createElement()`

This method allows you to create new HTML elements dynamically via JavaScript. Let's create a new `<p>` element and append it to the container when the "Add" button is clicked.

#### JavaScript to create an element:
```javascript
// Add an event listener to the Add button
addButton.addEventListener("click", function() {
    // Create a new <p> element
    const newParagraph = document.createElement("p");

    // Set the text content of the new paragraph
    newParagraph.textContent = "This is a new paragraph added to the page.";

    // Append the new paragraph to the container
    container.appendChild(newParagraph);

    console.log("Paragraph added");
});
```

#### Explanation:
- `document.createElement("p")` creates a new `<p>` element, but it is not yet added to the document.
- `newParagraph.textContent = "This is a new paragraph added to the page."` sets the text content of the newly created `<p>` element.
- `container.appendChild(newParagraph)` adds the newly created `<p>` element to the `container` `<div>`, which will display the new paragraph on the page.

Now, when you click the "Add" button, a new paragraph will be added to the page.

Let me know if you're ready for the next step!
