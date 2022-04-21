let fields = {};

document.addEventListener("DOMContentLoaded", function () {
  fields.firstName = document.getElementById("firstName");
  fields.lastName = document.getElementById("lastName");
  fields.email = document.getElementById("email");
  fields.address = document.getElementById("address");
  fields.houseNumber = document.getElementById("houseNumber");
  fields.country = document.getElementById("country");
  fields.question = document.getElementById("question");
});

function isNotEmpty(value) {
  if (value == null || typeof value == "undefined") return false;
  return value.length > 0;
}
function isNumber(num) {
  return num.length > 0 && !isNaN(num);
}

function isEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}
function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = "placeholderRed";
  } else {
    field.className = "";
  }

  return isFieldValid;
}
function isValid() {
	var valid = true;
	
	valid &= fieldValidation(fields.firstName, isNotEmpty);
	valid &= fieldValidation(fields.lastName, isNotEmpty);
	valid &= fieldValidation(fields.address, isNotEmpty);
	valid &= fieldValidation(fields.country, isNotEmpty);
	valid &= fieldValidation(fields.email, isEmail);
	valid &= fieldValidation(fields.houseNumber, isNumber);
	valid &= fieldValidation(fields.question, isNotEmpty);
   
	return valid;
   }
   class User {
	constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.gender = gender;
	this.address = address;
	this.country = country;
	this.email = email;
	this.newsletter = newsletter;
	this.question = question;
	}
   }
   async function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const body = new FormData(form);
    const valid = form.valid;
  
    const response = await fetch(form.action, {
      method: form.method,
      body
    });
  }
  function sendContact(){

	  if (isValid()) {
		  let usr = new User(firstName.value, lastName.value, address.value, country.value, email.value);

		  alert(`${usr.firstName} Thank you for your feedback.`)
	  } else {
		  alert("There was an error")
	  }
  }

