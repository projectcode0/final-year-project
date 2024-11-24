document.addEventListener("DOMContentLoaded", () => {
    const addItemBtn = document.getElementById("add-item-btn");
  
    // Add New Item Functionality
    if (addItemBtn) {
      addItemBtn.addEventListener("click", () => {
        alert("Add Item functionality coming soon!");
      });
    }
  
    // Edit and Delete functionality for menu items (Dynamic future scope)
    document.querySelectorAll(".btn-warning").forEach((editBtn) => {
      editBtn.addEventListener("click", () => {
        alert("Edit Item functionality coming soon!");
      });
    });
  
    document.querySelectorAll(".btn-danger").forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", () => {
        alert("Delete Item functionality coming soon!");
      });
    });

  
  });
  