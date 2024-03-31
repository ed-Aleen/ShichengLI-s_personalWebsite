function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function showDescription(descriptionId) {
  var description = document.getElementById(descriptionId);
  description.style.display = "block";
}

function hideDescription(descriptionId) {
  var description = document.getElementById(descriptionId);
  description.style.display = "none";
}
