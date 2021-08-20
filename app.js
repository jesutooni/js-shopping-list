var btn = document.getElementById("btn");
var input = document.getElementById("input-box");
var newUl = document.querySelector("ul");

btn.addEventListener("click", addItem);

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        addItem();
    }
});

function addItem() {
    if (input.value.length > 0) {
        var newList = document.createElement("li");
        var addedList = document.createTextNode(input.value);
        newList.appendChild(addedList);
        newUl.appendChild(newList);
        input.value = "";
    } else {
        alert("Please enter a item");
    }
}