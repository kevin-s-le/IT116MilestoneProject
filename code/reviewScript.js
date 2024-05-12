// Show review popup
document.getElementById("popupBtn").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
})
// Hide review popup
document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
})
document.getElementById("overlay").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
})