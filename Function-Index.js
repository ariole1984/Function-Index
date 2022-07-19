/*
Find the Index
Create a function that takes an array and a string as 
arguments and return the index of the string.

Examples
findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

findIndex(["a", "g", "y", "d"], "d") ➞ 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
*/

const findIndex = (arr, x) => {
    let a;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== x) {
        a = i;
      } else {
        return i;
      }
    }
  };
  
  console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
  console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
  console.log(findIndex(["a", "g", "y", "d"], "d"));
  console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))
  
  