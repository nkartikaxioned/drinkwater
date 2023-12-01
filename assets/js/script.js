const glass = document.querySelectorAll('.glass'),
emptyContainer = document.querySelector('.empty-container'),
filledContainer = document.querySelector('.filled-container'),
precent = document.querySelector('.precent'),
incrementalValue = 40.3,
percentValue = 12.5;

window.addEventListener('load', () => {


    glass.forEach((elem,index) => {
        elem.addEventListener('click', () => {
            removeActive();
            for(let i = 0 ; i <= index ; i++) {
                   glass[i].classList.add('glass-active');
            }
            let number = index+1;
            let finalValue = 322-(Math.floor(number * incrementalValue));
            emptyContainer.style.height = `${finalValue}px`;
            let percentage = Math.round(number*percentValue);
            precent.innerHTML=`${percentage}%`
        })
    })

    function removeActive() {
        glass.forEach((ele) => {
            ele.classList.remove('glass-active');
        })
    }

});























