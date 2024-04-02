
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  // document.body.classList.toggle("dark-theme");

}

function showDescription(descriptionId) {
  var description = document.getElementById(descriptionId);
  description.style.display = "block";
}

function hideDescription(descriptionId) {
  var description = document.getElementById(descriptionId);
  description.style.display = "none";
}


function toggleSpecificButtons() {
  var specificButtons = document.getElementById("specific-download-btns");
  if (specificButtons.style.display === "none") {
      specificButtons.style.display = "block";
  } else {
      specificButtons.style.display = "none";
  }


  let btn = document.getElementById('btn');

  btn.onclick = function() {
    document.body.classList.toggle("dark-theme");
  };
}

document.addEventListener('DOMContentLoaded', (event) => {
  function toggleDarkTheme() {
    document.body.classList.toggle("dark-theme");
  }

  let btnDesktop = document.getElementById('btn');
  let btnMobile = document.getElementById('btn-hum');

  [btnDesktop, btnMobile].forEach(btn => {
    if (btn) {
      btn.onclick = toggleDarkTheme;
    }
  });
});


 
  
  function toggleDemoButtons(id) {
    var demoButtons = document.getElementById(id);
    if (demoButtons.style.display === "none") {
      demoButtons.style.display = "block";
    } else {
      demoButtons.style.display = "none";
    }
    
    function hideDescription(descriptionId) {
      var modal = document.getElementById(descriptionId);
      modal.style.display = "none";
    }
    
  }
  