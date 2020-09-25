// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// add variables for numbers
// add variables for upper case
// add variables for lower case
// add special character


  var upperCase = []
  var lowerCase = []
  var specialChar = []
  var numbers = []
 

var confirmLength = "";
var confirmUpper = "";
var confirmLower = "";
var confirmSpecialChar = "";

function generatePassword(){
  var confirmLength = prompt("How long would you like your password to be? Please choose a length between 8 and 128 characters")
  
  while (confirmLength < 8 || confirmLength > 128 ){
    var confirmLength = alert("Please choose a length between 8 and 128 characters");

  }

  if(confirmLength > 8 || confirmLength < 128 ) {

  confirmUpper = confirm("WOuld you like to use upper case letters?");

  }
}

generatePassword()


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// 

//var for the answer for 
