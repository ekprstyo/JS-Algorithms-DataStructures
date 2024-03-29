/* Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function convertToF(celsius) {
    let fahrenheit;
    return fahrenheit;
  }
  
  convertToF(30);
// Turn to
function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  convertToF(30);

/* Should :
convertToF(0) should return a number
Passed

convertToF(-30) should return a value of -22
Passed

convertToF(-10) should return a value of 14
Passed

convertToF(0) should return a value of 32
Passed

convertToF(20) should return a value of 68
Passed

convertToF(30) should return a value of 86
END*/

/* Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
    return str;
  }
  
  reverseString("hello");
// Turn to
function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }
// Or
function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

/* Should :
reverseString("hello") should return a string.
Passed

reverseString("hello") should return the string olleh.
Passed

reverseString("Howdy") should return the string ydwoH.
Passed

reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
END*/

/* Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
    return num;
  }
  
  factorialize(5);
// Turn to
function factorialize(num) {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
  }
  
  factorialize(5);
// Or
function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  factorialize(5);
// Or
function factorialize(num, factorial = 1) {
    if (num == 0) {
      return factorial;
    } else {
      return factorialize(num - 1, factorial * num);
    }
  }
  
  factorialize(5);
// Or
function factorialize(num, factorial = 1) {
    return num < 0 ? 1 : (
      new Array(num)
        .fill(undefined)
        .reduce((product, val, index) => product * (index + 1), 1)
    );
  }
  factorialize(5);

/* Should :
factorialize(5) should return a number.
Passed

factorialize(5) should return 120.
Passed

factorialize(10) should return 3628800.
Passed

factorialize(20) should return 2432902008176640000.
Passed

factorialize(0) should return 1.
END*/

/* Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    return str.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
// Turn to
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }
// Or
function findLongestWordLength(s) {
    return s.split(' ')
      .reduce(function(longest, word) {
        return Math.max(longest, word.length)
      }, 0);
}
// Or
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}
// Or
function findLongestWordLength(str) {
    // split the string into individual words
    const words = str.split(" ");
  
    // words only has 1 element left that is the longest element
    if (words.length == 1) {
      return words[0].length;
    }
  
    // if words has multiple elements, remove the first element
    // and recursively call the function
    return Math.max(
      words[0].length,
      findLongestWordLength(words.slice(1).join(" "))
    );
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

/* Should :
findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
Passed

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
Passed

findLongestWordLength("May the force be with you") should return 5.
Passed

findLongestWordLength("Google do a barrel roll") should return 6.
Passed

findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
Passed

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
END*/

/* Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// Turn to
function largestOfFour(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  } 
  return results;
}
/* Code Explanation

    Create a variable to store the results as an array.
    Create an outer loop to iterate through the outer array.
    Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
    Create said inner loop to work with the sub-arrays.
    Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
    After the inner loop, save the largest number in the corresponding position inside of the results array.
    And finally return said array.
*/
// Or
function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}
/* Code Explanation

    we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
    within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
    the callback function passed to the reduce method takes the previous value and the current value and compares the two values
    if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item
*/
// Or
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
/* Code Explanation

TL;DR: We build a special callback function (using the Function.bind method), that works just like Math.max but also has Function.prototype.apply's ability to take arrays as its arguments.

    We start by mapping through the elements inside the main array. Meaning each one of the inner arrays.
    Now the need a callback function to find the max of each inner array provided by the map.

So we want to create a function that does the work of Math.max and accepts input as an array (which by it doesn’t by default).

In other words, it would be really nice and simple if this worked by itself:

Math.max([9, 43, 20, 6]); // Resulting in 43

Alas, it doesn’t.

    To do the work of accepting arguments in the shape of an array, there is this Function.prototype.apply method, but it complicates things a bit by invoking the context function.

i.e. Math.max.apply(null, [9, 43, 20, 6]); would invoke something like a Max.max method. What we’re looking for… almost.

Here we’re passing null as the context of the Function.prototype.apply method as Math.max doesn’t need any context.

    Since arr.map expects a callback function, not just an expression, we create a function out of the previous expression by using the Function.bind method.
    Since, Function.prototype.apply is a static method of the same Function object, we can call Function.prototype.bind on Function.prototype.apply i.e. Function.prototype.apply.bind.
    Now we pass the context for the Function.prototype.apply.bind call (in this case we want Math.maxso we can gain its functionality).
    Since the embedded Function.prototype.apply method will also require a context as it’s 1st argument, we need to pass it a bogus context.

        So, we pass null as the 2nd param to Function.prototype.apply.bind which gives a context to the Math.max method.

        Since, Math.max is independent of any context, hence, it ignores the bogus context given by Function.prototype.apply method call.

        Thus, our Function.prototype.apply.bind(Math.max, null) makes a new function accepting the arr.map values i.e. the inner arrays.
*/
// Or
function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}

/* Should :
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
Passed

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
Passed

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
Passed

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].
END*/

/* Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
// Turn to
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");

/* Code Explanation

    First we use the slice method copy the string.
    In order to get the last characters in str equivalent to the target's length we use the slice method.
    The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
    For example str.slice(10, 17) would return give me.
    In this case we only include one parameter which it will copy everything from the starting index.
    We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
    Finally we compare the return result of slice to target and check if they have the same characters.
*/
// Or
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));

/* Code Explanation

    We need to make a pattern from the target variable that exists at the end of the string str.
    Since we will use a variable that will change the pattern each time the function is called, we will use the constructor of the regular expression object new RegExp(pattern[, flags]), so we start with: new RegExp(target).
    Then we have to check at the end of the string, so we concatenate to the target variable the $ character to match the end: new RegExp(target+'$').
    We use the flag i to ignore the case of the pattern and we have our completed RegExp: new RegExp(target+'$','i'), or we can ommit the flag entirely.
    Finally, we are using our regular expression with the test method to the given string, to check if the string ends with the pattern and return true or false accordingly.
*/
// Or
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");

/* Code Explanation

    If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.
*/

/* Should :
confirmEnding("Bastian", "n") should return true.
Passed

confirmEnding("Congratulation", "on") should return true.
Passed

confirmEnding("Connor", "n") should return false.
Passed

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
Passed

confirmEnding("He has to give me a new name", "name") should return true.
Passed

confirmEnding("Open sesame", "same") should return true.
Passed

confirmEnding("Open sesame", "sage") should return false.
Passed

confirmEnding("Open sesame", "game") should return false.
Passed

confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Passed

confirmEnding("Abstraction", "action") should return true.
Passed

Your code should not use the built-in method .endsWith() to solve the challenge.
END*/

/* Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
  return str.repeat(str);
}

repeatStringNumTimes("abc", 3);
// Turn to
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

/* Code Explanation

    Create an empty string variable to store the repeated word.
    Use a while loop or for loop to repeat code as many times as needed according to num
    Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
    At the end of the loop, return the variable for the repeated word.
*/
// Or
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

/* Code Explanation

    This solution uses recursion.
    We check if num is negative and return an empty string if true.
    If not, we add the string to a call of our function with num being decreased by 1, which will add another str and another… until eventually num is 1. And return that whole process.
*/
// Or
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

/* Should :
repeatStringNumTimes("*", 3) should return the string ***.
Passed

repeatStringNumTimes("abc", 3) should return the string abcabcabc.
Passed

repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.
Passed

repeatStringNumTimes("abc", 1) should return the string abc.
Passed

repeatStringNumTimes("*", 8) should return the string ********.
Passed

repeatStringNumTimes("abc", -2) should return an empty string ("").
Passed

The built-in repeat() method should not be used.
Passed

repeatStringNumTimes("abc", 0) should return "".
END*/

/* Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
// Turn to
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

/* Code Explanation

    We start off with a simple if statement to determine one of two outcomes…
    If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
    However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.
*/
// Or
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

/* Code Explanation

    This solution is very similar to basic solution. To determine the new string, we use a ternary operator. In our ternary operation, if str.length is larger than num, we return a new string which is slice of our string starting at character 0, and ending at num and the '...' is appended to the end of our new string. If str.length is less than or equal to num, we return the string without any truncation.

    NOTE In order to understand the above code, you need to understand how a Ternary Operator works. The Ternary Operator is frequently used as a shortcut for the if statement and follows this format: condition ? expr1 : expr2. If the condition evaluates to true, the operator returns the value of expr1. Otherwise, it returns the value of expr2.
*/

/* Should :
truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
Passed

truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
Passed

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
Passed

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
Passed

truncateString("A-", 1) should return the string A....
Passed

truncateString("Absolutely Longer", 2) should return the string Ab....
END*/

/* Finders Keepers

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined
*/

function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
// Turn to
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

/* Code Explanation

    Challenge asks us to look through array. This is done using a for loop.
    The num variable is being passed into the function, so we set it to each index in our array.
    The pre-defined function already checks each number for us, so if it is “true”, we return that num.
    If none of the numbers in the array pass the function’s test, we return undefined.
*/
// Or
function findElement(arr, func) {
  return arr.find(func);
}
// Or
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

/* Code Explanation

    Look through the array given in the 1st paramater “arr” using the .map() method
    Use the function in the 2nd parameter as the callback function in arr.map()
    Acquire the index of the first number that meets the condition in the function.
    Use that index to display the first available number that meets the condition.
*/
// Or Recursive solution
function findElement(arr, func) {
  return arr.length && !func(arr[0]) 
    ? findElement(arr.slice(1), func)
    : arr[0];
}

/* Should :
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
Passed

findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
END*/

/* 
Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {
  return bool;
}

booWho(null);
// Turn to
function booWho(bool) {
  return typeof bool === "boolean";
}

// test here
booWho(null);

/* Code Explanation

    Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.
*/

/* Should :
booWho(true) should return true.

booWho(false) should return true.

booWho([1, 2, 3]) should return false.

booWho([].slice) should return false.

booWho({ "a": 1 }) should return false.

booWho(1) should return false.

booWho(NaN) should return false.

booWho("a") should return false.

booWho("true") should return false.

booWho("false") should return false.
END*/

/* Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
// Turn to
String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  var newTitle = str.split(" ");
  var updatedTitle = [];
  for (var st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(" ");
}

/* Code Explanation

We are modifying the replaceAt function using prototype to facilitate the use of the program.

Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.
*/
// Or
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");

/* Code Explanation

We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercase character with uppercase. Finally, we are returning the string using join method.
*/
// Or
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

/* Code Explanation

The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.

    Lowercase the whole string using str.toLowerCase().
    Replace every word’ first character to uppercase using .replace.
    Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern.
    Regex explanation:

    Find all non-whitespace characters (\S)
    At the beginning of string (^)
    Or after any whitespace character (\s)

        The g modifier searches for other such word pattern in the whole string and replaces them.

        This solution works with national symbols and accented letters as illustrated by following examples
        international characters: ‘бабушка курит трубку’ // -> ‘Бабушка Курит Трубку’
        accented characters: ‘località àtilacol’ // -> ‘Località Àtilacol’
*/

/* Should :
titleCase("I'm a little tea pot") should return a string.
Passed

titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
Passed

titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
Passed

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
END*/

/* Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
// Turn to
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

/* Code Explanation

    Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.

    Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.

    Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of localArray.

    We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.

    Finally, we return the localArray and end the function.
*/
// Or
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
/*
    Since our goal is to return the new array with out altering arr1 or arr2 we create a localArr and add all the items from arr2 using the slice() function

    Since the splice() function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into localArr. n is the starting position where our content will be inserted. We won’t be deleting any elements so the next argument is 0. Then we add the entire contents of arr1 using spread syntax ....

    localArr is returned and the function is complete.
*/

/* Should :
frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
Passed

frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
Passed

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
Passed

All elements from the first array should be added to the second array in their original order.
Passed

The first array should remain the same after the function runs.
Passed

The second array should remain the same after the function runs.
END*/

/* Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
// Turn to
/* Hints
Hint 1

Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: undefined, null, NaN, 0, “” (empty string), and false of course.
Hint 2

We need to make sure we have all the falsy values to compare, we can know it, maybe with a function with all the falsy values…
Hint 3

Then we need to add a filter() with the falsy values function…
*/
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}

/* Code Explanation

    We create a new empty array.
    We use a for cycle to iterate over all elements of the provided array (arr).
    We use the if statement to check if the current element is truthy 1.9k or falsy 2.7k.
    If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
    We return the new array (newArray).
*/
// Or
function bouncer(arr) {
  return arr.filter(Boolean);
}

/* Code Explanation

    The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy 1.9k value or false for falsy 2.7k value. Hence we pass the built-in Boolean function.
*/

/* Should :
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
Passed

bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
Passed

bouncer([false, null, 0, NaN, undefined, ""]) should return [].
Passed

bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
END*/

/* Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);
// Turn to
/* Hints
Hint 1

The first thing to do is sort the array from lower to bigger, just to make the code easier. This is where sort comes in, it needs a callback function so you have to create it.
Hint 2

Once the array is sorted, then just check for the first number that is bigger and return the index.
Hint 3

If there is no index for that number then you will have to deal with that case too.
*/

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num)
      return i;
  }

  return arr.length;
}

/* Code Explanation

    First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
    Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index.
*/
// Or
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

/* Code Explanation

    Count the number of entries that are smaller than the new value num
    The new value would be inserted after these values
*/
// Or
function getIndexToIns(arr, num) {
  // sort and find right index
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  // Returns index or total length of arr
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);

/* Code Explanation

    First sort the array in ascending order, this is currently done using array functions for minimal footprint.
    Once the array it is sorted, we directly apply the .findIndex() where we are going to compare every element in the array until we find where num <= currNum meaning where the number we want to insert is less or equal to the current number number in the iteration.
    Then we use ternary operations to check whether we got an index returned or -1. We only get -1 when the index was not found meaning when we get a false for all elements int he array, and for such case, it would mean that num should be inserted at the end of the list hence why we use arr.length.
*/
// Or
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);

/* Code Explanation

    We use method-chaining to invoke one method after another to solve the problem in a single line. First we create a new array with the contents of arr and num by using the concat() method
    Then we use sort() with the callback arrow function (a, b) => return a-b to sort the numbers in ascending order
    Lastly we return the position or index of num in the array with the indexOf() method
*/

/* Should :
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
Passed

getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
Passed

getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
Passed

getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
Passed

getIndexToIns([40, 60], 50) should return 1.
Passed

getIndexToIns([40, 60], 50) should return a number.
Passed

getIndexToIns([3, 10, 5], 3) should return 0.
Passed

getIndexToIns([3, 10, 5], 3) should return a number.
Passed

getIndexToIns([5, 3, 20, 3], 5) should return 2.
Passed

getIndexToIns([5, 3, 20, 3], 5) should return a number.
Passed

getIndexToIns([2, 20, 10], 19) should return 2.
Passed

getIndexToIns([2, 20, 10], 19) should return a number.
Passed

getIndexToIns([2, 5, 10], 15) should return 3.
Passed

getIndexToIns([2, 5, 10], 15) should return a number.
Passed

getIndexToIns([], 1) should return 0.
Passed

getIndexToIns([], 1) should return a number.
END*/

/* Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
// Solution 1
/* Hints
Hint 1

    If everything is lowercase it will be easier to compare.

Hint 2

    Our strings might be easier to work with if they were arrays of characters.

Hint 3

    A loop might help. Use indexOf() to check if the letter of the second word is on the first.
*/
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

/* Code Explanation

First we make the two strings in the array lowercase. test will hold what we are looking for in target.
Then we loop through our test characters and if any of them is not found we return false.

If they are all found, the loop will finish without returning anything and we get to return true.
*/
// Solution 2
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

/* Code Explanation

Grab the second string, lowercase and turn it into an array; then make sure every one of its letters is a part of the lowercased first string.

Every will basically give you letter by letter to compare, which we do by using indexOf on the first string. indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once every will be false.
*/
// Solution 3
function mutation([ target, test ], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
      ? false
      : mutation([ target, test ], i + 1);
}

/* Should :
mutation(["hello", "hey"]) should return false.
Passed

mutation(["hello", "Hello"]) should return true.
Passed

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
Passed

mutation(["Mary", "Army"]) should return true.
Passed

mutation(["Mary", "Aarmy"]) should return true.
Passed

mutation(["Alien", "line"]) should return true.
Passed

mutation(["floor", "for"]) should return true.
Passed

mutation(["hello", "neo"]) should return false.
Passed

mutation(["voodoo", "no"]) should return false.
Passed

mutation(["ate", "date"]) should return false.
Passed

mutation(["Tiger", "Zebra"]) should return false.
Passed

mutation(["Noel", "Ole"]) should return true.
END*/

/* Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Problem Explanation

Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:

    (['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
    ([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
    ([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
    ([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]

*/

function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// Solution 1
/* Hints
Hint 1

The links above suggest to use Array.push(), so let’s start by first creating a new array to store the smaller arrays we will soon have like this:

var newArray = [];

Hint 2

Next we’ll need a for loop to loop through arr.
Hint 3

Finally, we need a method to do the actual splitting and we can use Array.slice() to do that. The key to this Algorithm is understanding how a for loop, size, Array.slice() and Array.push() all work together.
*/
function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];

  for (let a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

/* Code Explanation

    Firstly, we create two empty arrays called temp and result, which we will eventually return.
    Our for loop loops until a is equal to or more than the length of the array in our test.
    Inside our loop, we push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
    Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
    Next, if temp isn’t an empty array, we push it to result.
    Finally, we return the value of result.
*/
// Solution 2
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

/* Code Explanation

    First, we create an empty array arr2 where we will store our ‘chunks’.
    The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
    Note that this for loop does not loop through arr. Instead, we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
    Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to arr2 with arr2.push().
    Finally, we return the value of arr2.
*/
// Solution 3
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

/* Code Explanation

    Firstly, we create two variables. newArr is an empty array which we will push to. We also have the i variable set to zero, for use in our while loop.

    Our while loop loops until i is equal to or more than the length of the array in our test.

    Inside our loop, we push to the newArr array using arr.slice(i, i+size). For the first time it loops, it will look something like:

    newArr.push(arr.slice(1, 1+2))

    After we push to newArr, we add the variable of size onto i.

    Finally, we return the value of newArr.
*/
// Solution 4
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

/* Code Explanation

    Firstly, we create a variable. newArr is an empty array which we will push to.
    Our while loop loops until the length of the array in our test is not 0.
    Inside our loop, we push to the newArr array using arr.splice(0, size).
    For each iteration of while loop, it deletes size number of elements from the front of arr and push them as an array to newArr.
    Finally, we return the value of newArr.
*/
// Solution 5
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}

/* Code Explanation

    Array smaller than size is returned nested.
    For any array larger than size, it is split in two. First segment is nested and concatenated with second segment which makes a recursive call.
*/

/* Should :
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
Passed

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
Passed

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
Passed

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
Passed

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
Passed

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
Passed

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
END*/

// COMPLETE
