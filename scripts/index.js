// Get the modal
var signupmodel = document.getElementById("signupModal");
var signinmodal = document.getElementById("signinModal");

// Get the button that opens the modal
var signupbtn = document.getElementById("signup");
var signinbtn = document.getElementById("signin");

// Get the <i> element that closes the modal
var signuptimes = document.getElementsByClassName("fas fa-times")[0];
var signintimes = document.getElementsByClassName("fas fa-times")[1];

// When the user clicks on the button, open the modal
signupbtn.onclick = function() {
  signupmodel.style.display = "block";
 }
signinbtn.onclick = function() {
  signinmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signuptimes.onclick = function() {
  signupmodel.style.display = "none";
}
signintimes.onclick = function() {
  signinmodal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupmodel) {
    signupmodel.style.display = "none";
  }
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
  }
}