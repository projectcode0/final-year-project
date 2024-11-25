document.addEventListener("DOMContentLoaded", () => {
  const navbarPlaceholder = document.getElementById("navbar-placeholder");

  if (!navbarPlaceholder) {
    console.error("Navbar placeholder not found. Ensure <header id='navbar-placeholder'></header> exists in the HTML.");
    return;
  }

  // Detect the base path (local or GitHub Pages)
  const isGitHubPages = window.location.href.includes("github.io");
  const basePath = isGitHubPages ? "/final-year-project" : "../../"; // Adjusted for nested rest1 structure

  console.log("Base path detected:", basePath);

  // Fetch navbar.html
  const navbarUrl = `${basePath}/restaurants/navbar.html`;
  console.log("Fetching navbar.html from:", navbarUrl);

  fetch(navbarUrl)
    .then(response => {
      console.log("Response for navbar.html:", response);

      if (!response.ok) {
        throw new Error(`Error loading navbar.html: ${response.statusText}`);
      }

      return response.text();
    })
    .then(navbarHtml => {
      console.log("Successfully fetched navbar.html:", navbarHtml);

      // Insert navbar HTML into the placeholder
      navbarPlaceholder.innerHTML = navbarHtml;

      // Dynamically load navbar.css
      const cssUrl = `${basePath}/restaurants/navbar.css`;
      console.log("Loading navbar.css from:", cssUrl);

      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = cssUrl;
      document.head.appendChild(linkElement);

      console.log("Navbar CSS loaded successfully");

      // // Dynamically load navbar-link.js
      // const navbarScript = document.createElement("script");
      // navbarScript.src = `${basePath}restaurants/navbar-link.js`; // Fix path to navbar-link.js
      // navbarScript.defer = true;

      // navbarScript.onload = () => {
      //   console.log("Navbar script loaded successfully");

        // Add button functionalities after navbar.js loads
        const homeBtn = document.getElementById("home-btn");
        const menuBtn = document.getElementById("menu-btn");
        const ordersBtn = document.getElementById("orders-btn");
        const logoutBtn = document.getElementById("logout-btn");

        if (homeBtn) homeBtn.addEventListener("click", () => window.location.href = `${basePath}/restaurants/rest1/restaurant-dashboard.html`);
        if (menuBtn) menuBtn.addEventListener("click", () => window.location.href = `${basePath}/restaurants/rest1/menu-dashboard.html`);
        if (ordersBtn) ordersBtn.addEventListener("click", () => window.location.href = `${basePath}/restaurants/rest1/view-orders.html`);
        if (logoutBtn) logoutBtn.addEventListener("click", () => window.location.href = `${basePath}/index.html`);
      })

    //   navbarScript.onerror = () => {
    //     console.error("Failed to load navbar-link.js from:", navbarScript.src);
    //   };

    //   document.body.appendChild(navbarScript);

    // })
    .catch(error => {
      console.error("Failed to load navbar.html or navbar.css:", error);
    });
});
