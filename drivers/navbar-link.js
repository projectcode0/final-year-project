// Dynamically load the navbar and handle routing for drivers
document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.querySelector("#navbar-container");

  if (navbarContainer) {
    const isGitHubPages = window.location.href.includes("github.io");
    const basePath = isGitHubPages ? "/final-year-project" : "../..";

    // Fetch the navbar HTML
    fetch(`${basePath}/drivers/navbar.html`)
      .then((response) => response.text())
      .then((data) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = data;
        const navElement = tempDiv.querySelector("nav");
        if (navElement) {
          navbarContainer.innerHTML = navElement.outerHTML;
          
          // Load Bootstrap JS and Popper.js dynamically
          loadBootstrapJS();
          
          // Load the custom navbar CSS
          loadNavbarCSS(basePath);
          
          // Add event listeners for navbar links
          addNavbarEventListeners(basePath);
        } else {
          console.error("No <nav> element found in navbar.html!");
        }
      })
      .catch((error) => console.error("Error loading navbar:", error));
  } else {
    console.error("Navbar container not found!");
  }
});

// Function to load Bootstrap JS and Popper.js dynamically
function loadBootstrapJS() {
  // Load Popper.js
  const popperScript = document.createElement("script");
  popperScript.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
  popperScript.defer = true;
  document.head.appendChild(popperScript);

  // Load Bootstrap JS after Popper.js
  popperScript.onload = function () {
    const bootstrapScript = document.createElement("script");
    bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";
    bootstrapScript.defer = true;
    document.head.appendChild(bootstrapScript);

    // Reinitialize Bootstrap components like collapse after loading Bootstrap JS
    bootstrapScript.onload = function () {
      reinitializeBootstrapComponents();
    };
  };
}

// Load custom navbar CSS dynamically
function loadNavbarCSS(basePath) {
  const cssPath = `${basePath}/drivers/navbar.css`;
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = cssPath;
  document.head.appendChild(linkElement);
}

// Reinitialize Bootstrap components after JS is loaded
function reinitializeBootstrapComponents() {
  const navbar = document.querySelector(".navbar-collapse");
  if (navbar) {
    bootstrap.Collapse.getOrCreateInstance(navbar);
    console.log("Bootstrap components reinitialized.");
  }
}

// Add event listeners for navbar links
function addNavbarEventListeners(basePath) {
  const currentFolder = getCurrentFolder();

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const path = event.target.getAttribute("href");
      if (path) {
        window.location.href = `${basePath}/drivers/${currentFolder}/${path}`;
      }
    });
  });

  const logoutButton = document.querySelector(".btn-danger");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      window.location.href = `${basePath}/index.html`;
    });
  }

  const profileButton = document.querySelector(".btn-outline-light");
  if (profileButton) {
    profileButton.addEventListener("click", () => {
      window.location.href = `${basePath}/drivers/${currentFolder}/profile.html`;
    });
  }
}

// Helper function to get the current folder
function getCurrentFolder() {
  const urlSegments = window.location.pathname.split("/");
  return urlSegments[urlSegments.length - 2];
}
