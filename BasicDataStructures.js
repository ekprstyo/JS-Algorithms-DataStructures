/* Use an Array to Store a Collection of Data

The below is an example of the simplest implementation of an array data structure. This is known as a one-dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains booleans, strings, and numbers, among other valid JavaScript data types:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);

The console.log call displays 7.

All arrays have a length property, which as shown above, can be very easily accessed with the syntax Array.length. A more complex implementation of an array can be seen below. This is known as a multi-dimensional array, or an array that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];

We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.
*/

let yourArray; // Change this line
// Turn to
let yourArray = ["aku", 7, true, "pintar", 5];

/* Should :
yourArray should be an array.
Passed

yourArray should be at least 5 elements long.
Passed

yourArray should contain at least one boolean.
Passed

yourArray should contain at least one number.
Passed

yourArray should contain at least one string.
END*/

/* Access an Array's Contents Using Bracket Notation

The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about how we can access that array's information.

When we define a simple array as seen below, there are 3 items in it:

let ourArray = ["a", "b", "c"];

In an array, each array item has an index. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are zero-indexed, meaning that the first element of an array is actually at the zeroth position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is known as bracket notation. For example, if we want to retrieve the a from ourArray and assign it to a variable, we can do so with the following code:

let ourVariable = ourArray[0];

Now ourVariable has the value of a.

In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:

ourArray[1] = "not b anymore";

Using bracket notation, we have now reset the item at index 1 from the string b, to not b anymore. Now ourArray is ["a", "not b anymore", "c"].

In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b.

*/

let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
// Turn to
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1]="e"
// Only change code above this line
console.log(myArray);

/* Should :
myArray[0] should be equal to the letter a
Passed

myArray[1] should not be equal to the letter b
Passed

myArray[2] should be equal to the letter c
Passed

myArray[3] should be equal to the letter d
END*/

/* Add Items to an Array with push() and unshift()

An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are mutable. In this challenge, we will look at two methods with which we can programmatically modify an array: Array.push() and Array.unshift().

Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the push() method adds elements to the end of an array, and unshift() adds elements to the beginning. Consider the following:

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');

romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree);

romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
*/

function mixedNumbers(arr) {
    // Only change code below this line
  
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));
// Turn to
function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

/* Should :
mixedNumbers(["IV", 5, "six"]) should now return ["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]
Passed

The mixedNumbers function should utilize the push() method
Passed

The mixedNumbers function should utilize the unshift() method
END*/

/* Remove Items from an Array with pop() and shift()