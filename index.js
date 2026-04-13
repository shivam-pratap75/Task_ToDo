let list_id = document.querySelector('#list');
let inp = document.querySelector('#input');
let btn = document.querySelector('#button');

inp.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        insert();
    }
});


btn.onclick = function() {
    insert();
};


function insert() {
    if (inp.value=== '') {
        alert("Please enter a valid task!");
        return;
    }

    let item = document.createElement("li");
    let textNode = document.createTextNode(inp.value + "  ");
    let dltbtn = document.createElement("button");
    dltbtn.classList.add("delete-btn");
    dltbtn.innerText = "Delete";

    
    dltbtn.onclick = function() {
        list_id.removeChild(item);
    };

    item.appendChild(textNode);
    item.appendChild(dltbtn);
    list_id.appendChild(item);

    inp.value = "";
}
