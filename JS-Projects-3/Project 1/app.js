const monkeyOne = document.querySelector('.closed')
const monkeyTwo = document.querySelector('.open')

// add event listener //add the events to happen
monkeyOne.addEventListener('click', () => {
    if(monkeyTwo.classList.contains('open')) {
        monkeyTwo.classList.add('active');
        monkeyOne.classList.remove('active');
    }
}) 

monkeyTwo.addEventListener('click', () => {
    if(monkeyOne.classList.contains('closed')) {
        monkeyOne.classList.add('active');
        monkeyTwo.classList.remove('active');
    }
}) 