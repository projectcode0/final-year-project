// profile.js

document.addEventListener("DOMContentLoaded", function() {
    const editButton = document.getElementById("edit-btn");
    const saveButton = document.getElementById("save-btn");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
  
    // Enable editing the profile fields
    editButton.addEventListener("click", function() {
      // Enable the form fields for editing
      nameField.disabled = false;
      emailField.disabled = false;
      phoneField.disabled = false;
      
      // Show Save button and hide Edit button
      saveButton.style.display = "inline-block";
      editButton.style.display = "none";
    });
  
    // Handle saving the updated profile
    saveButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission (if any)
      
      // Get the updated values from the fields
      const updatedName = nameField.value;
      const updatedEmail = emailField.value;
      const updatedPhone = phoneField.value;
      
      // Here you can send these values to a server or local storage to save them
      console.log("Updated Profile:", updatedName, updatedEmail, updatedPhone);
  
      // Disable fields again after saving
      nameField.disabled = true;
      emailField.disabled = true;
      phoneField.disabled = true;
  
      // Hide the Save button and show Edit button
      saveButton.style.display = "none";
      editButton.style.display = "inline-block";
    });
  });
  