import products from './itemArray.js';
import findItemById from './utils.js';


const productsList = products.slice();
    //a duplicate of the original array, to preserve OG array throught the manipulations of state


/// --> FIRST : Identify & Set/Initiate State Variables
// what elements/varibales will be 'managed' as this program runs, updating the state? 
// set/inialize the value of those variable.


let selections; 
    // this is a variable whose value will be an array, whose elements will be created, and incrememented, based on user input

let totalViews;
    // this is a variable whose value will be an array, whose elemetns will be created, and incremebted, based upon the frequency of their rendering

let totalSets;
    // this is a variable who value will be incremented with each display rendering

const initiateState = () => {
    selections = [];
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
    const radioOneButton = document.getElementById('radio-one');
    const radioTwoButton = document.getElementById('radio-two');
    const radioThreeButton = document.getElementById('radio-three') ;

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
    productOneText = productOne.name;
    productTwoText = productTwo.name;
    productThreeText = productThree.name;

    //img
        // assign the DOM variable's src to the iamge propert of generated product because 
    radioOneImage.src = productOne.image;
    radioTwoImage.src = productTwo.image;
    radioThreeImage.src = productThree.image;
    
};

/* INVENTORY
  I have: 
          -connected the value of radio buttons to the id           of the prouct (this value means I can access the id of the product upon selection)
          -Names of products stored in var
          -src of images stored in variable
          - a function that returns three randomly generated products
          - a function that generates individual random products
          - declared state variables
          - a function that sets an intial state
  */



// 3. need an eventListener that will 
    // call the display function()
    // must have be able to increment the values of state variables: selections ; total views ; total sets
    // must discern between rendering new content OR ending survery
        // conditions are if sets >= 25, survery ends and will DISPLAY RESULTS. If not, render new content and continue to increment.

const form = document.querySelector('form')
//this is creating a variable that is assigned to the value of the form and its contents


form.addEventListener









// 4. Display results






