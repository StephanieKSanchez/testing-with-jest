// change the function return the sum if a > b, or the difference otherwise

export const sum = (a, b) => {
    if(typeof(a) !== 'number' || typeof(b) !== 'number'){
        return "Bad Input"
    }
    if(a < b){
        return b - a
    }
    
    return a + b;
}

//write a function that raises a number to a third power
// math.pow(a, 10) given a number a, raise to the 10th power
// also can be written a**10, 
    
export const toCube = (num) => {
    if(typeof num !== "number"){
        return "Bad input"
    }
    return num ** 3
}
console.log(toCube(3));

const mathService = {
    sum: sum, 
    toCube: toCube
}

export default mathService