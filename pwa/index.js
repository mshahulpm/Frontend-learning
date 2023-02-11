
let count = 0

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const resetBtn = document.getElementById('reset')

const counter = document.querySelector('#count span')

plusBtn.addEventListener('click', () => {
    counter.innerHTML = ++count
})

minusBtn.addEventListener('click', () => {
    counter.innerHTML = --count
})

resetBtn.addEventListener('click', () => {
    count = 0
    counter.innerHTML = count
})