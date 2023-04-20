

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
  let a = 0;
  let b = 0;

  while (a < left.length && b < right.length) {
    if (left[a] < right[b]) {
      result.push(left[a]);
      a++;
    } else {
      result.push(right[b]);
      b++;
    }
  }

  return result.concat(left.slice(a)).concat(right.slice(b));
}


function binarySearch(arrs, target) {
  let c = 0;
  let d = arrs.length - 1;

  while (c <= d) {
    let middle = Math.floor((c +d) / 2);

    if (arrs[middle] === target) {
      return target;
    } else if (arrs[middle] < target) {
      c = middle + 1;
    } else {
      d = middle - 1;
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
console.log(nums);
 




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







