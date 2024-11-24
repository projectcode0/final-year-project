document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const navbarToggleBtn = document.querySelector(".menu-icon"); // Assuming a menu icon for mobile

  // Redirect to Restaurant Dashboard when Home is clicked
  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      window.location.href = "restaurant-dashboard.html";
    });
  }

  // Logout and redirect to login page
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      // Clear session or local storage
      localStorage.removeItem("restaurantLoggedIn");
      sessionStorage.removeItem("restaurantLoggedIn");

      // Redirect to the index page
      window.location.href = "index.html";
    });
  }

  const menuBtn = document.getElementById("menu-btn");

  // Redirect to Menu Dashboard when Manage Menu is clicked
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      window.location.href = "menu-dashboard.html";
    });
  }

  const ordersBtn = document.getElementById("orders-btn");

  // Redirect to Orders Dashboard when View Orders is clicked
  if (ordersBtn) {
    ordersBtn.addEventListener("click", () => {
      window.location.href = "view-orders.html";
    });
  }


  // Toggle mobile menu
  if (navbarToggleBtn) {
    navbarToggleBtn.addEventListener("click", () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.classList.toggle("open");
      }
    });
  }
});
