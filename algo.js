// 258. Add Digits



// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.









/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // Keep adding the digits until num becomes a single digit
    while (num >= 10) {
        let sum = 0;
        
        // Add each digit of the current number
        while (num > 0) {
            sum += num % 10;  // Add the last digit to sum
            num = Math.floor(num / 10);  // Remove the last digit
        }
        
        // Update num to the sum of its digits
        num = sum;
    }
    
    return num;
};
