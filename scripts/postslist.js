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

var posts=[
  {  "author":"Srishti Gupta",
     "summary":"hola",
    "details":"Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."
  },
  { "author":"GK2",
    "summary":"summary2",
    "details":"details3"
  }
]

showPostsTemplate();

function showPostsTemplate(){
  posts.forEach(function(value, index, array){
    var template = '<section class ="post-block">'
                   + '<div>'
                      + '<p>'+value.author+'</p>'
                   + '</div>'
                    + '<div>'
                     + '<div>'
                       + '<p>'+value.summary+'</p>'
                         + '<span>'
                           + '<i class="fa fa-trash" aria-hidden="true"></i>'
                         + '</span>'
                       + '</div>'
                     + '<p>'+value.details+'</p>'
                     + '<span>'
                     + '<i class="fas fa-ellipsis-h"></i>'
                     + '</span>'
                     + '</div>'
                     + '</section>'
 document.getElementById("postslistdiv").innerHTML+=template;
  });

}

var idName = 1;
function addPost(id) {
  idName ++;
  var listID = 'postList_' + idName;
  var postID = 'post_' + idName;
  var templateBlock = '<section class="post-block" id='+ postID+'>'+
      '<div> ' + id.value + ' <button onclick="removePosts('+ listID +')">Remove card</button></div>'+
      ' <div class="post-block" id='+ listID +'>'+
      '</div>'+
      ' </section>';
  document.getElementById('postslistdiv').innerHTML += templateBlock;
}

function removePosts(element) {
  document.getElementById(element.id).innerHTML = '';
}