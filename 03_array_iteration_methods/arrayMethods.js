// ✅ Array Iteration Methods
    // What are callback functions?
    // a function passed to another function as an argument
    //  the other function invokes it

    // .forEach()
        // const nums = [1,2,3,4,5]

        // function actionForElementInArray(num) {
        //     console.log(num * 2)
        // }
        // nums.forEach(actionForElementInArray)

        // nums.forEach((num, i, originalArry) => {
        //     console.log(num)
        //     console.log(num * 2)
        // })
    // const dog = {
    //     sit: () => console.log('dog is sitting')
    // }
    // .map()

        const names = ['Emiley', 'Apollo', 'Daisy']

        const newArry = names.map((element) => {
            const greeting = 'hi ' + element
            return greeting
        })
        // const elementOne = {name: 'Emiley'}
        // const elementTwo = {name: 'Apollo'}

        // const arry = [elementOne, elementTwo]
        // const newArryFilter = [elementOne]
        // newArryFilter[0].name = "Emily"
        // console.log(arry)
        // console.log(elementOne)
        // const newArry = names.map((element) => 'hi ' + element )
        // console.log(newArry)

    // .filter()
        // Shallow copy
    const arryOfObjects = [{name: 'Emiley'}, {name: 'Dog'}]

    const newFilteredArry = arryOfObjects.filter((element) => {
        return element.name.length > 3
        // if (element.name.length > 3) {
        //     return true
        // } else {
        //     return false
        // }
    })
    // console.log(newFilteredArry)
    newFilteredArry[0].name = 'emily'
    // console.log(newFilteredArry)
    // console.log(arryOfObjects)
    // .find()

    const arry = [
        {id: 1, name: 'Emiley'},
        {id: 2, name: 'Daisy'}, 
        {id: 3, name: 'Apollo'}
    ]
    const foundElement = arry.find((element) => {
        return element.id === 1
    })

    console.log(foundElement)


// 🚧 Break Out Activity 1:
    const strings = ['hello', 'hi', 'world', 'potato']
    /* 
        create a function that accepts an array of strings
        and prints out each element in the array if
        the string has more than 5 characters
    */

    function printElementGreaterThanFive(stringsArry) {
        stringsArry.forEach((element) => {
            if (element.length >= 5) {
                console.log(element)
            }
        })
    }

    // printElementGreaterThanFive(strings)


// 🚧 Break Out Activity 2:
    const nums = [2, 3, 4]
    /*  
        create a function that accepts an array of numbers 
        it will create a new array of the numbers squared 
        returns the new array of squared numbers
    */
    // function squared(arryOfnums) {
    const squared = (arryOfNums) => {
        const numsSquared = arryOfNums.map((element) => element ** 2)
        return numsSquared
    }

    squared(nums)
    
    

// 🚧 Break Out Activity 3:
    const numbers = [2, 7, 5, 3, 10, 4]
    /* 
        create a function that accepts an array of numbers 
        it will return a new array with the numbers 
        from the array that are greater than 4
    */

    function getNumbersGreaterThanFour(arryOfNums) {
        return arryOfNums.filter((num) => {
            return num > 4
        })
    }

    // console.log(getNumbersGreaterThanFour(numbers))

