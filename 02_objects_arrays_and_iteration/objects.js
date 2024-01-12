// ✅ Creating & Accessing Objects


// creating object literals
//   empty object (no key / value pairs)
    const obj = {}

//   object with single property (one key / value pair)
    const onlyOneKeyValuePair = { key: 'value'}
//   object with multiple properties of different data types (multiple key / value pairs)
    const dog = {
        name: 'Apollo',
        age: 2,
        colors: ['golden'],
        breed: 'Golden Retriever',
        sit: () => console.log('dog is sitting'),
        'hello world': 'hello'
    }
// accessing object properties
let nameProperty = 'name'
//   bracket notation (in what situations would we need to use this?)
// console.log(dog[nameProperty])
//   dot notation (better for readability)
// console.log(dog.breed)
//   convert object properties and values into an array
// console.log(Object.entries(dog))
// ✅ Modifying Objects

    // destructively

        //   adding a property
            dog.tricks = ['sit', 'down', 'shake']
            dog['tricks'] = ['sit']

        //   changing a property value
            dog.age = 1
            dog['age'] = 1

            //   removing a property
            delete dog["hello world"]

    // nondestructively
        // use the spread operator {...} to create a clone of the original object...
        const dogCopy = {...dog, age: 2}
        console.log(dogCopy)
        //   ...that you can then modify without altering the original object
        // dogCopy.age = 2


// ✅ Iterating Over Objects vs. Arrays

// what is the main distinction between looping and iterating?

//   for...in (iterate over keys of an object)
for (key in dog) {
    // console.log(key)
    console.log(dog[key])
    // console.log(dog.key)
}
//   for...of (iterate over values of an iterable object (e.g., array, string, etc.))
for (potato of Object.values(dog)) {
    console.log(potato)
}


