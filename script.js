var theButton=document.querySelector('.theButton');
var theInput=document.querySelector('.theInput');

var ul = document.querySelector(".list");
var allLi =document.querySelectorAll('li');


allLi.forEach(strikeThrough);

function strikeThrough(listItem) {listItem.addEventListener('click',function(event) {
    console.log(event);
    console.log(listItem);
    listItem.classList.toggle('str');
})}

function handleKeyPress(e){
    var key=e.keyCode;
    console.log(key);
     if (key===13){
        isValueEntered();
     }
   }

function buttonPress() {
        isValueEntered();
}

function isValueEntered () {
    if(theInput.value!=="") {
            addLi();
            theInput.value="";
            
            
    }
}

function addLi() {
    var li = document.createElement("li");
    strikeThrough(li);
    li.appendChild(document.createTextNode(theInput.value));
    ul.appendChild(li);

}

theButton.addEventListener('click',buttonPress);
theInput.addEventListener("keypress", handleKeyPress);

