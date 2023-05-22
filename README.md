# Challenge 3 Password Generator

## Description

The goal of this project was to take the base code provided and make use of Javascript to complete a password generator. The method I used started with me finishing the generatePassword function to have it prompt the user what parameters they want in their password upon clicking the "generate" button. Following that is a "while" loop that acts as a input check that ensures each password is between 8-20 characters, must have at least one character type selected, and ensures that character value put in is a number. Next I set up a empty array for the characters that holds all the possible characters in separate if statements. The characters are pushed to the array to be used only if their type was chosen. After being pushed to that array each character is separated into its own element. Finally to actually create the password with the users chosen parameters I made a for loop adds a random character from the character array for as long as the chosen password length. The finished password is then returned and displayed on the page.

## Credits

Credit to Tudor Tocan, the tutor who helped me troubleshoot my code and provided me with information to help me complete this project.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Images

![Screenshot of active website](./Assets/Images/Password%20Generator.png)

## Links
