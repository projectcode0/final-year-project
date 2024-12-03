// Dynamically load the navbar and handle routing for drivers
document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.querySelector("#navbar-container");
  
    if (navbarContainer) {
      // Determine the base path once at the beginning
      const isGitHubPages = window.location.href.includes("github.io");
      const basePath = isGitHubPages ? "/final-year-project" : "../..";
  
      // Load the navbar.html content dynamically
      fetch(`${basePath}/drivers/navbar.html`)
        .then((response) => response.text())
        .then((data) => {
          // Extract and insert only the <nav> part from navbar.html
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = data;
          const navElement = tempDiv.querySelector("nav");
          if (navElement) {
            navbarContainer.innerHTML = navElement.outerHTML;
  
            // Load the responsive CSS dynamically
            loadNavbarCSS(basePath);
  
            // Attach event listeners for all navigation links and the logout button
            addNavbarEventListeners(basePath);
          } else {
            console.error("No <nav> element found in navbar.html!");
          }
        })
        .catch((error) => {
          console.error("Error loading navbar:", error);
        });
    } else {
      console.error("Navbar container not found!");
    }
  });
  
  // Function to dynamically load the navbar.css
  function loadNavbarCSS(basePath) {
    const cssPath = `${basePath}/drivers/navbar.css`;
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = cssPath;
    document.head.appendChild(linkElement);
  }
  
  // Function to attach event listeners to all navbar links
  function addNavbarEventListeners(basePath) {
    // Attach event listener to all navbar links for navigation
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const path = event.target.getAttribute("href");
        const currentFolder = getCurrentFolder(); // Get current folder (driv1, driv2, etc.)
        if (path) {
          // Construct the correct path for both environments
          window.location.href = `${basePath}/drivers/${currentFolder}/${path}`;
        }
      });
    });
  
    // Attach event listener to the logout button
    const logoutButton = document.querySelector(".btn-danger");
    if (logoutButton) {
      logoutButton.addEventListener("click", function () {
        window.location.href = `${basePath}/index.html`; // Redirect to the main page (index.html)
      });
    }
  
    // Attach event listener to the profile button
    const profileButton = document.querySelector(".btn-outline-light");
    if (profileButton) {
      profileButton.addEventListener("click", function () {
        const currentFolder = getCurrentFolder(); // Get current folder (driv1, driv2, etc.)
        window.location.href = `${basePath}/drivers/${currentFolder}/profile.html`;
      });
    }
  }
  
  // Get the current folder name (driv1, driv2, etc.)
  function getCurrentFolder() {
    const urlSegments = window.location.pathname.split("/");
    return urlSegments[urlSegments.length - 2]; // Assuming folder structure is /drivers/driv1/...
  }
  