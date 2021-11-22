// Assignment code here
var passLength = window.prompt ("Desired Password Length?");

var charset = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  specChar: "!@#$%^&*()",
}


function generatePassword () {
   length = passLength,
   charset = "!@#$%^&*()1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
   random = "";

   for (var i = 0; i < length; i++) {
    random += charset.charAt(Math.floor(Math.random()* charset.length));
   }
return random;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   

  passwordText.value = password;

}



 

generateBtn.addEventListener("click", writePassword);


  
