document.addEventListener("DOMContentLoaded", () => {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
  
    if (!navbarPlaceholder) {
      console.error("Navbar placeholder not found. Ensure <header id='navbar-placeholder'></header> exists in the HTML.");
      return;
    }
    else {
        
        console.log("Navbar Placeholder Found:", navbarPlaceholder);

    }
  
    // Load the navbar.html file dynamically
    fetch("/restaurants/navbar.html")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error loading navbar.html: ${response.statusText}`);
        }
        return response.text();
      })


      .then(navbarHtml => {
        // console.log("Fetched Navbar HTML:", navbarHtml)
        // Insert the navbar HTML into the placeholder
        navbarPlaceholder.innerHTML = navbarHtml;
  
        // Dynamically load the navbar.css file
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = "/restaurants/navbar.css"; // Ensure correct relative path
        document.head.appendChild(linkElement);
  
        // Initialize navbar.js functionality after loading navbar.html
        const navbarScript = document.createElement("script");
        navbarScript.src = "/restaurants/navbar.js"; // Path to your navbar.js
        navbarScript.defer = true;
         // Initialize button functionality after navbar is injected
    navbarScript.onload = () => {
        const homeBtn = document.getElementById("home-btn");
        const menuBtn = document.getElementById("menu-btn");
        const ordersBtn = document.getElementById("orders-btn");
        const logoutBtn = document.getElementById("logout-btn");
  
        if (homeBtn) homeBtn.addEventListener("click", () => window.location.href = "restaurant-dashboard.html");
        if (menuBtn) menuBtn.addEventListener("click", () => window.location.href = "menu-dashboard.html");
        if (ordersBtn) ordersBtn.addEventListener("click", () => window.location.href = "view-orders.html");
        if (logoutBtn) logoutBtn.addEventListener("click", () => window.location.href = "../../index.html");
      };
        document.body.appendChild(navbarScript);
      })
      .catch(error => {
        console.error("Failed to load navbar:", error);
      });
  });
  