"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
//1
function isTrue(input){
    return input === true;
}
//2
function isFalse(input){
    return input === false;
}
//3
function not(input){
    return !input;
}
//4
function addOne(input){
    return parseFloat(input) + 1;
}
//5
function isEven(input){
    if (parseFloat(input) % 2 === 0 ){
        return true;
    } else {
        return false
    }

}
//6
function isIdentical( input1, input2){
    if (input1 === input2) {
        return true;
    } else {
        return false;
    }
}
//7
function isEqual( input1, input2){
    if (input1 == input2) {
        return true;
    } else {
        return false;
    }
}
//8
function or(input1, input2){
    return input1 || input2;
}
//9
function and(input1, input2){
    return input1 && input2;
}
//10
function concat(input1 , input2){
    input1 = input1.toString()
    input2 = input2.toString()
    return input1 + input2;
}