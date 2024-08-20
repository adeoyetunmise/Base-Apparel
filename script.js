let input = 0;
const inputEl = document.getElementById('input')
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

function updateValue(){
    inputEl.innerHTML= input;
}

incrementBtn.addEventListener('click', () =>{
    input++;

    updateValue()
})

decrementBtn.addEventListener('click', () => {
    input--;
    updateValue();
});