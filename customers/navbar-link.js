
console.log("navbar-link.js is being executed.");

document.addEventListener("DOMContentLoaded", () => {
  // Detect environment: GitHub Pages or local server
  const isGitHubPages = window.location.href.includes("github.io");
  const basePath = isGitHubPages ? "/final-year-project" : "../.."; // Path adjustment for GitHub vs local

  // Function to dynamically load navbar
  function loadNavbar() {
    const navbarContainer = document.querySelector("#navbarContainer");

    if (!navbarContainer) {
      console.error("Navbar container (#navbarContainer) not found in the HTML.");
      return;
    }

    // Correct paths for navbar.html and navbar.css
    const navbarHtmlPath = `${basePath}/customers/navbar.html`;
    const navbarCssPath = `${basePath}/customers/navbar.css`;

    // Fetch and insert navbar HTML
    console.log("Fetching navbar HTML...");
    fetch(navbarHtmlPath)
      .then(response => {
        console.log(`Fetching navbar HTML from: ${navbarHtmlPath}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch navbar HTML: ${response.statusText}`);
        }
        return response.text();
      })
      .then(navbarHtml => {

        console.log("Navbar HTML fetched successfully.");
        // Insert only the <nav> content into the #navbarContainer
        const parser = new DOMParser();
        const doc = parser.parseFromString(navbarHtml, "text/html");
        const navbar = doc.querySelector("nav");
        if (navbar) {
          navbarContainer.appendChild(navbar);

          // Dynamically load the navbar CSS
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = navbarCssPath;
          document.head.appendChild(link);

          // Attach event listeners for navigation
          setupNavbarRedirection();

          // Dynamically load Bootstrap JS dependencies for toggle functionality
          loadBootstrapJS();
        } else {
          console.error("Error: <nav> element not found in navbar.html.");
        }
      })
      .catch(error => {
        console.error("Error loading navbar:", error);
      });
  }

  // Function to load Bootstrap JS and Popper.js
  function loadBootstrapJS() {
    // Log before loading scripts
    console.log("Loading Bootstrap JS and Popper.js...");

    const popperScript = document.createElement("script");
    popperScript.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
    popperScript.defer = true;

    const bootstrapScript = document.createElement("script");
    bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js";
    bootstrapScript.defer = true;

    // Event listeners for better debugging
    popperScript.onload = () => console.log("Popper.js loaded successfully!");
    popperScript.onerror = () => console.error("Error loading Popper.js");

    bootstrapScript.onload = () => console.log("Bootstrap JS loaded successfully!");
    bootstrapScript.onerror = () => console.error("Error loading Bootstrap JS");

    // Append scripts
    document.body.appendChild(popperScript);
    document.body.appendChild(bootstrapScript);
  }

  // Function to set up redirection for navbar buttons
  function setupNavbarRedirection() {
    const homeBtn = document.getElementById("homeBtn");
    const ordersBtn = document.getElementById("ordersBtn");
    const profileBtn = document.getElementById("profileBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    console.log("Setting up navigation redirection...");

    // Get the current URL to determine the customer folder dynamically
    const currentUrl = window.location.href;
    console.log("Current URL:", currentUrl);

    const customerFolder = currentUrl.includes("cust1") ? "cust1" :
                           currentUrl.includes("cust2") ? "cust2" :
                           currentUrl.includes("cust3") ? "cust3" :
                           "cust1"; // Default fallback to cust1

    // Home button redirection (points to the dashboard of the customer)
    if (homeBtn) {
      const homeUrl = `${basePath}/customers/${customerFolder}/customer-dashboard.html`;
      console.log("Home URL:", homeUrl);
      homeBtn.addEventListener("click", () => window.location.href = homeUrl);
    }

    // View Orders button redirection
    if (ordersBtn) {
      const ordersUrl = `${basePath}/customers/${customerFolder}/view-orders.html`;
      console.log("Orders URL:", ordersUrl);
      ordersBtn.addEventListener("click", () => window.location.href = ordersUrl);
    }

    // Profile button redirection
    if (profileBtn) {
      const profileUrl = `${basePath}/customers/${customerFolder}/profile.html`;
      console.log("Profile URL:", profileUrl);
      profileBtn.addEventListener("click", () => window.location.href = profileUrl);
    }

    // Logout button redirection (common for all customers)
    if (logoutBtn) {
      const logoutUrl = `${basePath}/index.html`;
      console.log("Logout URL:", logoutUrl);
      logoutBtn.addEventListener("click", () => window.location.href = logoutUrl);
    }
  }

  // Load the navbar
  loadNavbar();
});
