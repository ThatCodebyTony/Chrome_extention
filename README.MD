Now let's move on to the third concept: **using `Document.createElement()` to create an element**.

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
