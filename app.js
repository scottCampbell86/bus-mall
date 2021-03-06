import products from './itemArray.js';
import findById from './utils.js';


const productsList = products.slice();
let selectedProductCount; 
let totalViews;
let totalSets;
const initiateState = () => {
    selectedProductCount = [];
    totalViews = [];
    totalSets = 0; 
};
initiateState();

const randomProduct = (productsList) => {
    const index = Math.floor(Math.random() * productsList.length);
    const randomProduct = productsList[index];
    return randomProduct;
}

const returnThreeProducts = () => {
    let productOne = randomProduct(productsList);
    let productTwo = randomProduct(productsList);
    while (productOne.id === productTwo.id) {
        productTwo = randomProduct(productsList)
    }
    let productThree = randomProduct(productsList);
    while (productThree.id === productTwo.id || productThree.id === productOne.id) {
        productThree = randomProduct(productsList);
        const myThree = [productOne, productTwo, productThree];
        return myThree;
    }

    const radioOneButton = document.getElementById('radio-1');
    const radioTwoButton = document.getElementById('radio-2');
    const radioThreeButton = document.getElementById('product-3') ;

    const productOneText = document.getElementById('product-1-h3');
    const productTwoText = document.getElementById('product-2-h3');
    const productThreeText = document.getElementById('product-3-h3');

    const radioOneImage = document.getElementById('radio-1-image');
    const radioTwoImage = document.getElementById('radio-2-image');
    const radioThreeImage = document.getElementById('radio-3-image');


    radioOneButton.value = productOne.id;
    radioTwoButton .value = productTwo.id;
    radioThreeButton.value = productThree.id;

    productOneText.textContent = productOne.name;
    productTwoText.textContent = productTwo.name;
    productThreeText.textContent = productThree.name;


    radioOneImage.src = productOne.image;
    radioTwoImage.src = productTwo.image;
    radioThreeImage.src = productThree.image;

    const thisSet = [productOne, productTwo, productThree];
    for (let i = 0 ; i < thisSet.length ; i++) {
        let item = thisSet[i];
        totalViews.push(item.name);
    }
console.log(totalViews);
};

const form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (totalSets >= 25) {
        window.location = 'assets/results.html';
    } else {
        totalSets += 1;
console.log('total sets = ' + totalSets);
    };

    const formData = new FormData(form);
    const selectedProductId = formData.get('product');
    const productExistCheck = findById(selectedProductCount, selectedProductId);
    
    if (productExistCheck) {
        productExistCheck.votes++;
    } else {

        selectedProductCount.push({
            id: selectedProductId,
            votes: 1,
        });
        
    }
console.log(selectedProductCount);

    document.querySelector('input[name="product"]:checked').checked = false;

    localStorage.setItem('votes', JSON.stringify(selectedProductCount));

    returnThreeProducts(); 
});

function reset() {
    initiateState();
};


returnThreeProducts(); 