document.addEventListener("DOMContentLoaded", () => {  
    console.log("Script is running");

    const menuItems = [
        {
            id: 1,
            name: "Spaghetti Bolognese",
            description: "A classic Italian pasta dish with rich and savory meat sauce.",
            price: 9.99,
            imgSrc: "https://via.placeholder.com/300x200?text=Spaghetti+Bolognese"
        },
        {
            id: 2,
            name: "Margherita Pizza",
            description: "A delicious pizza topped with fresh mozzarella and basil.",
            price: 7.99,
            imgSrc: "https://via.placeholder.com/300x200?text=Margherita+Pizza"
        },
        {
            id: 3,
            name: "Caesar Salad",
            description: "Crisp romaine lettuce, croutons, and Caesar dressing.",
            price: 5.99,
            imgSrc: "https://via.placeholder.com/300x200?text=Caesar+Salad"
        },
        {
            id: 4,
            name: "Cheeseburger",
            description: "A juicy beef patty with melted cheddar cheese, lettuce, tomato, and pickles.",
            price: 8.99,
            imgSrc: "https://via.placeholder.com/300x200?text=Cheeseburger"
        },
        {
            id: 5,
            name: "Chicken Alfredo",
            description: "Tender chicken pieces in a creamy Alfredo sauce served over pasta.",
            price: 10.99,
            imgSrc: "https://via.placeholder.com/300x200?text=Chicken+Alfredo"
        },
        {
            id: 6,
            name: "Vegetarian Pizza",
            description: "A pizza topped with bell peppers, onions, mushrooms, olives, and spinach.",
            price: 9.49,
            imgSrc: "https://via.placeholder.com/300x200?text=Vegetarian+Pizza"
        },
        {
            id: 7,
            name: "BBQ Ribs",
            description: "Tender ribs glazed with smoky barbecue sauce, served with coleslaw.",
            price: 14.99,
            imgSrc: "https://via.placeholder.com/300x200?text=BBQ+Ribs"
        },
        {
            id: 8,
            name: "Fish and Chips",
            description: "Crispy battered fish fillets served with golden fries.",
            price: 11.49,
            imgSrc: "https://via.placeholder.com/300x200?text=Fish+and+Chips"
        },
        {
            id: 9,
            name: "Margarita Smoothie",
            description: "A refreshing smoothie made with tropical fruits and a hint of mint.",
            price: 4.99,
            imgSrc: "https://via.placeholder.com/300x200?text=Margarita+Smoothie"
        },
        {
            id: 10,
            name: "Chocolate Cake",
            description: "Rich and moist chocolate cake with a layer of creamy chocolate frosting.",
            price: 6.49,
            imgSrc: "https://via.placeholder.com/300x200?text=Chocolate+Cake"
        }
    ];
    

    const menuContainer = document.getElementById("menu-items");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.createElement("p"); // For displaying total price
    let cart = [];

    // Function to render menu items
    function renderMenuItems() {
        console.log("Rendering menu items...");
        menuContainer.innerHTML = ""; // Clear the container before rendering
        menuItems.forEach(item => {
            const menuItemCard = document.createElement("div");
            menuItemCard.classList.add("col-md-4", "mb-4");

            menuItemCard.innerHTML = `
                <div class="card">
                    <img src="${item.imgSrc}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="price">$${item.price.toFixed(2)}</p>
                        <button class="add-to-cart-btn btn btn-primary" data-id="${item.id}">Add to Cart</button>
                    </div>
                </div>
            `;

            menuContainer.appendChild(menuItemCard);
        });
        console.log("Menu items rendered.");
    }

    // Handle add to cart functionality
    menuContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-to-cart-btn")) {
            const itemId = Number(e.target.getAttribute("data-id"));
            const item = menuItems.find(i => i.id === itemId);

            console.log(`Adding item to cart: ${item.name}`);

            const existingItem = cart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...item, quantity: 1 });
            }

            renderCart();
        }
    });

    // Render cart items
    function renderCart() {
        console.log("Rendering cart items...");
        cartItemsList.innerHTML = ""; // Clear the cart before rendering

        cart.forEach(item => {
            const cartItem = document.createElement("li");
            cartItem.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-2");

            cartItem.innerHTML = `
                <span class="item-name">${item.name}</span>
                <div class="quantity-controls">
                    <button class="decrease-quantity btn btn-sm btn-secondary" data-id="${item.id}">-</button>
                    <input type="text" class="quantity-input" value="${item.quantity}" data-id="${item.id}">
                    <button class="increase-quantity btn btn-sm btn-secondary" data-id="${item.id}">+</button>
                </div>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            `;

            cartItemsList.appendChild(cartItem);
        });

        // Update total price
        const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
        cartTotal.textContent = `Total: $${totalPrice}`;
        cartTotal.classList.add("text-end", "fw-bold", "mt-3");
        cartItemsList.appendChild(cartTotal);

        updateCheckoutButton();
    }

    // Handle quantity changes
    cartItemsList.addEventListener("click", (e) => {
        const itemId = Number(e.target.getAttribute("data-id"));

        if (e.target.classList.contains("increase-quantity")) {
            const item = cart.find(i => i.id === itemId);
            item.quantity += 1;
            renderCart();
        }

        if (e.target.classList.contains("decrease-quantity")) {
            const item = cart.find(i => i.id === itemId);
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                cart = cart.filter(i => i.id !== itemId); // Remove item if quantity is 0
            }
            renderCart();
        }
    });

    // Handle manual quantity input
    cartItemsList.addEventListener("input", (e) => {
        if (e.target.classList.contains("quantity-input")) {
            const itemId = Number(e.target.getAttribute("data-id"));
            const newQuantity = Number(e.target.value);

            const item = cart.find(i => i.id === itemId);
            if (newQuantity >= 1) {
                item.quantity = newQuantity;
            } else {
                e.target.value = item.quantity;
            }

            renderCart();
        }
    });

    // Update checkout button state based on cart
    function updateCheckoutButton() {
        const checkoutButton = document.getElementById("checkout-btn");
        checkoutButton.disabled = cart.length === 0;
    }

    // Initial render of menu and cart
    renderMenuItems();
});
