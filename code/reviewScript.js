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

    // Function to validate the review form
    
    function validateForm(event) {
        event.preventDefault(); // Prevents the form from submitting
        // Get from inputs
        var name = document.getElementById('name'). value.trim();
        var email = document.getElementById('email'). value.trim();
        var message = document.getElementById('message'). value.trim();
        // Check if input fields are empty
        if(name === '' || message === '') {
            alert ('Please fill in all fields.');
            return;
        }
        // Validate email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert ('Please use a valid email address.');
            return;
        }
        // If the validations pass, submit the form (here you can send data to your server)
        alert ('Form submitted successfully! Thank you.');
        document.getElementById('contactForm').reset(); // Clears the form once submitted
    }
    // Add event listener for the submit button
    document.getElementById('contactForm').addEventListener('submit', validateForm);
