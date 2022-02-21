// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function even_or_odd(number) {
    var x;
    x = number % 2;

    if (x === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


// Multiply
// This code does not execute properly. Try to figure out why.
// https://www.codewars.com/kata/50654ddff44f800200000004

function multiply(a, b) {
    return a * b;
}


// Check Same Case
// Write a function that will check if two given characters are the same case.
// If any of characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters and not the same case, return 0
// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b


function same_case(a, b) {
    if (a.isalpha() === false || b.isalpha() === false) {
        return -1;
    } else {
        if (a.isupper() === b.isupper()) {
            return 1;
        } else {
            return 0;
        }
    }
}

