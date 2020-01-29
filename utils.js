//this function will be used to 
export default function findById(someId, someArray) {
    for (let i = 0 ; i < someArray.length ; i++) {
        const item = someArray[i];
        if (someId === item.id) {
            return item;
        }
    }
}