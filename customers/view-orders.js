document.addEventListener("DOMContentLoaded", function() {

  
    
  
    // Example Orders Data (you can replace this with real data from an API)
    const orders = [
      {
        id: "#001",
        item: "Cheeseburger",
        quantity: 2,
        price: "$10.00",
        status: "Delivered",
        details: "2 Cheeseburgers with extra cheese and ketchup.",
        actions: ["Details", "Reorder"]
      },
      {
        id: "#002",
        item: "Veggie Pizza",
        quantity: 1,
        price: "$15.00",
        status: "Preparing",
        details: "A delicious veggie pizza with olives, tomatoes, and peppers.",
        actions: ["Details", "Cancel"]
      },
      {
        id: "#003",
        item: "Chocolate Cake",
        quantity: 3,
        price: "$21.00",
        status: "Cancelled",
        details: "Chocolate cake with rich chocolate frosting.",
        actions: ["Details"]
      }
      // Add more orders as needed
    ];
  
    // Current page of orders (for pagination)
    let currentPage = 1;
    const ordersPerPage = 2; // Change this as needed
  
    // Render Orders Table
    function renderOrders() {
      const ordersTableBody = document.querySelector("tbody");
      ordersTableBody.innerHTML = ""; // Clear existing rows
  
      // Get the orders for the current page
      const startIndex = (currentPage - 1) * ordersPerPage;
      const endIndex = startIndex + ordersPerPage;
      const currentOrders = orders.slice(startIndex, endIndex);
  
      currentOrders.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${order.id}</td>
          <td>${order.item}</td>
          <td>${order.quantity}</td>
          <td>${order.price}</td>
          <td><span class="badge bg-${getStatusClass(order.status)}">${order.status}</span></td>
          <td>
            <button class="btn btn-outline-primary btn-sm" onclick="showOrderDetails('${order.id}')">Details</button>
            ${order.actions.includes("Reorder") ? '<button class="btn btn-outline-secondary btn-sm" onclick="reorderItem()">Reorder</button>' : ""}
            ${order.actions.includes("Cancel") ? '<button class="btn btn-outline-secondary btn-sm" onclick="cancelOrder()">Cancel</button>' : ""}
          </td>
        `;
        ordersTableBody.appendChild(row);
      });
  
      // Handle Pagination
      const totalPages = Math.ceil(orders.length / ordersPerPage);
      const paginationContainer = document.querySelector(".pagination");
      paginationContainer.innerHTML = ""; // Clear existing pagination buttons
  
      // Previous Button
      const prevButton = document.createElement("li");
      prevButton.classList.add("page-item");
      prevButton.innerHTML = `<a class="page-link" href="#" ${currentPage === 1 ? 'aria-disabled="true"' : ''} onclick="changePage('prev')">Previous</a>`;
      paginationContainer.appendChild(prevButton);
  
      // Page Number Buttons
      for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("li");
        pageButton.classList.add("page-item");
        pageButton.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
        if (i === currentPage) {
          pageButton.classList.add("active");
        }
        paginationContainer.appendChild(pageButton);
      }
  
      // Next Button
      const nextButton = document.createElement("li");
      nextButton.classList.add("page-item");
      nextButton.innerHTML = `<a class="page-link" href="#" ${currentPage === totalPages ? 'aria-disabled="true"' : ''} onclick="changePage('next')">Next</a>`;
      paginationContainer.appendChild(nextButton);
    }
  
    // Change Page Function (for pagination)
    window.changePage = function(page) {
      if (page === "prev" && currentPage > 1) {
        currentPage--;
      } else if (page === "next" && currentPage < Math.ceil(orders.length / ordersPerPage)) {
        currentPage++;
      } else if (typeof page === "number") {
        currentPage = page;
      }
      renderOrders(); // Re-render the orders after page change
    };
  
    // Show Order Details
    window.showOrderDetails = function(orderId) {
      const order = orders.find(o => o.id === orderId);
      if (order) {
        alert(`Order ID: ${order.id}\nItem: ${order.item}\nQuantity: ${order.quantity}\nPrice: ${order.price}\nStatus: ${order.status}\nDetails: ${order.details}`);
      }
    };
  
    // Reorder Item Function
    window.reorderItem = function() {
      alert('Reordering item...');
    };
  
    // Cancel Order Function
    window.cancelOrder = function() {
      alert('Order cancelled.');
    };
  
    // Get Badge Class for Status
    function getStatusClass(status) {
      switch (status) {
        case "Delivered":
          return "success";
        case "Preparing":
          return "warning";
        case "Cancelled":
          return "danger";
        default:
          return "secondary";
      }
    }
  
    // Initial Render
    renderOrders();
  });
  