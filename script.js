
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var modalImg = document.getElementById("img01");

function openModal(item, setting = 0) { 
  modal.style.display = "block";
  modalImg.src = item.src;
  if (setting == 0) {
      modalImg.style.width = "700px";
  } else if (setting == 1) {
      modalImg.style.width = "1000px";
  } else if (setting == 2) {
      modalImg.style.width = "600px";
  }
}

span.onclick = function() {
  document.getElementById("myModal").style.display = "none";
}