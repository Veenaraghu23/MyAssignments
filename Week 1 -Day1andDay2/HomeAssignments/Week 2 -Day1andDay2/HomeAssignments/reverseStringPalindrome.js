function checkPalindrome(str){
let reverse = "";
 // Reverse the string
 for(let i= str.length-1; i>=0; i--)
 {
    reverse = reverse + str[i]
 }
 console.log("Original String:", str);
 console.log("Reversed String:", reverse);

 // Check palindrome
 if(str===reverse)
 {
    console.log("Palindrome: true");
    } else {
        console.log("Palindrome: false");
    }
 }
 checkPalindrome("veena")////false
//Original String: veena
//Reversed String: aneev
//Palindrome: false