let count = 0
let countEl = document.getElementById("count-el")
let saveElement = document.getElementById("save-el")

let increment = ()=>{
    count++
    countEl.textContent = count;
}

function save(){
    saveElement.textContent += " - "+count
    count = 0
    countEl.textContent = count
}