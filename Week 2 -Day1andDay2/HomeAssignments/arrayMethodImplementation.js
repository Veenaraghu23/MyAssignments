// 1. push() - Add elements into an array
let colors = ["pink", "green", "Orange", "purple"];
colors.push("white")
console.log("After push:", colors);

// 2. pop() - Remove the last element
colors.pop()
console.log("After pop:", colors);

// 3. shift() - Remove the first element
colors.shift()
console.log("After shift:", colors);

// 4. unshift() - Add an element at the beginning
colors.unshift("Yellow")
console.log("After unshift:", colors);

// 5. includes() - Check whether an element exists
console.log("Contains green?",colors.includes("green"));

// 6. indexOf() - Find the position of an element
console.log("index of green is ",colors.indexOf("green"));

// 7. join() - Convert array into string
let string = colors.join("....,")
console.log("Joined String:",string);

// 8. reverse() - Reverse the array
colors.reverse()
console.log("Reversed Array:", colors);

// 9. sort() - Sort the array
let numbers = [1,6,5,2,9]
numbers.sort()
console.log("After sorting:",numbers);


let Fruits = ["Bannana", "Apple", "Orange", "Kiwi", "Dragon"]
Fruits.sort()
console.log("After sorting:",Fruits);


//10. Slice- Returns selected elements without changing original array
//start → Starting index (included)
//end → Ending index (excluded)
let Fruits1 = ["Bannana", "Apple", "Orange", "Kiwi", "Dragon"]
let result = Fruits1.slice(1,3);
console.log("After Slicing:",result);

//11.splice()
//Purpose: Add, remove, or replace elements in an array.
let devices = ["mobile","TV","fridge","laptop","desktop"]
let result1 = devices.splice(1,2)
console.log("After Splicing:",result1);

let arr = [1, 2, 3, 4, 5];

arr.splice(2, 2, 10, 20);

console.log(arr);

let arr1 = [1,3,5,6,8,0]
arr1.splice(2,3,12,13,14)
console.log(arr1);




