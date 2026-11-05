
//Assignment 1: Length of Last Word
function lengthOfLastWord(str)
{
   let words = str.trim().split(" ")
   console.log(words);
   
   let i = words.length
   let lastword = words[i-1]
   console.log(lastword.length);
}
lengthOfLastWord("Hello World")


//Assignment 2: Length of Last Word
function lengthOfLastWord1(str1)
{
    let words1 = str1.trim().split(" ")
    console.log(words1);
    let len = words1.length
    let lastword1 = words1[len-1]
    console.log(lastword1);  
}
lengthOfLastWord1("   fly me to the moon   ")


//Assignment 3: Anagram Check
//Check whether two words contain exactly the same letters.
//true
function isAnagram(string1, string2){
    let first = string1.toLowerCase().split("").sort().join("")
    let second = string2.toLowerCase().split("").sort().join("")

   console.log(first===second);
}
isAnagram("listen","silent")



//Input: isAnagram('hello', 'world')  
//false
function isAnagram1(string1, string2){
    let first1 = string1.toLowerCase().split("").sort().join("")
    let second1 = string2.toLowerCase().split("").sort().join("")
   
    console.log(first1===second1);
}
isAnagram1('hello', 'world')