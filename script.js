var moreBio = $('#learnmore');
moreBio.click(expandBio);
function expandBio() {
  var hiddenText = document.getElementById('more-bio');
  hiddenText.style.display = "block";}
var hideButton = $('#hide-bio');
hideButton.click(hideFunction);
function hideFunction() {
  var removeText = document.getElementById("more-bio");
  removeText.style.display = "none";}