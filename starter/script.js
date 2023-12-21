// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
    // Prompt for password length
    var passwordLength = prompt("Enter password length (between 8 and 128 characters):");

    // Validate password length
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return;
    }

    // Confirm character types
    var includeLower = confirm("Include lowercase characters?");
    var includeUpper = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    // Validate at least one character type is selected
    if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
        alert("Please select at least one character type.");
        return;
    }

    // Object to store user input
    var passwordOptions = {
        length: passwordLength,
        includeLower: includeLower,
        includeUpper: includeUpper,
        includeNumeric: includeNumeric,
        includeSpecial: includeSpecial
    };

    // Return the password options
    return passwordOptions;
};

// Function for getting a random element from an array
function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
    var options = getPasswordOptions();
    var allCharacters = [];
    var result = "";
  
    // Concatenate selected character types
    if (options.includeLower) {
      allCharacters = allCharacters.concat(lowerCasedCharacters);
    }
    if (options.includeUpper) {
      allCharacters = allCharacters.concat(upperCasedCharacters);
    }
    if (options.includeNumeric) {
      allCharacters = allCharacters.concat(numericCharacters);
    }
    if (options.includeSpecial) {
      allCharacters = allCharacters.concat(specialCharacters);
    }
  
    // Generate password
    for (var i = 0; i < options.length; i++) {
      var randomChar = getRandom(allCharacters);
      result += randomChar;
    }
  
    // Return the generated password
    return result;
  }

  