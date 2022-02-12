/**  
 * @author Yuxuan Wang
 * @email yx703587@dal.ca
 * @descp CSCI 3172 Lab 5
 */

const inputBox = document.querySelector("input[name='user-in']");

// calculate the total number of prime numbers, composite numbers and neither
function inputStats() {
    let inputArr = inputBox.value.split(",");
    let cPrime = cComp = cNeither = 0;
    inputArr.forEach(function (element) {
        element = parseInt(element, 10);
        switch (isPrime(element)) {
            case true:
                cPrime++;
                break;
            case false:
                cComp++;
                break;
            case "neither":
                cNeither++;
                break;
            default:
                console.log("error occured");
                break;
        }
    });

    return [cPrime, cComp, cNeither];
}

// helper funtion: 
// check if number is prime
function isPrime(num) {
    if (num < 2) { return "neither"; }
    let sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; ++i) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

// print result on the DOM
function printRes(inputArr, result) {
    document.getElementById("inputs").textContent = "Input: [" + inputArr + "]";
    document.getElementById("prime").textContent = "Prime Numbers: " + result[0];
    document.getElementById("composite").textContent = "Composite Numbers: " + result[1];
    document.getElementById("neither").textContent = "Neither: " + result[2];
}

// This is the wrap function bind to button
function wrapInputStats(e) {
    e.preventDefault();
    let result = inputStats();
    printRes(inputBox.value.split(","), result);
}

const button = document.getElementById("calc-btn");
button.addEventListener("click", wrapInputStats, false);