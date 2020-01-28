import { products } from './itemArray';

// the current array
let setArray = [];
// prior array
let priorSet = [];
// selections array
let selections = [];
// total item views;
let itemViews = [];
//incrementor for 
let totalSets = 1;
//assignment to empty array for use in getting new set arrays
let validProducts = [];
//submit button to engage event listener
const submitButton = document.getElementById('submit-button');
//capturing value of selection
const userChoice = document.querySelector('input:checked');
const photoOne = documnet.getElementById(photo-1);
const photoTwo = documnet.getElementById(photo-2);
const photoThree = document.getElementById(photo-3)

// on load
export const firstArrayFunction = (products) => {
  const initOne = Math.floor(Math.random() * products.length);
  const initTwo = Math.floor(Math.random() * products.length);
  const initThree = Math.floor(Math.random() * products.length);

  const firstArray = [initOne.image, initTwo.image, initThree.image];

  let firstArray = priorSet
  return priorSet;
}

// state engaged

export const getValidProducts = (products, priorSet) => {
  for (let i = 0; i < length.priorSet; i++) {
      let i = priorSet[i];
      let validProducts = products.splice(priorSet(i)); 
  }
  return validProducts;
};

// generates new set if items and precludes duplicates
export const newSetFunction = (validProducts) => {
    let setArray = []
    let itemOne = Math.floor(Math.random() * validProducts.length);
    setArray.push(itemOne.image);
    let itemTwo = Math.floor(Math.random() * validProducts.length);
    setArray.push(itemTwo.image);
    let itemThree = Math.floor(Math.random() * validProducts.length);
    setArray.push(itemThree.image);
    while(itemOne === itemTwo) {
      itemTwo = Math.floor(Math.random() * validProducts.length);
  }
    while(itemOne === number3 || itemTwo === itemThree) {
      itemThree = Math.floor(Math.random() * validProducts.length);
  }
    return setArray;
};




// render set array on webpage
export const renderSetFunction = (newSetFunction) => {
   let setArray[0] = item1;
   let setArray[1] = item2;
   let setArray[2] = item3;

   photoOne.src = item1;
   photoTwo.src = item2;
   photoThree.src = item3;

};

submitButton.addEventListener("click", () {
  if (clicks > 0 && click < 25) {
    displayResults()
  }
  let clicks = clicks += 1;
  // getting ride of the items that previously appeared
  getValidProducts(products, priorSet);
  // this thius generates three random items and pushed them into an empty array
  newSetFunction(validProducts);
  // render set array on webpage
  renderSetFunction(setArray);





  const userChoice = document.querySelector('input:checked')
  click++ 
});


export const getValidProducts = (products, priorSet) => {
  for (let i = 0; i < length.priorSet; i++) {
      let i = priorSet[i];
      let validProducts = products.splice(priorSet(i)); 
  }
  return validProducts;
};

export const setArrayFunction = (validProducts) => {
    let setArray = []
    let itemOne = Math.floor(Math.random() * validProducts.length);
    setArray.push(itemOne.image);
    let itemTwo = Math.floor(Math.random() * validProducts.length);
    setArray.push(itemTwo.image);
    let itemThree = Math.floor(Math.random() * validProducts.length);
    setArray.push(itemThree.image)

    return setArray;
};

export placePhotos {
    if clicks < 25 {
      // render set array on page
    }
}










