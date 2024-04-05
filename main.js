const inputBox =document.getElementById("inputBox");
const listConterner = document.getElementById("listContener");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write somting!")
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listConterner.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
listConterner.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else{
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listConterner.innerHTML);
}
function showData(){
    listConterner.innerHTML=localStorage.getItem("data");
}
showData();