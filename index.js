let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let totalEl = document.getElementById("total-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
function total(){
    let totalCount = 0;
    totalCount += count;
    totalEl.textContent += totalCount;
}