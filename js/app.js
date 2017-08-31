const firstnameInput = document.getElementById("firstname");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const error = document.getElementsByClassName("error");


// VALIDATORS


// Can not contain numbers
function isValidfirstname(firstname) {
  return /^([^0-9]*)$/.test(firstname);
}

// The phone number must be in the format of 0000 000 0000
function isValidphone(phone) {
  return /^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(phone);
}

// Must be a valid email address
function isValidEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}


// SET UP EVENTS

function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.visibility = "inherit";
  } else {
    element.style.visibility = "hidden";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

firstnameInput.addEventListener("input", createListener(isValidfirstname));
phoneInput.addEventListener("input", createListener(isValidphone));
emailInput.addEventListener("input", createListener(isValidEmail));


// // SUBMIT FORM

document.getElementById("signupform").addEventListener("submit", submitForm);

function submitForm() {
  event.preventDefault();
  let allowSubmit = true;
  if ( !isValidfirstname(firstnameInput.value) ) {
    allowSubmit = false;
  }
  if ( !isValidphone(phoneInput.value) ) {
    allowSubmit = false;
  }
  if ( !isValidEmail(emailInput.value) ) {
    allowSubmit = false;
  }
  if ( allowSubmit == true ) {
    const userData = { 
    "First Name": firstnameInput.value, 
    "Phone Number": phoneInput.value, 
    "Email Address": emailInput.value 
    }
    console.log(userData);
    document.getElementById("signupform").style.visibility = "hidden";
  }
  if ( firstnameInput.value === "" ) {
    error[0].style.visibility = "visible";
  }
  if ( phoneInput.value === "" ) {
    error[1].style.visibility = "visible";
  }
  if ( emailInput.value === "" ) {
    error[2].style.visibility = "visible";
  }
  return allowSubmit;
};