// Get the modal
var signupmodel = document.getElementById("signupModal");
var signinmodal = document.getElementById("signinModal");
var newpostmodal = document.getElementById("inputNewPostModal");

// Get the button that opens the modal
var signupbtn = document.getElementById("signup");
var signinbtn = document.getElementById("signin");
var postbtn = document.getElementById("createposts");

// Get the <i> element that closes the modal
var signuptimes = document.getElementsByClassName("fas fa-times")[0];
var signintimes = document.getElementsByClassName("fas fa-times")[1];
var newposttimes = document.getElementsByClassName("fas fa-times")[2];

// When the user clicks on the button, open the modal
signupbtn.onclick = function() {
  signupmodel.style.display = "block";
 }
signinbtn.onclick = function() {
  signinmodal.style.display = "block";
}
postbtn.onclick = function() {
  newpostmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signuptimes.onclick = function() {
  signupmodel.style.display = "none";
}
signintimes.onclick = function() {
  signinmodal.style.display = "none";
}
newposttimes.onclick = function() {
  newpostmodal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupmodel) {
    signupmodel.style.display = "none";
  }
  if (event.target == signinmodal) {
    signinmodal.style.display = "none";
  }
  if (event.target == newpostmodal) {
    newpostmodal.style.display = "none";
  }
}

function newUser(){
  signinmodal.style.display = "none";
  signupmodel.style.display = "block";
}

function callSignin(){
  return;
}

function callSignup(){
  return;
}

function createPost(){
  return;
}

function viewAllPosts() {
  document.location.href="html/postslist.html";
}