document.addEventListener("DOMContentLoaded", () => {
  // Detect environment: GitHub Pages or local server
  const isGitHubPages = window.location.href.includes("github.io");
  const basePath = isGitHubPages ? "/final-year-project" : "../..";

  // Function to dynamically load navbar
  function loadNavbar() {
    const navbarContainer = document.querySelector("#navbarContainer");

    // Correct paths for navbar.html and navbar.css
    const navbarHtmlPath = `${basePath}/customers/navbar.html`;
    const navbarCssPath = `${basePath}/customers/navbar.css`;

    // Fetch and insert navbar HTML
    fetch(navbarHtmlPath)
      .then(response => response.text())
      .then(navbarHtml => {
        // Insert only the <nav> content into the #navbarContainer
        const parser = new DOMParser();
        const doc = parser.parseFromString(navbarHtml, "text/html");
        const navbar = doc.querySelector("nav");
        if (navbar) navbarContainer.appendChild(navbar);

        // Dynamically load the navbar CSS
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = navbarCssPath;
        document.head.appendChild(link);

        // Attach event listeners for navigation
        setupNavbarRedirection();
      })
      .catch(error => console.error("Error loading navbar:", error));
  }

  // Function to set up redirection for navbar buttons
  function setupNavbarRedirection() {
    const homeBtn = document.getElementById("homeBtn");
  const ordersBtn = document.getElementById("ordersBtn");
  const profileBtn = document.getElementById("profileBtn");
  const logoutBtn = document.getElementById("logoutBtn");

    if (homeBtn) homeBtn.addEventListener("click", () => window.location.href = `${basePath}/home.html`);
    if (ordersBtn) ordersBtn.addEventListener("click", () => window.location.href = `${basePath}/orders.html`);
    if (profileBtn) profileBtn.addEventListener("click", () => window.location.href = `${basePath}/profile.html`);
    if (logoutBtn) logoutBtn.addEventListener("click", () => window.location.href = `${basePath}/index.html`);
  }

  // Load the navbar
  loadNavbar();
});
