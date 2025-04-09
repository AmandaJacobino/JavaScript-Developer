/*Problem: Write two functions: one to compute the Greatest Common Divisor (GCD) and another for the Least Common Multiple (LCM) of two numbers.*/

function findGCD (a, b) {
    let remainder;

    do {
        remainder = (a % b); //Calculate the remainder
        a = b; //Update 'a'
        b = remainder; //Update 'b' with the remainder
    } while (remainder !== 0); //Continue until the remainder is 0; 

    return a; //The last value of 'a' is the GCD

}

function findLCM (a, b) {
    let gcd = findGCD(a, b); //Calling the function 'findGCD'

    return ((a * b) / gcd); //Calculate the LCM and return 
}

//Main to test 
(function (){
    console.log(findGCD(24, 36));
    console.log(findLCM(24, 36));
})();