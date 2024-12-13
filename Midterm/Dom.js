<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic List</title>
</head>
<body>

<script>
    // Create the "Add Item" button
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Item';
    document.body.appendChild(addButton);

    // Create the list container (ul)
    const itemList = document.createElement('ul');
    document.body.appendChild(itemList);

    // Add event listener to the button to create items
    addButton.addEventListener('click', function() {
        // Create a new list item (li)
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item ' + (itemList.children.length + 1); // Adding text to item

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        newItem.appendChild(removeButton);

        // Append the new item to the list
        itemList.appendChild(newItem);

        // Add event listener to the remove button to delete the item
        removeButton.addEventListener('click', function() {
            itemList.removeChild(newItem);
        });
    });
</script>

</body>
</html>
