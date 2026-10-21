// 1. String Basics
// Exercise 1: Create a string and find its length
let message = "Hello World";
// TODO: Print the length of the string
console.log(message);

// Exercise 2: Access characters
let word = "JavaScript";
// TODO: Print the first character and the last character
// Hint: Use charAt() or bracket notation
console.log(word.charAt(0), word.charAt(word.length-1))

// Exercise 3: Concatenation
let firstName = "John";
let lastName = "Doe";
// TODO: Create a full name using concatenation and template literals
let fullName = `${firstName} `+`${lastName}` ;
console.log(fullName)

// 2. Case Conversion
// Exercise 4: Change case
let text = "Hello World";
// TODO: Convert to uppercase and lowercase
// Expected: "HELLO WORLD" and "hello world"
console.log(text.toUpperCase(), text.toLowerCase())

// Exercise 5: Capitalize first letter
let sentence = "javascript is awesome";
// TODO: Capitalize only the first letter
// Expected: "Javascript is awesome"
let capitalized = sentence.charAt(0).toUpperCase() + sentence.slice(1);
console.log(capitalized)


// Exercise 6: Find substring
let phrase = "The quick brown fox jumps over the lazy dog";
// TODO: Check if "fox" exists in the phrase
let hasFox = phrase.includes("fox") ;
console.log(hasFox) ;
// TODO: Find the index of "brown"
let indi = phrase.indexOf("brown") ;
// TODO: Check if the phrase starts with "The" and ends with "dog"
let startsWithThe = phrase.startsWith("The");
let endsWithDog = phrase.endsWith("dog");
console.log(startsWithThe); // true
console.log(endsWithDog);   // true



// Exercise 7: Count occurrences
let data = "apple banana apple orange apple apple";
// TODO: Count how many times "apple" appears
// Expected: 3
let count = data.split("apple").length - 1 ;
console.log(count) ;

// Exercise 8: Extract substring
let email = "user@example.com";
// TODO: Extract the username (before @) and domain (after @)
let [username, domain] = email.split("@") ;
console.log(username, domain) ;



// Exercise 9: Replace characters
let text1 = "Hello World";
// TODO: Replace "World" with "JavaScript"
let updatedText = text1.replace("World", "JavaScript") ;
console.log(updatedText) ;

// TODO: Replace all "l" with "L"
let upperL = text1.replaceAll('l', 'L') ;
console.log(upperL) ;

// Exercise 10: Trim whitespace
let messy = "   Hello World   ";
// TODO: Remove leading and trailing spaces
let trimmedMessy = messy.trim() ;
console.log(trimmedMessy);

// Exercise 11: Split and join
let csv = "apple,banana,orange,grape";
// TODO: Split into array and join with " | "
// Expected: "apple | banana | orange | grape" 
let resultCSV = csv.split(',').join(' | ') ;
console.log(resultCSV);

// Exercise 12: Reverse words
let sentence1 = "Hello World from JavaScript";
// TODO: Reverse the order of words
// Expected: "JavaScript from World Hello"


// Exercise 13: Validate email
function validateEmail(email) {
    // TODO: Check if email contains @ and .
    // Return true/false
    if (email.includes('@') && email.includes('.')){
        return true ;
    } else {
        return false;
    }
}
// Test cases:
console.log(validateEmail("user@example.com")) // true
console.log(validateEmail("invalid.email")) // false

// Exercise 14: Check palindrome
function isPalindrome(str) {
    // TODO: Check if string reads same forwards and backwards
    // Ignore spaces, punctuation, and case
    // 1. Clean the string: Lower-case it and remove all non-alphanumeric characters
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,"");

    // 2.Reverse the cleaned string
    let reversedStr = cleanStr.split("").reverse().join("");

    // 3. Compare them
    return cleanStr === reversedStr ;

    
}
// Test: "A man, a plan, a canal: Panama" // true
// Test cases:
console.log(isPalindrome("A man, a plan, a canal. Panama")); // true
console.log(isPalindrome("racecar"));                         // true
console.log(isPalindrome("hello"));                           // false

// Exercise 15: Remove duplicates
let str = "programming";
// TODO: Remove duplicate characters
// Expected: "progamin"

// Exercise 16: Find longest word
let sentence2 = "The quick brown fox jumped over the lazy dog";
// TODO: Find the longest word
// Expected: "jumped"

// Exercise 17: Anagrams
function areAnagrams(str1, str2) {
    // TODO: Check if two strings are anagrams
    // (contain same characters in different order)
}
// Test: areAnagrams("listen", "silent") // true
// Test: areAnagrams("hello", "world") // false

// Exercise 18: Camel case converter
let text2 = "hello-world-example";
// TODO: Convert to camelCase
// Expected: "helloWorldExample"

// Exercise 19: Title case
let title = "the quick brown fox";
// TODO: Convert to Title Case
// Expected: "The Quick Brown Fox"

// Exercise 20: Mask sensitive data
let creditCard = "1234567890123456";
// TODO: Mask all but last 4 digits
// Expected: "************3456"


// Challenge 1: String compression
function compressString(str) {
    // TODO: Compress string using character counts
    // Only compress if shorter than original
}
// Test: compressString("aabcccccaaa") // "a2b1c5a3"
// Test: compressString("abc") // "abc" (no compression needed)

// Challenge 2: Longest palindrome substring
function longestPalindrome(str) {
    // TODO: Find the longest palindromic substring
}
// Test: longestPalindrome("babad") // "bab" or "aba"

// Challenge 3: String permutation
function hasPermutation(str1, str2) {
    // TODO: Check if str2 contains a permutation of str1
}
// Test: hasPermutation("ab", "eidbaooo") // true (contains "ba")

// Challenge 4: URL parameter parser
function parseQueryString(url) {
    // TODO: Extract query parameters into an object
}
// Test: parseQueryString("?name=John&age=30&city=NYC")
// Expected: { name: "John", age: "30", city: "NYC" }



