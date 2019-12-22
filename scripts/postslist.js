var activeCard;

function openDeleteModel(index) {
  document.getElementById("confirmer-modal").style.display = "block";
  activeCard = index;
}

function closeConfirmerDialog() {
  document.getElementById("confirmer-modal").style.display = "none";
}

function deletePost(action) {
  document.getElementById("confirmer-modal").style.display = "none";
  if (action == false) return;
  console.log(action);
  var card = document.getElementById('post-card' + activeCard);
  console.log(card);
  card.style.display = "none";
  card.className = "deleted";
}

function openPost(){
  document.location.href="./posts.html";
}