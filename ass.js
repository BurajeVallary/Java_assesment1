//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let stringArray = [“10”,”20”,”30”,”40”,”50”]

//How to convert an array of string to number
//Use the .map() function to convert the array of string into numbers

function arrayStrings(arr){
  return arr.map(Number)
}
let stringArray = ["10","20","30","40","50"]
console.log(arrayStrings(stringArray))

//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 2
//Use the for loop
function multiply(arr) {
    
    let multipliedArray = [];

    for (let b = 0; b < arr.length; b++) {
      
      multipliedArray.push(arr[b] * 2);
    }
  
   
    return multipliedArray;
  }
  const num = [1, 2, 3, 4, 5];
  const multipliedArray = multiply(num);
  console.log(multipliedArray);



//1 Write a function that takes in a string and returns it when reversed
//let food = “eating”

  function foods(string) {
    return string.split('').reverse().join('');
  }
  
  let food = "eating";
  let reversed = foods(food);
  console.log(reversed);

  // Write a function that takes in the following array and consoles the target if it is found else



function getTarget(nums,target){
  if(nums.includes(target)){
    console.log(target);
  }
  else{
    console.log(null);
  }
}
let nums = [2,8,0,23,5,45,76]
let target = 23;
getTarget(nums,target);


////3 Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

for(b=2000;b<=2023;b++)
if(b%4===0){
  console.log(b+" is  leap year");
}
else{
  console.log(b+" is a not leap year");
}

//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for(let x =0; x<=100;x++){
  if(x % 3===0 && x% 5 ===0){
    console.log("FizzBuzz");
  }
  else if(x%3===0){
    console.log("Fizz");
  }
else if(x %5===0){
  console.log("Buzz");
}
else{
  console.log(x)
}
}


//5 Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.

function arrayNumbers(numb){
  return numb.map(num =>num*4);
}
let numy = [12,87,45,75,23,64,73];
console.log(arrayNumbers(numy));