// grabbing copy and generate button
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector('#copy');

generateBtn.classList.add('invisible');
copyBtn.classList.add('invisible');

var specialCheck = document.querySelector('#special');
var numbersCheck = document.querySelector('#numbers');
var lengthInput = document.querySelector('#length');
var lowerCheck = document.querySelector('#lowercase');
var upperCheck = document.querySelector('#uppercase');

// boolean status checkers
let generated = false;
let specialChars = false;
let numbers = false;
let lowercase = false;
let uppercase = false;
let lengthBoolean = false;
let length = 0;

specialCheck.addEventListener('change', function() {
  if (this.checked) {
    console.log("special is checked..");
    showGenerateBtn();
  } else {
    console.log("special is not checked..");
  }
});

numbersCheck.addEventListener('change', function() {
  if (this.checked) {
    console.log("numbers is checked..");
    showGenerateBtn();
  } else {
    console.log("numbers is not checked..");
  }
});

lowerCheck.addEventListener('change', function() {
  if (this.checked) {
    console.log("lower is checked..");
    showGenerateBtn();
  } else {
    console.log("lower is not checked..");
  }
});

upperCheck.addEventListener('change', function() {
  if (this.checked) {
    console.log("upper is checked..");
    showGenerateBtn();
  } else {
    console.log("upper is not checked..");
  }
});

lengthInput.addEventListener('change', function() {
  if (this.value >= 8 && this.value <129) {
    length = this.value;
    console.log("lengthInput is " + length);
    showGenerateBtn();
  } else {
    console.log("invalid length Input");
  }
});

function showGenerateBtn() {
  if (length >=8 && length < 129) {
    generateBtn.classList.remove('invisible');
    generateBtn.classList.add('visible');
  } else {
    return;
  }
};

function showCopyBtn() {
  copyBtn.classList.remove('invisible');
  copyBtn.classList.add('visible');
};


// if (specialChars || numbers || lowercase || uppercase && lengthBoolean) {
//   generateBtn.classList.remove('invisible');
//   generateBtn.classList.add('visible');
// }

function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.add("mystyle");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Password copied: " + copyText.value);
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);


