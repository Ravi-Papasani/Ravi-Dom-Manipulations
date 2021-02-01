var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filterText = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click', deleteItem);
//Filter Event
filterText.addEventListener('keyup', filterItem);


// Add item
function addItem(e) {
    e.preventDefault();
    console.log(e.target);

    // Get input value
    var newItemInput = document.getElementById('item');

    // Create new li element
    var li = document.createElement('li');

    // Add Class
    li.className = 'list-group-item';

    // Add text node with input value  
    li.appendChild(document.createTextNode(newItemInput.value));


    //Add Delete button to the li item
    var deleteBtn = document.createElement('button');

    //Add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);

    //clear input field
    newItemInput.value = '';

}

//Remove Item
function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        //console.log(1);
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            //console.log(li);
            itemList.removeChild(li);
        }

    }

}

// Search/filter an Item
function filterItem(e) {
    //Get the input Filter text value
    var textFilter = e.target.value.toLowerCase();
    //console.log(textFilter);
    //Get the li itemList in the ul
    var items = itemList.getElementsByTagName('li');
    //console.log(items);
    //convert the above items( __proto__: HTMLCollection) into an Array
    Array.from(items).forEach(function (item) {
        //get the itemName from the item
        var itemName = item.firstChild.textContent;
        //search functionality matches
        if (itemName.toLowerCase().indexOf(textFilter) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    });
}