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
const formData = document.querySelectorAll(".formData")
const inputFirstname = document.querySelector("#first") // formData()
const inputLastname = document.querySelector("#last") // formData()
const inputEmail = document.querySelector("#email") // formData()
const inputBirthdate = document.querySelector("#birthdate") // formData()
const inputQuantity = document.querySelector("#quantity") // formData()
const inputLocation = document.querySelectorAll(".checkbox-input") // formData()
const locationList = document.querySelector("#locationList") // formData()
const inputCGU = document.querySelector("#checkbox1") // formData()
const modalForm = document.querySelector("#modalForm") // formData()
const modalResult = document.querySelector("#modalResult") // formData()

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
modalBtnClose.forEach((btn) => btn.addEventListener("click", launchModal))
inputLocation.forEach((btn) => btn.addEventListener("click", onLocationChange))

// Submit form
var firstnameIsValid = false // 2 characters min
var lastnameIsValid = false  // 2 characters min
var emailIsValid = false     // mail need to be valid
var birthdateIsValid = false // date need to be valid
var quantityIsValid = false // an input is needed
var locationIsValid = false // an input is needed
var CGUIsValid = true // CGUIsValid is needed
var formValid = false // if all true

function isFormValid() {
  if (firstnameIsValid &&
  lastnameIsValid &&
  emailIsValid &&
  birthdateIsValid &&
  quantityIsValid &&
  CGUIsValid &&
  locationIsValid) {
    formValid = true
  } else {
    formValid = false
  }
}

function formSuccess() {
  // modalBody
  if (formValid) {
    modalForm.style.display = "none"
    modalResult.style.display = "flex"
    modalResult.style.display = "flex"
  } else {
    console.log('Form invalide !')
    firstnameIsValid ? inputFirstname.parentNode.setAttribute("data-error-visible", "false") : inputFirstname.parentNode.setAttribute("data-error-visible", "true")
    lastnameIsValid ? inputLastname.parentNode.setAttribute("data-error-visible", "false") : inputLastname.parentNode.setAttribute("data-error-visible", "true")
    emailIsValid ? inputEmail.parentNode.setAttribute("data-error-visible", "false") : inputEmail.parentNode.setAttribute("data-error-visible", "true")
    birthdateIsValid ? inputBirthdate.parentNode.setAttribute("data-error-visible", "false") : inputBirthdate.parentNode.setAttribute("data-error-visible", "true")
    quantityIsValid ? inputQuantity.parentNode.setAttribute("data-error-visible", "false") : inputQuantity.parentNode.setAttribute("data-error-visible", "true")
    locationIsValid ? locationList.setAttribute("data-error-visible", "false") : locationList.setAttribute("data-error-visible", "true")
    CGUIsValid ? inputCGU.parentNode.setAttribute("data-error-visible", "false") : inputCGU.parentNode.setAttribute("data-error-visible", "true")
  }
  return false
}

function onFirstnameChange() {
  const firstnameRegex = /^([a-zA-Z\s\-À-ÖØ-öø-ÿ]{2,})+$/
  inputFirstname.value.match(firstnameRegex) ? firstnameIsValid = true : firstnameIsValid = false
  let parent = inputFirstname.parentNode
  firstnameIsValid ? parent.setAttribute("data-error-visible", "false") : parent.setAttribute("data-error-visible", "true")
  console.log('prenom->' + firstnameIsValid) // to remove
  isFormValid()

  // passer : data-error-visible -> true

}
function onLastnameChange() {
  const lastnameRegex = /^([a-zA-Z\s\-À-ÖØ-öø-ÿ]{2,})+$/
  inputLastname.value.match(lastnameRegex) ? lastnameIsValid = true : lastnameIsValid = false
  let parent = inputLastname.parentNode
  lastnameIsValid ? parent.setAttribute("data-error-visible", "false") : parent.setAttribute("data-error-visible", "true")
  console.log('nom->' + lastnameIsValid) // to remove
  isFormValid()
}
function onEmailChange() {
  const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/
  inputEmail.value.match(mailRegex) ? emailIsValid = true : emailIsValid = false
  let parent = inputEmail.parentNode
  emailIsValid ? parent.setAttribute("data-error-visible", "false") : parent.setAttribute("data-error-visible", "true")
  console.log('email->' + emailIsValid) // to remove
  isFormValid()
}
function onBirthdateChange() {
  inputBirthdate.value ? birthdateIsValid = true : birthdateIsValid = false
  let parent = inputBirthdate.parentNode
  birthdateIsValid ? parent.setAttribute("data-error-visible", "false") : parent.setAttribute("data-error-visible", "true")
  console.log('birthdate->' + birthdateIsValid) // to remove
  isFormValid()
}
function onQuantityChange() {
  const quantityRegex = /^[1-9][0-9]*/
  inputQuantity.value.match(quantityRegex) || parseInt(inputQuantity.value) === 0 ? quantityIsValid = true : quantityIsValid = false
  let parent = inputQuantity.parentNode
  quantityIsValid ? parent.setAttribute("data-error-visible", "false") : parent.setAttribute("data-error-visible", "true")
  console.log('quantity->' + quantityIsValid) // to remove
  isFormValid()
}
function onLocationChange() {
  if (!document.querySelector('input[name="location"]:checked')) {
    return
  }
  document.querySelector('input[name="location"]:checked').value ? locationIsValid = true : locationIsValid = false
  locationIsValid ? locationList.setAttribute("data-error-visible", "false") : locationList.setAttribute("data-error-visible", "true")
  console.log('location->' + locationIsValid) // to remove
  isFormValid()
}
function onCGUChange() {
  inputCGU.checked ? CGUIsValid = true : CGUIsValid = false
  let parent = inputCGU.parentNode
  CGUIsValid ? parent.setAttribute("data-error-visible", "false") : parent.setAttribute("data-error-visible", "true")
  console.log('CGU->' + locationIsValid) // to remove
  isFormValid()
}

// launch-close modal form
var showModal = false
function launchModal() {
  showModal ? showModal = false : showModal = true
  showModal ? modalbg.style.display = "flex" : modalbg.style.display = "none"
  showModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
}