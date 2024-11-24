document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById("home-btn");
    const logoutBtn = document.getElementById("logout-btn");
  
    // Redirect to Customer Dashboard when Home is clicked
    homeBtn.addEventListener("click", () => {
      window.location.href = "customer-dashboard.html";
    });
  
    // Logout and redirect to login page
    logoutBtn.addEventListener("click", () => {
      // Clear session or local storage
      localStorage.removeItem("customerLoggedIn");
      sessionStorage.removeItem("customerLoggedIn");
  
      // Redirect to the index page
      window.location.href = "index.html";
    });
  });
  