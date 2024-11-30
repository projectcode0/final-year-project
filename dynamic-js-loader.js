// dynamic-js-loader.js (placed in the root directory)
// dynamic-js-loader.js

// Check if `isGitHubPages` is already declared to prevent redeclaration
if (typeof isGitHubPages === "undefined") {
    const isGitHubPages = window.location.href.includes("github.io");
    const basePath = isGitHubPages ? "/final-year-project" : ".";
  
    // Dynamically load common-responsive CSS
    const commonCss = document.createElement("link");
    commonCss.rel = "stylesheet";
    commonCss.href = `${basePath}/common-responsive.css`;
    document.head.appendChild(commonCss);
  
    console.log(`Dynamic loader initialized with basePath: ${basePath}`);
  }
  
