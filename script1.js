//03 JavaScipt: Password Generator.

// The password generator will give a new password with at least 8 characters and no more than 128 characters.

//Assignment Code.
    var generateBtn = document.querySelector("#generate");

//Add event listener  when button clicked.
    generateBtn.addEventListener("click", writePassword);

// Arrays
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var specialChar = ["!", "@", "%", "$", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~","_",];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    

// Variables.
    var confLength = "";
    var confLowerCase;
    var confUpperCase;
    var confSpecialChar;
    var confNumericChar;

// Prompt for the length of the password.
    function generatePassword() {
    var confLength = (prompt("How many characters would you like to include in your password?"));

// Loop if answer is outside the parameters.
    while(confLength <= 7 || confLength >= 129) {
      alert("Password length must be between 8 and 128 characters. Try again!");
      var confLength = (prompt("How many characters would you like to include in your password?"));
      }

// Confirm the amount of charactes the user selected.  
    alert(`Password will have ${confLength} characters`);

// Parameters
    var confLowerCase = confirm("Would you like to include lower case letters in your password?");
    var confUpperCase = confirm("Would you like to include upper case letters in your password?");
    var confSpecialCharacter = confirm("Would you like to include special characters in your password?");
    var confNumericCharacter = confirm("Would you like to include numeric characters in your password?");    

// Loop (If the answers do not not correspond the parameters)
    while(confUpperCase === false && confLowerCase === false && confSpecialCharacter === false && confNumericCharacter === false) {
        alert("The password needs to hold at least one parameter!");

    var confLowerCase = confirm("Would you like to include lower case letters in your password?");
    var confUpperCase = confirm("Would you like to include upper case letters in your password?"); 
    var confSpecialCharacter = confirm("Would you like to include special characters in your password?");
    var confNumericCharacter = confirm("Would you like to include special characters in your password?");
    }

// Connect the characters in the password (concat).
    var passwordCharacters = []

    if (confLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    if (confUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    } 

    if (confSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
     
      console.log(passwordCharacters)

      
// The value of the variable will be placed on for loop choosing random characters from the array (characters).
    var randomPassword = ""
     
    for (var i = 0; i < confLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
    }
    
    return randomPassword;
}

// Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
    }



