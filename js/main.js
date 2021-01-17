const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
//Toggle Nav
  burger.addEventListener('click',()=> {
    nav.classList.toggle('nav-active');

    //Animate Links
      navLinks.forEach((link, index) => {
        if(link.style.animation) {
           link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
        }
      });
      ///burger animation
      burger.classList.toggle('toggle');
  });
}

navSlide();

$('.skills-nav').click(function(e){
  $(document).scrollTop(600)
});

document.addEventListener('DOMContentLoaded', function(event) {
  // array with texts to type in typewriter
  var dataText = ["\n\Let's create\n\tsomething!"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector("h1").innerHTML = text.substring(0, i + 1).replace(/\n/g, '<br/>').replace(/\t/g, '<span class="spacer"></span>') + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function() {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function() {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});


var skillButtons = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < skillButtons.length; i++) {
  skillButtons[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var navBar = document.getElementsByClassName("collapsible-nav");
var i;

for (i = 0; i < navBar.length; i++) {
  navBar[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
