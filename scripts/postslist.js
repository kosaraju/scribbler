var activeCard;

function openDeleteModel(index) {
  document.getElementById("confirmer-modal").style.display = "block";
  activeCard = index;
}

function deletePost(action) {
  document.getElementById("confirmer-modal").style.display = "none";
  if (action == false) {
    return;
  }
  var card = document.getElementById('post-card' + activeCard);
  card.style.display = "none";
  card.className = "deleted";
}

function openPost() {
  document.location.href = "./posts.html";
}