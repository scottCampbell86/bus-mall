import products from './itemArray.js';
import findById from './utils.js';


const productsList = products.slice();
    //a duplicate of the original array, to preserve OG array throught the manipulations of state


/// --> FIRST : Identify & Set/Initiate State Variables
// what elements/varibales will be 'managed' as this program runs, updating the state? 
// set/inialize the value of those variable.


let productSelectionCount; 
 // this is a variable whose value will be an array, whose elements will be created, and incrememented, based on user input

let totalViews;
    // this is a variable whose value will be an array, whose elemetns will be created, and incremebted, based upon the frequency of their rendering

let totalSets;
    // this is a variable who value will be incremented with each display rendering

const initiateState = () => {
    productSelectionCount = [];
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

  //function (which will be called in eventual eventListener) will first, utilize our randomizer to return 3 dissimlar products 
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

/// 2: equipped with those products, now manipulate the         DOM, rendering the content
        //create seperate variables for each State element and assign corresponding properties from generated products
          // each property (image ; name ; id) will be assigned to a variable.
              //what do id's link to?
              //where do img's go? What is needed (src)?
              //where will name appear? How (p, h)?

   /// these are all NEW variables, grabbing DOM
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



    //Assign appropriate properties of the displayed products (those generated above) to these DOM-grabbing-variables
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


// 3. need an eventListener that will 
    // call the display function()
    // must have be able to increment the values of state variables: productSelectionCount ; total views ; total sets
    // must discern between rendering new content OR ending survery
        // conditions are if sets >= 25, survery ends and will DISPLAY RESULTS. If not, render new content and continue to increment.

const form = document.querySelector('form')
//this is creating a variable that is assigned to the value of the form and its contents
returnThreeProducts();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('submit is live');
    
    // conditions the circumsances of survey rendering
    if (totalSets >= 25) {
        displayResults()
    }

    const formData = new FormData(form);
    //this is taking in the form var, so the value of formData(var) is the data of the form itself upon event.

    const selectedProductId = formData.get('selected');
    //this is assigning the value of the selected product to the var

    totalSets++;
    //incrementing 
    
    //here checkcking whether or not the selected product already exists in the array passed as first argument.
        //this works because the value of the button is assigned to the id of the product
    const productExistCheck = findById(productSelectionCount, selectedProductId);

    //conditional to either push that product into array as new object or add it to existing object
    if (productExistCheck) {
        productExistCheck.votes++;
    } else {

        productSelectionCount.push({
            id: selectedProductId,
            votes: 1,
        }); 
    } 
     returnThreeProducts();
});

    











// 4. Display results






