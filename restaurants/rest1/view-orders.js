document.addEventListener("DOMContentLoaded", () => {
    const filterSelect = document.getElementById("filter-select");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const ordersTable = document.getElementById("orders-table");

    // Filter Orders
    filterSelect.addEventListener("change", () => {
        const filterValue = filterSelect.value.toLowerCase();
        const rows = ordersTable.querySelectorAll("tbody tr");

        rows.forEach(row => {
            const status = row.getAttribute("data-status");
            if (filterValue === "all" || status === filterValue) {
                row.style.display = ""; // Show row
            } else {
                row.style.display = "none"; // Hide row
            }
        });
    });

    // Search Orders
    const searchOrders = () => {
        const searchValue = searchInput.value.toLowerCase();
        const rows = ordersTable.querySelectorAll("tbody tr");

        rows.forEach(row => {
            const orderId = row.cells[0].textContent.toLowerCase();
            const customerName = row.cells[1].textContent.toLowerCase();
            if (orderId.includes(searchValue) || customerName.includes(searchValue)) {
                row.style.display = ""; // Show row
            } else {
                row.style.display = "none"; // Hide row
            }
        });
    };

    searchBtn.addEventListener("click", searchOrders);
    searchInput.addEventListener("input", searchOrders);

    // Accept Order
    ordersTable.addEventListener("click", (event) => {
        if (event.target.classList.contains("accept-btn")) {
            const row = event.target.closest("tr");
            const statusCell = row.querySelector(".status-cell"); // Target Status column
            const actionCell = row.querySelector(".action-cell"); // Target Action column

            // Update Status and Action fields
            statusCell.textContent = "In Progress"; // Update status to In Progress
            row.setAttribute("data-status", "in-progress"); // Update data-status attribute
            actionCell.textContent = "Accepted"; // Update Action to Accepted

            // Remove buttons after accepting
            row.querySelector(".accept-btn").remove();
            row.querySelector(".cancel-btn").remove();
        }
    });

    // Cancel Order
    ordersTable.addEventListener("click", (event) => {
        if (event.target.classList.contains("cancel-btn")) {
            const row = event.target.closest("tr");
            const statusCell = row.querySelector(".status-cell"); // Target Status column
            const actionCell = row.querySelector(".action-cell"); // Target Action column

            // Update Status and Action fields
            statusCell.textContent = "Canceled"; // Update status to Canceled
            row.setAttribute("data-status", "canceled"); // Update data-status attribute
            actionCell.textContent = "Cancelled"; // Update Action to Cancelled

            // Remove buttons after canceling
            row.querySelector(".accept-btn").remove();
            row.querySelector(".cancel-btn").remove();
        }
    });
});
