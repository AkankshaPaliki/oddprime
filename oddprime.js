//assigning starting and ending value
let strnum=1
let endnum=10000000
/**
 * helper function to check whether the given numbers 
 * @param {*} num 
 */
function arraylist(number) {
    const numstr = number.toString();
    for (let i = 0; i < numstr.length - 1; i++) {
      const num1 = parseInt(numstr[i]);
      const num2 = parseInt(numstr[i + 1]);
      if (Math.abs(num1 - num2) !== 1) {
        return false;
      }
    }
    return true;
  }
/**
 * helper function to check whether the number is prime or not.
 * @param {*} num const isPrime = (number) => {
    
 */

function prime(num){
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * function to give the range for the loop.
 * @param {*} end
 * @param {*} start  
 * 
 */
function oddprime(strnum, endnum) {
    for (let i = strnum; i <= endnum; i++) {
      if (arraylist(i) && prime(i)) {
        console.log(i);
      }
    }
  }
function main(){

}
oddprime(strnum,endnum);
