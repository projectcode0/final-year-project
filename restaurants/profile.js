// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Cache DOM elements for easy reference
    const editButton = document.querySelector("#editButton");
    const saveButton = document.querySelector("#saveButton");
    const cancelButton = document.querySelector("#cancelButton");

    const nameField = document.querySelector("#name");
    const emailField = document.querySelector("#email");
    const phoneField = document.querySelector("#phone");
    const addressField = document.querySelector("#address");
    const profileImage = document.querySelector("#profileImage");
    
    const nameInput = document.querySelector("#nameInput");
    const emailInput = document.querySelector("#emailInput");
    const phoneInput = document.querySelector("#phoneInput");
    const addressInput = document.querySelector("#addressInput");
    const fileInput = document.querySelector("#fileInput");

    // Edit button - Show inputs and hide profile display
    editButton.addEventListener("click", function() {
        nameInput.value = nameField.textContent;
        emailInput.value = emailField.textContent;
        phoneInput.value = phoneField.textContent;
        addressInput.value = addressField.textContent;

        // Toggle visibility between view and edit modes
        nameField.style.display = "none";
        emailField.style.display = "none";
        phoneField.style.display = "none";
        addressField.style.display = "none";
        
        nameInput.style.display = "block";
        emailInput.style.display = "block";
        phoneInput.style.display = "block";
        addressInput.style.display = "block";
        fileInput.style.display = "block";
        
        saveButton.style.display = "inline-block";
        cancelButton.style.display = "inline-block";
        editButton.style.display = "none";
    });

    // Save button - Save changes and update the profile
    saveButton.addEventListener("click", function() {
        nameField.textContent = nameInput.value;
        emailField.textContent = emailInput.value;
        phoneField.textContent = phoneInput.value;
        addressField.textContent = addressInput.value;

        // Update the profile image if a new image is uploaded
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        // Toggle visibility back to view mode
        nameField.style.display = "block";
        emailField.style.display = "block";
        phoneField.style.display = "block";
        addressField.style.display = "block";
        
        nameInput.style.display = "none";
        emailInput.style.display = "none";
        phoneInput.style.display = "none";
        addressInput.style.display = "none";
        fileInput.style.display = "none";
        
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
        editButton.style.display = "inline-block";
    });

    // Cancel button - Reset changes
    cancelButton.addEventListener("click", function() {
        // Reset input values to the current displayed profile data
        nameInput.value = nameField.textContent;
        emailInput.value = emailField.textContent;
        phoneInput.value = phoneField.textContent;
        addressInput.value = addressField.textContent;
        
        // Toggle visibility back to view mode
        nameField.style.display = "block";
        emailField.style.display = "block";
        phoneField.style.display = "block";
        addressField.style.display = "block";
        
        nameInput.style.display = "none";
        emailInput.style.display = "none";
        phoneInput.style.display = "none";
        addressInput.style.display = "none";
        fileInput.style.display = "none";
        
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
        editButton.style.display = "inline-block";
    });
});
