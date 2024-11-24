// JavaScript for handling custom toggle behavior and button functionality
document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  // Ensure proper toggle functionality
  if (navbarToggler) {
    navbarToggler.addEventListener("click", () => {
      navbarCollapse.classList.toggle("show");
    });
  }

  // Handle navbar button functionalities
  const homeBtn = document.getElementById("home-btn");
  const menuBtn = document.getElementById("menu-btn");
  const ordersBtn = document.getElementById("orders-btn");
  const logoutBtn = document.getElementById("logout-btn");

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = "restaurant-dashboard.html"; // Adjust path as needed
    });
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      window.location.href = "menu-dashboard.html"; // Adjust path as needed
    });
  }

  if (ordersBtn) {
    ordersBtn.addEventListener("click", () => {
      window.location.href = "view-orders.html"; // Adjust path as needed
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "../index.html"; // Adjust path to your index file
    });
  }
});
