// grabbing elements from the DOM
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector('#copy');
var specialCheck = document.querySelector('#special');
var numbersCheck = document.querySelector('#numbers');
var lowerCheck = document.querySelector('#lowercase');
var upperCheck = document.querySelector('#uppercase');
var lengthInput = document.querySelector('#length');

// boolean status checkers
var generated = false;
var specialChars = false;
var numbers = false;
let lowercase = false;
var uppercase = false;

// initialize length & password
var length = 0;
var password = '';

// event listeners for checkboxes & length input
specialCheck.addEventListener('change', function() {
  if (this.checked) {
    specialChars = true;
    showGenerateBtn();
  } else {
    return;
  }
});

numbersCheck.addEventListener('change', function() {
  if (this.checked) {
    numbers = true;
    showGenerateBtn();
  } else {
    return;
  }
});

lowerCheck.addEventListener('change', function() {
  if (this.checked) {
    lowercase = true;
    showGenerateBtn();
  } else {
    return;
  }
});

upperCheck.addEventListener('change', function() {
  if (this.checked) {
    uppercase = true;
    
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
  if (length != 0) {
    if (specialChars || numbers || lowercase || uppercase) {
      generateBtn.classList.remove('invisible');
      generateBtn.classList.add('visible');
    } else {
      return;
    }
  } 
  return;
};

function showCopyBtn() {
  copyBtn.classList.remove('invisible');
  copyBtn.classList.add('visible');
};

// Write password to the #password input
function writePassword() {

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  password = passwordText.value;
  
  // lastly, make copy button visible
  showCopyBtn();

};

// copy functionality
function copyToClipboard() {
  var copyText = document.getElementById("password");
  
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
  document.execCommand("copy");

  alert("Password copied: " + copyText.value);
};

// Add event listeners to generate & copy buttons
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);


