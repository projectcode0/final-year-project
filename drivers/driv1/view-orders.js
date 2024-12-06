document.addEventListener("DOMContentLoaded", function() {
    // Select all "View Details" buttons
    const viewDetailsButtons = document.querySelectorAll('.btn-primary');
  
    // Add click event listeners to each button
    viewDetailsButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Get the order details from the card
        const orderId = this.closest('.card').querySelector('.card-title').textContent;
        const orderStatus = this.closest('.card').querySelector('.card-text').textContent;
  
        // Show the modal with the order details
        showOrderDetails(orderId, orderStatus);
      });
    });
  
    // Function to show order details in the modal
    function showOrderDetails(orderId, orderStatus) {
      // Set the modal content dynamically
      document.getElementById('orderId').textContent = orderId;
      document.getElementById('orderStatus').textContent = orderStatus;
      document.getElementById('orderDetails').textContent = `Here are the details for ${orderId}...`; // You can expand this with real data
  
      // Show the modal
      const orderDetailsModal = new bootstrap.Modal(document.getElementById('orderDetailsModal'));
      orderDetailsModal.show();
    }
  });
  