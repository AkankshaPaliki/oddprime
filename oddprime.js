
const numbers=[];
/**
 * helper function to check whether the given numbers 
 * @param {*} num 
 */
function arraylist(num){
    let arr = Array.from(num.toString(), Number);//to convert string to array of elements
        for(let j=0;j<arr.length;j++){
            // to check the difference
            if(Math.abs(parseInt(arr[j+1]))-Math.abs(parseInt(arr[j]))==1){ 
                return true;
            }
        }
    
    return false;
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
function iterate_range(start,end){

    for(let i=0;i<=end;i++){
        if(prime(i) && arraylist(i) == true){
            //if the number is prime all the number will be pushed into array
            numbers.push(i);
            
        }
    }
}
//iteration range from n1 to n2
iterate_range(1,1000000);
console.log(numbers);
function main(){ 
    prime()
}
main()