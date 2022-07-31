function addNewTag()
{
    var ul = document.getElementById("task-tags");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Input"));
    li.setAttribute("class", "inputTag"); 
    ul.appendChild(li);
}