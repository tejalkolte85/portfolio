//header toggle

let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click' , function(e){
  document.querySelector('body').classList.toggle('mobile-nav-active');
  this.classList.toggle('fa-xmark');
})




//typing effect

let typed = new Typed('#auto-width',{
    strings:['Front-End Developer' , 'Web designer'],
    typeSpeed: 90,
    backspeed:90,
    backDelay:100,
    loop: true,
})


//form validation

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



//form validation

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
    
    // Get form values

      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var subject = document.getElementById('subject').value.trim();
      var message = document.getElementById('msg').value.trim();

      console.log(name)
      console.log(email)
      console.log(subject)
      
      
      // Simple validation for empty fields
      if (name === "" || email === "" || subject === "" || message === "") {
          alert("All fields are required. Please fill out the form completely.");
          event.preventDefault(); // Prevent the form from being submitted
          return;
      }

      // Email validation
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
          alert("Please enter a valid email address.");
          event.preventDefault(); // Prevent the form from being submitted
          return;
      }

      // If everything is valid, allow the form to be submitted
      alert("Message sent successfully!");
  });
});

