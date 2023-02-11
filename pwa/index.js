
const getCount = (() => {
    let count = 0
    /**
     * 
     * @param {'inc'|'dec'|'res'} type 
     */
    function setCount(type) {
        switch (type) {
            case 'inc':
                return ++count
            case 'dec':
                return --count
            case 'res':
                count = 0;
                return count
            default:
                break;
        }
    }
    return setCount
})();

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const resetBtn = document.getElementById('reset')

const counter = document.querySelector('#count span')

plusBtn.addEventListener('click', () => {
    counter.innerHTML = getCount('inc')
})

minusBtn.addEventListener('click', () => {
    counter.innerHTML = getCount('dec')
})

resetBtn.addEventListener('click', () => {
    counter.innerHTML = getCount('res')
})