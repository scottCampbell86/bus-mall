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
    selections = 0;
    totalViews = 0;
    totalSets = 0;
};

initiateState();



/// ---> SECOND : What will the user do to interact and modify these variables and update the state? AND, what does the site require for such an intervention?
// 1. Display content
    // need a number randomizer function that will generate nums that we can use as indicies to identify and return array items at random
    // return 3 dissimlar products and render thsoe items on the page 
        // render AS radio buttons
        // will need to link products to radio buttons (assign radio to product)
        // value of radio buttons to id of product (radio.value = product.id)
  

    //randomizer
const randomProduct = (productsList) => {
    const index = Math.floor(Math.random() * productsList.length);
    const randomProduct = productsList[index];
    return randomProduct;
}

  //function will first, utilize our randomizer to return 3 dissimlar products 
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

//AND then manipulate the DOM, rendering the content
    let radioOne = 
    let radioTwo =
    let radioThree =

    radioOne.value =
    radioTwo.value =
    radioThree.value =
};





// 2. need an eventListener that will increment both set and selection count 
    // and will either render new content OR if sets >= 25, will DISPLAY RESULTS







