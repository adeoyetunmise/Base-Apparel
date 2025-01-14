let input = 0;
let addition = 125.00 
const inputEl = document.getElementById('input');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const cardContainer = document.getElementById('card-container');
const addToCartBtn = document.getElementById('addToCart');

function updateValue() {
    inputEl.textContent = input;
}

incrementBtn.addEventListener('click', () => {
    input++;
    updateValue();
});

decrementBtn.addEventListener('click', () => {
    input--;
    updateValue();
});

addToCartBtn.addEventListener('click', () => {
    addToCart();
});

function addToCart() {
    console.log('Adding item to cart with quantity:', input);
}

function displayImage(imgElement){
    var imgSrc = imgElement.src;
    
    var largeImage = document.getElementById('largeImage');
    largeImage.src = imgSrc;
}



function showCard(event) {
    event.preventDefault(); // Prevent any default action
    event.stopPropagation(); // Stop the event from bubbling up

    const cardHTML = `
        <div style="border: 1px solid #ccc; 
        padding: 20px; 
        width: 300px;  
        background-color: white;
        height: 200px;
        box-shadow: 0px 4px 8px rgb(112, 111, 111);
         ">
            <h2>Cart</h2>
            <br/>
            <hr>

            <div style="display:flex; flex-direction:row;">
            <a href="#"><img src="./images/image-product-1.jpg"
              class="h-14 rounded-xl"
              onclick="displayImage(this)" alt=""></a>
            <p>Fall Limited Edition Sneakers</p>
            </div>
            <p>$125.00  X ${input} <span style="margin: 10px; font-weight:800;">$ ${ 125.00 * input} .00</span></p>
        
    `;

    

    cardContainer.innerHTML = cardHTML;
    displayImage(imgElement)
}

// Add event listener to the image
document.getElementById('showCardImage').addEventListener('click', showCard);
