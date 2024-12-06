// Handle the payment form submission
document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Simulate payment processing
    setTimeout(function () {
      // Show payment success modal
      const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
      paymentModal.show();
    }, 2000); // Simulate a delay of 2 seconds (for payment processing)
  });
  