// ✅ Creating / Accessing Arrays

//   what are arrays?

//   define an array with several values
const array = ['strings', 100, [], {}]
// new Array()
//   can contain a mix of data types
//   what is the technical term for these individual items?
// count items in an array
// console.log(array.length)
// ✅ Modifying Arrays

// adding elements to an array
// add element to end of array
array.push('hello')
// add element to beginning of array
array.unshift(5)
// removing elements from an array
//   remove last element and return that element
array.pop()
//   remove first element and return that element
const firstElementInArrayRemoved = array.shift()

//   return the element at the index provided in a new array
const newArray = array.slice(2, 3)
//   return all elements where index >= 0 and index < 2
const newArrayTwo = array.slice(0, 2)

//   starting at index 1, return 2 elements
//   add elements where others are removed

// ✅ Iterating Through Arrays

//   looping over arrays

//   for loop
for (let i = 0; i < array.length; i++ ) {
    console.log(array[i])
}

//   for...of loop
for (el of array) {
    console.log(el)
}
//   while loop
let i = 0
while (i < array.length) {
    console.log(array[i])
    i++
}
//   do while loop




