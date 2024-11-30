document.addEventListener("DOMContentLoaded", () => {
    // Detect if running on GitHub Pages or local server
    const isGitHubPages = window.location.href.includes("github.io");
    const basePath = isGitHubPages ? "/final-year-project" : "../.."; // Adjust to your project structure
  
    // Create and add the <link> element for common-responsive.css
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${basePath}/common-responsive.css`; // Dynamically set the correct path
    document.head.appendChild(link);
  });
  