function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const modalBtnClose = document.querySelectorAll(".modal-btn-close")
const modalBtnSubmit = document.querySelectorAll(".btn-submit")
const formData = document.querySelectorAll(".formData")
const inputFirstname = document.querySelector("#first")
const inputLastname = document.querySelector("#last")
const inputEmail = document.querySelector("#email")
const inputBirthdate = document.querySelector("#birthdate")
const inputQuantity = document.querySelector("#quantity")
const inputLocation = document.querySelectorAll(".checkbox-input")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
modalBtnClose.forEach((btn) => btn.addEventListener("click", launchModal))
inputLocation.forEach((btn) => btn.addEventListener("click", onLocationChange))

// Submit form
var firstnameIsValid = false // 2 characters min
var lastnameIsValid = false  // 2 characters min
var emailIsValid = false     // mail need to be valid
var quantityIsValid = false // an input is needed
var locationIsValid = false // an input is needed

function isFormValid() {
  console.log(modalBtnSubmit) // remove me
  firstnameIsValid &&
  lastnameIsValid &&
  emailIsValid &&
  quantityIsValid &&
  locationIsValid ?
  modalBtnSubmit.disabled = false :
  modalBtnSubmit.disabled = true
}

function onFirstnameChange() {
  inputFirstname.value.length > 1 ? firstnameIsValid = true : firstnameIsValid = false
  isFormValid()
}
function onLastnameChange() {
  inputLastname.value.length > 1 ? lastnameIsValid = true : lastnameIsValid = false
  isFormValid()
}
function onEmailChange() {
  const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/
  inputEmail.value.match(mailRegex) ? emailIsValid = true : emailIsValid = false
  isFormValid()
}
function onQuantityChange() {
  inputQuantity.value.length > 0 ? quantityIsValid = true : quantityIsValid = false
  inputQuantity.value < 0 && (inputQuantity.value = 0)
  isFormValid()
}
function onLocationChange() {
  document.querySelector('input[name="location"]:checked').value ? locationIsValid = true : locationIsValid = false
  isFormValid()
}

// launch-close modal form
var showModal = false
function launchModal() {
  showModal ? showModal = false : showModal = true
  showModal ? modalbg.style.display = "block" : modalbg.style.display = "none"
}