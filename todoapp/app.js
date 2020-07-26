var list = document.getElementById("list");

function addTodo(){
   var todo_item = document.getElementById("todo-item");


   var li = document.createElement('li');
   var litext = document.createTextNode(todo_item.value);
   li.appendChild(litext);



    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE"); 
    delBtn.appendChild(delText);
    delBtn.setAttribute("class", "delbtn")
    delBtn.setAttribute("onclick", "deleteItem(this)")


    var editBtn = document.createElement("button");
    var aditText = document.createTextNode("EDIT");
    editBtn.appendChild(aditText);
    editBtn.setAttribute("class", "editbtn")
    editBtn.setAttribute("onclick", "editItem(this)")


    li.appendChild(delBtn);
    li.appendChild(editBtn);


   list.appendChild(li);

   todo_item.value = "";
   console.log(li); 



}
function deleteItem(e) {

    e.parentNode.remove();
    
}
function delall() {
    list.innerHTML = "";
    
}
function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var edittext = prompt("Enter value", val);
    e.parentNode.firstChild.nodeValue = edittext;
    
}