document.addEventListener('DOMContentLoaded', function () {
  // Get the base path based on environment
  const isGitHubPages = window.location.href.includes("github.io");
  const basePath = isGitHubPages ? "/final-year-project" : "../..";

  // Add event listeners for each restaurant's "View Menu" button
  document.getElementById('viewMenuRest1').addEventListener('click', function() {
    window.location.href = `${basePath}/restaurants/rest1/menu.html`;
  });

  document.getElementById('viewMenuRest2').addEventListener('click', function() {
    window.location.href = `${basePath}/restaurants/rest2/menu.html`;
  });

  document.getElementById('viewMenuRest3').addEventListener('click', function() {
    window.location.href = `${basePath}/restaurants/rest3/menu.html`;
  });

  document.getElementById('viewMenuRest4').addEventListener('click', function() {
    window.location.href = `${basePath}/restaurants/rest4/menu.html`;
  });
});
