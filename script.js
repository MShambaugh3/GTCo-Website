async function submitToGoogleSheets() {
  const apiKey = 'AIzaSyAE2726yaa8eZvJcR0GrbE1e9j4D514wtE'; // Replace with your API key
  const spreadsheetId = '1IN5j2sQv0MzhQc_17cldBws9aeyik8YmvWZm7IB1E74'; // Replace with your spreadsheet ID

  const email = document.getElementById('email').value;
  if (!email) {
    alert('Please enter an email address.');
    return;
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A1:append?valueInputOption=USER_ENTERED&key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [[email]], // Wrap email in an array since it's a single value
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit data: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Data submitted successfully:', result);
    alert('Email submitted successfully!');
    // Optionally, clear the input field after successful submission
    document.getElementById('email').value = '';
  } catch (error) {
    console.error('Error submitting data:', error);
    alert('Failed to submit email. Please try again.');
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
