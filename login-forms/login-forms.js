document.addEventListener('DOMContentLoaded', () => {
    // Redirect back to login.html on back button press
    window.addEventListener('popstate', () => {
      window.location.href = 'login/login.html';
    });
  
    // Validate email with real-life domain check
    function validateEmail(email) {
      const regex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)?(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|aol\.com|icloud\.com|ac\.in)$/;
      return regex.test(email);
    }
  
    // Handle email validation dynamically
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
  
    if (emailInput && emailError) {
      emailInput.addEventListener('input', function () {
        const email = emailInput.value;
  
        if (!validateEmail(email)) {
          emailError.textContent = 'Please enter a valid email address ';
          emailError.style.display = 'block';
        } else {
          emailError.style.display = 'none';
        }
      });
    }
  
    // Handle form submission for customer, restaurant, or driver
    const loginForm = document.getElementById('customer-login-form') ||
                      document.getElementById('restaurant-login-form') ||
                      document.getElementById('driver-login-form');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
  
        const email = emailInput.value;
        const password = document.getElementById('password').value;
  
        if (validateEmail(email)) {
          // Determine the dashboard to redirect based on the form ID
          if (loginForm.id === 'customer-login-form') {
            window.location.href = '../customers/cust1/customer-dashboard.html';
          } else if (loginForm.id === 'restaurant-login-form') {
            window.location.href = "../restaurants/rest1/restaurant-dashboard.html";
          } else if (loginForm.id === 'driver-login-form') {
            window.location.href = '../drivers/driv1/driver-dashboard.html';
          }

           // Clear the email field after successful login
        document.getElementById('email').value = '';
        } 
        else {
          emailError.textContent = 'Invalid email address. Please try again.';
          emailError.style.display = 'block';
        }
      });
    }
  });
  