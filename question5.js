//Use the map() method on the numbers array below to create a NEW array where every number is doubled. Log the new array. Do NOT change the original.
const numbers = [3, 6, 9, 12, 15];
let newArray = numbers.map(function(number){
    return number * 2;
})
console.log(newArray)