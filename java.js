

// 1 Write a function that takes in a string and returns it when reversed
//let food = “eating”

let food="eating";
let foods=food.split('').reverse().join('');
console.log(foods);





//2 Write a function that takes in the following array and consoles the target if it is found else
//null
let num = [2,8,0,23,5,45,76]
let target = 23;


function array(arrays) {
  if (arrays.length <= 1) {
    return arrays;
  }
  

  const middle = Math.floor(arrays.length / 2);
  const left = arrays.slice(0, middle);
  const right = arrays.slice(middle);

  return merge(array(left), array(right));
}

function merge(left, right) {
  let result = [];
  let k = 0;
  let l = 0;

  while (k < left.length && l < right.length) {
    if (left[k] < right[l]) {
      result.push(left[k]);
      k++;
    } else {
      result.push(right[l]);
      l++;
    }
  }

  return result.concat(left.slice(k)).concat(right.slice(l));
}


function binarySearch(arrs, target) {
  let m = 0;
  let n = arrs.length - 1;

  while (m <= n) {
    let middle = Math.floor((m +n) / 2);

    if (arrs[middle] === target) {
      return middle;
    } else if (arrs[middle] < target) {
      m = middle + 1;
    } else {
      n = middle - 1;
    }
  }

  return null;
}


const sortedNum = array(num);


const results = binarySearch(sortedNum, target);

console.log(results);


//3 Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”




//5 Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
const nums=num.map(
    (value)=>{
        return value * 4
    }
)
console.log(num);
 




// 6 Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let number = [“10”,”24”,”45”,”56”,”67”]

let number = ["10", "24", "45", "56", "67"]
function stringArray(arr){
  let empty =[]
  for (let b=0; b<arr.length;b++){
  

  }
}

//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.







