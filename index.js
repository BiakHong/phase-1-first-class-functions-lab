// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    let newArray;
    newArray = array.slice(0,2);
    return newArray;
}
    const name = prompt("What is your name?")

const returnLastTwoDrivers = function(array){
    let newArray;
    newArray = array.slice(-2);
    return newArray;
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(amount){
    return num => num * amount;

}
const fareDoubler = function(num){
    return num*2;
}
const fareTripler = x => x*3;

function selectDifferentDrivers(arrayOfDrivers, fn){
    return fn(arrayOfDrivers);
}