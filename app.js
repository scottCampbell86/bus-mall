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

/// ---> SECOND : What will the user do to interact and modify these variables and update the state? AND, what does the site require for such an intervention?
// 1. Display content
    // need a number randomizer function that will generate nums that we can use as indicies to identify and return sets of items at random
      // must return 3 dissimlar products 
      
  
    //randomizer
const randomProduct = (productsList) => {
    const index = Math.floor(Math.random() * productsList.length);
    const randomProduct = productsList[index];
    return randomProduct;
}

  //function to return 3 dissimlar products 
const returnThreeProducts = () => {
    let productOne = randomProduct(productsList);
    let productTwo = randomProduct(productsList);
    while (productOne.id === productTwo.id) {
        productTwo = randomProduct(productsList)
    }
    let productThree = randomProduct(productsList);
    while (productThree === productTwo || productThree === productOne) {
        productThree = randomProduct(productsList);
    }
/// 2: equipped with those products, now manipulate the DOM, rendering the content

   /// these are all NEW variables, DOM to JS
    // id's
    const radioOneButton = document.getElementById('radio-1');
    const radioTwoButton = document.getElementById('radio-2');
    const radioThreeButton = document.getElementById('product-3') ;

    // text 
    const productOneText = document.getElementById('product-1-h3');
    const productTwoText = document.getElementById('product-2-h3');
    const productThreeText = document.getElementById('product-3-h3');

    //image 
    const radioOneImage = document.getElementById('radio-1-image');
    const radioTwoImage = document.getElementById('radio-2-image');
    const radioThreeImage = document.getElementById('radio-3-image');


    //Assign appropriate properties to DOM-grabbing-variables
    //button
        // id's --> values
    radioOneButton.value = productOne.id;
    radioTwoButton .value = productTwo.id;
    radioThreeButton.value = productThree.id;

    //text.content
        // h3's to names
    productOneText.textContent = productOne.name;
    productTwoText.textContent = productTwo.name;
    productThreeText.textContent = productThree.name;

    //img
        // assign the DOM variable's src to the iamge propert of generated product because 
    radioOneImage.src = productOne.image;
    radioTwoImage.src = productTwo.image;
    radioThreeImage.src = productThree.image;
    
};


// 3. Event Listener

const form = document.querySelector('form')
//this is creating a variable that is assigned to the value of the form and its contents

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log('submit is live');
    
    // conditions the circumsances of survey rendering
    if (totalSets >= 25) {
        displayResults();
    } else {
        totalSets += 1;
        console.log('total sets = ' + totalSets);
    };

    const formData = new FormData(form);
    //this is taking in the form var, so the value of formData(var) is the data of the form itself upon event.

    const selectedProductId = formData.get('product');
    console.log('selected products = ' + selectedProductId);
    //this is assigning the value of the selected product to the var
 

    const productExistCheck = findById(selectedProductCount, selectedProductId);
    console.log(productExistCheck);

    //conditional to either push that product into array as new object or add it to existing object
    if (productExistCheck) {
        productExistCheck.votes++;
    } else {

        selectedProductCount.push({
            id: selectedProductId,
            votes: 1,
        });
        
console.log(selectedProductCount)
    } 
    returnThreeProducts();
});

function reset() {
    initiateState();
}

    











// 4. Display results






