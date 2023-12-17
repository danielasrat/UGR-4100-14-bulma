const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navbarMenu');

var Facebook = document.getElementById('facebook');
var Instagram = document.getElementById('instagram');
var Youtube = document.getElementById('youtube');
var Linkedin = document.getElementById('linkedin');


burgerIcon.addEventListener('click', () =>{
    navbarMenu.classList.toggle('is-active');
});

  var ContactButton = document.getElementById('button_contact');
  var Hire_me = document.getElementById('Hire_me');


  ContactButton.addEventListener('click', function() {
      var filePath = './Contact-me.html';
      window.location.href = filePath;
  });

  Hire_me.addEventListener('click', function() {
    var filePath = './Contact-me.html';
    window.location.href = filePath;
  });

  function downloadCv(){
    var filePath = './DanielAsratCV.pdf'
    window.open(filePath)
  }


  Facebook.addEventListener('click', function() {
    window.open("https://www.facebook.com/profile.php?id=100079797836024", "_blank");

  })

  Instagram.addEventListener('click', function() {
    window.open("https://www.instagram.com/_danielasrat/", "_blank");
    
  })

  Youtube.addEventListener('click', function() {
    window.open("https://www.youtube.com/@ADTech_Tube", "_blank");
    
  })

  Linkedin.addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/danielasrat/", "_blank");
    
  })