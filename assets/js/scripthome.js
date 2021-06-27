//contact form modal popup

let openContact = document.getElementById("contact-us");
openContact.addEventListener("click", function() {
  document.getElementById("contact-popup").classList.add("show");
})

let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let emailAddress = document.getElementById("email");
let message = document.getElementById("message")

let closeContact = document.getElementById("close-contact");
closeContact.addEventListener("click", function() {
    document.getElementById("contact-popup").classList.remove("show");
    thanks.classList.remove("show");
    myForm.classList.remove("hide");
    firstName.value = "";
    lastName.value = "";
    emailAddress.value = "";
    message.value = "";
})

let myForm = document.getElementById("contact-form")
let thanks = document.getElementById("thank-you");
myForm.addEventListener("submit", function(event) {
  
    event.preventDefault();
    thanks.classList.add("show");
    myForm.classList.add("hide");
})

//game rules modal popup

let openRules = document.getElementById("open-rules");
openRules.addEventListener("click", function(){
    document.getElementById("game-rules").classList.add("show");
})

let closeRules = document.getElementById("close-rules");
closeRules.addEventListener("click", function(){
    document.getElementById("game-rules").classList.remove("show");
})
