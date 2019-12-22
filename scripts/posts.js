var postTitile = "Every thing you should know about module and require in node.js";
var content = `Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.
Though .js is the standard filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games)`;
var likes = 0;
var comments = [];

function populatePost() {
  document.getElementById('post-contents').value = content;
  document.getElementById('post-contents').setAttribute('disabled', 'true');
  document.getElementById('post-title-edit').style.display = "none";
}

function onEditButtnClicked() {
  document.getElementById('post-contents').removeAttribute('disabled');
  document.getElementById('post-title-edit').value = document.getElementById(
      'title').innerText;
  document.getElementById('post-title-edit').style.display = "block";
  document.getElementById('title').style.display = "none";
  document.getElementById(
      'edit-save-button').innerHTML = 'Save <i class="fa fa-save"></i>';
  document.getElementById('edit-save-button').setAttribute('onclick',
      'onSaveButtonClicked()');
}

function onSaveButtonClicked() {
  document.getElementById(
      'edit-save-button').innerHTML = 'Edit <i class="fa fa-edit"></i>';
  document.getElementById('edit-save-button').setAttribute('onclick',
      'onEditButtnClicked()');
  document.getElementById('post-contents').setAttribute('disabled', 'true');
  document.getElementById('post-title-edit').style.display = "none";
  document.getElementById('title').style.display = "block";
  document.getElementById('title').innerText = document.getElementById(
      'post-title-edit').value;
}

function onLikesButtonCLicked() {
  likes++;
  document.getElementById('likesCount').innerHTML = likes
      + " person likes this!";
  document.getElementById(
      'likeBtn').innerHTML = '<i class="fa fa-thumbs-up"></i>Liked';
}

function onCommentButtonClicked() {
  var comment = document.getElementById('post-comment').value;
  if (comment=='') return;
  comments.unshift(comment);
  popuateComments();
}

function popuateComments() {
  var html = '<div>';
  comments.forEach(function (value, index) {
    html += "<div id='comment" + index + "'class='posted-comment-card'<p>"
        + value + "</p></div>";
  });
  html += '</div>';
  document.getElementById('postedCommentsSection').innerHTML = html;
  document.getElementById('postedCommentsSection').style.background = 'grey';
}