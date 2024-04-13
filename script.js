
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


function toggleSpecificButtons() {
  var specificButtons = document.getElementById("specific-download-btns");
  if (specificButtons.style.display === "none") {
      specificButtons.style.display = "block";
  } else {
      specificButtons.style.display = "none";
  }


}

// function toggleSpecificButtons() {
//   var specificButtons = document.getElementById("specific-download-btns");
//   if (specificButtons.style.display === "none") {
//       specificButtons.style.display = "block";
//   } else {
//       specificButtons.style.display = "none";
//   }
// }
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

document.addEventListener('DOMContentLoaded', (event) => {
  document.body.style.backgroundImage = "url('/assets/background.jpg')";

  function toggleDarkTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
    let btnTextHum = document.querySelector("#btn-hum span");
    let btnTextDesktop = document.querySelector("#btn span");

    let btnImageHum = document.querySelector("#btn-hum img");
    let btnImageDesktop=document.querySelector('#btn img');



    if (body.classList.contains("dark-theme")) {
      body.style.backgroundImage = "none"; // Remove background image for dark mode
      if (btnTextHum) btnTextHum.textContent = "Light";
      if (btnTextDesktop) btnTextDesktop.textContent = "Light";
      if (btnImageHum) btnImageHum.src = "/assets/dlm.png"; // Set image source to sun icon
      if (btnImageDesktop) btnImageDesktop.src = "/assets/dlm.png"; // Set image source to sun icon


      
    } 
    else {
      body.style.backgroundImage = "url('/assets/background.jpg')"; 
      if (btnTextHum) btnTextHum.textContent = "Dark";
      if (btnTextDesktop) btnTextDesktop.textContent = "Dark";
      if (btnImageHum) btnImageDesktop.src = "/assets/dlm.png"; // Set image source to moon icon
      if (btnImageDesktop) btnImageDesktop.src = "/assets/dlm.png"; // Set image source to sun icon


    
      
    }
  }

  let btnDesktop = document.getElementById('btn');
  let btnMobile = document.getElementById('btn-hum');

  [btnDesktop, btnMobile].forEach(btn => {
    if (btn) {
      btn.onclick = toggleDarkTheme;
    }
  });
});


// document.addEventListener('DOMContentLoaded', (event) => {
//   function toggleDarkTheme() {
//     document.body.classList.toggle("dark-theme");
//     let btnTextHum = document.querySelector("#btn-hum span");
//     let btnTextDesktop = document.querySelector("#btn span");

//     if (document.body.classList.contains("dark-theme")) {
//       if (btnTextHum) btnTextHum.textContent = "Light";
//       if (btnTextDesktop) btnTextDesktop.textContent = "Light";
//     } else {
//       if (btnTextHum) btnTextHum.textContent = "Dark";
//       if (btnTextDesktop) btnTextDesktop.textContent = "Dark";
//     }
//   }

//   let btnDesktop = document.getElementById('btn');
//   let btnMobile = document.getElementById('btn-hum');

//   [btnDesktop, btnMobile].forEach(btn => {
//     if (btn) {
//       btn.onclick = toggleDarkTheme;
//     }
//   });
// });

function decodeInfo(encodedStr) {
  // A simple decoder function that could be made more complex to enhance security
  return encodedStr.replace(/[a-zA-Z]/g, function(c){
    return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Decoding and setting the email address
  var encodedEmail = 'U2hpY2hlbmcubGlAa2NsLmFjLnVr';
  var emailElement = document.getElementById('emailLink');
  emailElement.href = 'mailto:' + decodeInfo(encodedEmail);
  emailElement.textContent = decodeInfo(encodedEmail);

  // Decoding and setting the phone number
  var encodedPhone = 'KCs0NCkwNzc3NDE1NzMyMQ==';
  var phoneElement = document.getElementById('phoneLink');
  phoneElement.href = 'tel:' + decodeInfo(encodedPhone);
  phoneElement.textContent = decodeInfo(encodedPhone);
});
