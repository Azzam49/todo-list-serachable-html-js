
/*
SAMPLE EXAMPLE CODES

const header = document.querySelector("#header-title");
header.textContent = "Item Lister 2";

const form_header = document.querySelector("h2.title#myTitle");
form_header.style.borderBottom = "solid 2px black";



const btn = document.querySelector("[type='submit']");


btn.addEventListener('click', onSubmit);

const ul = document.querySelector("ul#items");
function onSubmit(e){
    e.preventDefault();

   
    const new_li = document.createElement("li");
    new_li.classList.add("list-group-item");

    const text_input = document.querySelector("[type='text']");

    new_li.textContent = `${text_input.value}`;

    ul.appendChild(new_li);
    text_input.value = "";
}

const btn_delete = document.querySelector("button#btn-delete");

btn_delete.addEventListener('click',onDelete);

const msg = document.querySelector("div.msg");


function onDelete(e){
    e.preventDefault();

    if(ul.children.length > 0){
        ul.lastElementChild.remove();
    }else{
        if(msg.style.display === "none"){
            msg.style.display = "block";
        }
        msg.style.backgroundColor = "red";
        msg.style.padding = "5px";
        msg.textContent = "There is no item to delete!";

        setTimeout(() => {
            msg.style.display = "none";
        }, 3000);
    }
  
}

//styling items
const odd_items = document.querySelectorAll("li.list-group-item:nth-child(odd)");
const even_items = document.querySelectorAll("li.list-group-item:nth-child(even)");
for(let i = 0; i < odd_items.length;i++){
    odd_items[i].style.backgroundColor = "green";
    even_items[i].style.backgroundColor = "lightgreen";
}


//parent + children
const item_list = document.querySelector("#items");
//parentNode selects the parent of the element
const item_list_parent = item_list.parentNode;
//children is htmlCollection of item_list children , can be indexed
const item_list_children = item_list.children;



//siblings
//previousElementSibling gets preivous sibling
const item_list_previousSibling = item_list.previousElementSibling;
//nextElementSibling gets next sibling
const item_list_nextSibling = item_list.nextElementSibling;





//creating elements
const newDiv = document.createElement("div");
newDiv.className = "hello";
newDiv.id = "hello1";
//create attribute
newDiv.setAttribute("title","hello div");
//create text node 
var newDivText = document.createTextNode("Hello world");
//add text node 
newDiv.appendChild(newDivText);

const container = document.querySelector("header .container");
const header_h1 = document.querySelector("header h1");

//insert element inside the container element, before header_h1 element
container.insertBefore(newDiv,header_h1);



const testButton = document.querySelector("button#testButton");

testButton.addEventListener('click',test_click);

function test_click(e){
    e.preventDefault();
    //testButton.textContent = "Test Button";

    e.target.textContent = "Test Button"
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.type); //event type
    console.log(e.clientX + " " + e.clientY);// screen x,y
    console.log(e.offsetX + " " + e.offsetY);//element x,y
    console.log(e.ctrlKey);//bool value,true if holding ctrl
}

//different event types
//click , dblclick , mousedown , mouseup , mouseenter ,
//mouseleave , 
// mouseover , mouseout //both works even if mouse is over a child element
//mousemove , keydown , keyup , keypress , 
//focus event is when we click on item ,
//blur event is when we click out from the item
//cut , paste , input event is doing anything with the input,
//change event is when value changes suitable for select element
//

//keydown 
const itemInput = document.querySelector("input[type='text']");
itemInput.addEventListener('keydown',runEvent);
function runEvent(e){
  msg.textContent = e.target.value;
}

SAMPLE EXAMPLE CODES
*/
































//Add items, delete items, filter items PROJECT



const form = document.querySelector("#addForm");

const itemsList = document.querySelector("#items");

form.addEventListener("submit", addItem);

function addItem(e){
    e.preventDefault();

    //text input element
    const newItemInput = document.querySelector("#addForm input[type='text']");
    
    //get input value
    const newItemInput_value = newItemInput.value;
    
    //create new empty li element
    const newLi = document.createElement("li");
    
    //add class to li
    newLi.className = "list-group-item";
    
    //create a TextNode out of the input value
    const textNode = document.createTextNode(newItemInput_value);
    
    //add the TextNode to the li
    newLi.appendChild(textNode);

    //create delete button
    const deleteButton = document.createElement("button");
    
    //add class
    deleteButton.className = "btn btn-danger btn-sm float-right delete";

    //button's value
    deleteButton.appendChild(document.createTextNode("X"));
    
    //add button element to the li
    newLi.appendChild(deleteButton);

    //add the li to the ul
    itemsList.appendChild(newLi);

    //clear input
    newItemInput.value = "";
}

itemsList.addEventListener("click", removeItem);

function removeItem(e){
    //to check if we are clicking the button
    if(e.target.classList.contains('delete')){
        //to confrim
        if(confirm("Are you sure to delete?")){
            const li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
}


const filter = document.querySelector("#filter");

filter.addEventListener("keyup",filterItems);

function filterItems(e){

    //get value converted to lowercase
    const value = e.target.value.toLowerCase();

    //get li's
    const items = itemsList.querySelectorAll("li");

    //convert to array
    let itemsArray = Array.from(items);

    //loop through array and filter
    itemsArray.forEach(function(item){

        //get text of the li item
        const itemName = item.firstChild.textContent;
        
        //check if value is present on itemName text
        if(itemName.toLowerCase().indexOf(value) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
}







































