let toDoContainer = document.getElementById('toDoContainer')
let addToDobutton = document.getElementById('addToDo')
let inputField = document.getElementById('inputField')

addToDobutton.addEventListener('click' , function() {
    let paragraph = document.createElement('p');
   paragraph.innerText = inputField.value;
   paragraph.classList.add('paragraph-styling')
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration ="line-through";
    })

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
})
