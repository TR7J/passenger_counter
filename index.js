
document.getElementById("count-el").textContent = 0;

let countEl = document.getElementById("count-el");

count = 0

function increment() {
    // count++
    count += 1
    countEl.textContent = count;
}

document.getElementById("save-el");

let saveEl = document.getElementById("save-el");


function save(){
    let countAndDash = count + " - "; 
    saveEl.textContent = saveEl.textContent + countAndDash;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}

