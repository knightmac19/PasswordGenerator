// todo's: 
//    1) add slider element: https://www.w3schools.com/howto/howto_js_rangeslider.asp
//    2) change generate button to say 'Refresh' after password initially created
//    3) restrict users from not having at least one checkbox checked

// grabbing elements from the DOM
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector('#copy');
var textBox = document.querySelector("#password");
generateBtn.textContent = 'Generate';
copyBtn.textContent = 'Copy';

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

var specialCharacters = '_!@#$%^&*()-+={}[]~`:;",<>.?/|';
var numbersCharacters = '0123456789';
var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseCharacters = lowercaseCharacters.toUpperCase();

// event listeners for checkboxes & length input
specialCheck.addEventListener('change', function() {
  if (this.checked) {
    hasSpecialCharacters = true;
    showGenerateBtn();
  };
  if (!this.checked) {
    hasSpecialCharacters = false;
    hideGenerateBtn();
  }
});

numbersCheck.addEventListener('change', function() {
  if (this.checked) {
    hasNumericCharacters = true;
    showGenerateBtn();
  };
  if (!this.checked) {
    hasNumericCharacters = false;
    hideGenerateBtn();
  }
});

lowerCheck.addEventListener('change', function() {
  if (this.checked) {
    hasLowerCaseCharacters = true;
    showGenerateBtn();
  };
  if (!this.checked) {
    hasLowerCaseCharacters = false;
    hideGenerateBtn();
  }
});

upperCheck.addEventListener('change', function() {
  if (this.checked) {
    hasUpperCaseCharacters = true;
    showGenerateBtn();
  };
  if (!this.checked) {
    hasUpperCaseCharacters = false;
    hideGenerateBtn();
  }
});

lengthInput.addEventListener('change', function() {
  if (this.value >= 8 && this.value < 41) {
    length = this.value;
    showGenerateBtn();
  } else {
    length = this.value;
    hideGenerateBtn();
  }
});

// conditionally displaying or hiding buttons
function hideGenerateBtn() {
  if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCaseCharacters && !hasUpperCaseCharacters) {
    removeGenerateBtn();
    hideCopyBtn();
    return;
  } else if (length < 8 || length > 40) {
    removeGenerateBtn();
    hideCopyBtn();
  } else {
    return;
  }
}

function showGenerateBtn() {
  if (length > 7 && length < 41) {
    if (hasSpecialCharacters || hasNumericCharacters || hasLowerCaseCharacters || hasUpperCaseCharacters) {
      displayGenerateBtn();
    }
    return;
  } 
  return;
};

// adding and removing css classes
function displayGenerateBtn() {
  generateBtn.classList.remove('invisible');
  generateBtn.classList.add('visible');
}

function removeGenerateBtn() {
  generateBtn.classList.remove('visible');
  generateBtn.classList.add('invisible');
}

function hideCopyBtn() {
  copyBtn.classList.remove('visible');
  copyBtn.classList.add('invisible');
}

function showCopyBtn() {
  copyBtn.classList.remove('invisible');
  copyBtn.classList.add('visible');
};

// Write password to the #password input
function writePassword() {
  copyBtn.textContent = 'Copy';
  var options = {
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    length: length
  };

  let possibleCharacters = [];
  let shuffled = [];  

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
  generateBtn.textContent = 'Refresh';
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
  copyBtn.textContent = 'Copied!';

  // alert("Password copied: " + textBox.value);
};

// Add event listeners to generate & copy buttons
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);