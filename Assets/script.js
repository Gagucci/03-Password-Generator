// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
var passLength = prompt("Desired password length? (8-20 characters)");
var uppercase = confirm("Uppercase letters included? (Y/N)");
var lowercase = confirm("Lowercase letters included? (Y/N)");
var numbers = confirm("Numbers included? (Y/N)");
var specialCharacters = confirm("Special characters included (Y/N)?");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
