async function submitEmail() {
  const email = document.getElementById('email').value;
  console.log('Email:', email);
  if (email) {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/YOUR_DEPLOYED_WEB_APP_URL/exec', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      });
      const result = await response.json();
      if (result.status === 'success') {
        alert('Email successfully submitted!');
        document.getElementById('email').value = ''; // Clear the email field
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  } else {
    alert('Please enter a valid email address.');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  var navbar = document.getElementById('navbar');
  var closeIcon = document.getElementById('close');

  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('show');
    closeIcon.style.display = 'initial';
  });

  closeIcon.addEventListener('click', function() {
    navbar.classList.remove('show');
    closeIcon.style.display = 'none';
  });

  // Attach the submitEmail function to the button click event
  document.querySelector('.normal').addEventListener('click', submitEmail);
});
