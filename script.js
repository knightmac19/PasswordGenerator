// grabbing elements from the DOM
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector('#copy');
var textBox = document.querySelector("#password");

var specialCheck = document.querySelector('#special');
var numbersCheck = document.querySelector('#numbers');
var lowerCheck = document.querySelector('#lowercase');
var upperCheck = document.querySelector('#uppercase');
var lengthInput = document.querySelector('#length');

// boolean status checkers
var generated = false;
var hasSpecialCharacters = false;
var hasNumericCharacters = false;
var hasLowerCaseCharacters = false;
var hasUpperCaseCharacters = false;



// initialize length & password
var length = 0;
var password = '';
// var possibleString = '';

var specialCharacters = '_!@#$%^&*()-+={}[]~`:;",<>.?/|';
var numbersCharacters = '0123456789';
var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseCharacters = lowercaseCharacters.toUpperCase();


// event listeners for checkboxes & length input
specialCheck.addEventListener('change', function() {
  if (this.checked) {
    hasSpecialCharacters = true;
    showGenerateBtn();
  } else {
    return;
  }
});

numbersCheck.addEventListener('change', function() {
  if (this.checked) {
    hasNumericCharacters = true;
    showGenerateBtn();
  } else {
    return;
  }
});

lowerCheck.addEventListener('change', function() {
  if (this.checked) {
    hasLowerCaseCharacters = true;
    showGenerateBtn();
  } else {
    return;
  }
});

upperCheck.addEventListener('change', function() {
  if (this.checked) {
    hasUpperCaseCharacters = true;
    
    showGenerateBtn();
  } else {
    return;
  }
});

lengthInput.addEventListener('change', function() {
  if (this.value >= 8 && this.value <129) {
    length = this.value;
    showGenerateBtn();
  } else {
    return;
  }
});

function showGenerateBtn() {
  if (length >= 8 && length < 129) {
    if (hasSpecialCharacters || hasNumericCharacters || hasLowerCaseCharacters || hasUpperCaseCharacters) {
      generateBtn.classList.remove('invisible');
      generateBtn.classList.add('visible');
    }
    return;
  } 
  return;
};

function showCopyBtn() {
  copyBtn.classList.remove('invisible');
  copyBtn.classList.add('visible');
};

// Write password to the #password input
function writePassword() {
  var options = {
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    length: length
  };

  let possibleCharacters = [];
  let shuffled = [];  
  // console.log(options);

  if (options.hasLowerCaseCharacters) {
    for (var i = 0; i < lowercaseCharacters.length; i++) {
      possibleCharacters.push(lowercaseCharacters[i]);
    }
  };

  if (options.hasUpperCaseCharacters) {
    for (var i = 0; i < uppercaseCharacters.length; i++) {
      possibleCharacters.push(uppercaseCharacters[i]);
    }
  };

  if (options.hasSpecialCharacters) {
    for (var i = 0; i < specialCharacters.length; i++) {
      possibleCharacters.push(specialCharacters[i]);
    }
  };

  if (options.hasNumericCharacters) {
    for (var i = 0; i < numbersCharacters.length; i++) {
      possibleCharacters.push(numbersCharacters[i]);
    }
  };
  
  shuffled = shuffleArray(possibleCharacters);

  password = generatePassword(shuffled, length);
  
  textBox.value = password;
  
  // lastly, make copy button visible
  showCopyBtn();
};

// take in shuffled array and length parameter, return randomized array
function generatePassword(arr, len) {
  let result = [];
  for (var i = 0; i < len; i++) {
    result.push(getRandom(arr));
  }
  return result.join('');
}

// returns one random element from an array
function getRandom(arr) {
  var item = arr[Math.floor(Math.random() * arr.length)];
  return item;
}

// takes in an array and returns shuffled array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
};

// copy functionality
function copyToClipboard() {
  
  textBox.select();
  textBox.setSelectionRange(0, 99999); /* For mobile devices */
  
  document.execCommand("copy");

  // alert("Password copied: " + textBox.value);
};

// Add event listeners to generate & copy buttons
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);


