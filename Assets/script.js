// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Asks user what parameters they want for their password.
function generatePassword() {
  var passLength = prompt("Desired password length? (8-20 characters)");
  var uppercase = confirm("Uppercase letters included? (Y/N)");
  var lowercase = confirm("Lowercase letters included? (Y/N)");
  var numbers = confirm("Numbers included? (Y/N)");
  var specialCharacters = confirm("Special characters included (Y/N)?");

  passLength = parseInt(passLength, 10);

  // Invalid data check, ensures user inputs all fields correctly.
  while (true) {
    if (passLength < 8 || passLength > 20 || isNaN(passLength)) {
      alert("Password must be a number 8 to 20 characters.");
      passLength = prompt("Desired password length? (8-20 characters)");
    } else if (!uppercase && !lowercase && !numbers && !specialCharacters) {
      alert("At least one type of character must be selected.");
      uppercase = confirm("Uppercase letters included? (Y/N)");
      lowercase = confirm("Lowercase letters included? (Y/N)");
      numbers = confirm("Numbers included? (Y/N)");
      specialCharacters = confirm("Special characters included (Y/N)?");
    } else {
      break;
    }
  }
  // Starts with characters as empty array, pushes options for parameters users chose, spreads the data individually, puts all chosen data into an array.
  var characters = [];
  if (uppercase) {
    characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (lowercase) {
    characters.push(..."abcdefghijklmnopqrstuvwxyz");
  }
  if (numbers) {
    characters.push(..."0123456789");
  }
  if (specialCharacters) {
    characters.push(..."!@#$%^&*()-_=+[{]}\\|;:'\",.<>?");
  }
  //Pass starts as empty string, chooses random characters based on chosen parameters to the desired length.
  var password = "";

  for (var i = 0; i < passLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}
