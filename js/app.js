
// Burger Products

const burgers = [
    {
        id: 1,
        name: "Classic Burger",
        description: "Juicy beef patty with fresh vegetables.",
        price: 1200,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
    },
    {
        id: 2,
        name: "Cheese Burger",
        description: "Delicious burger with melted cheese.",
        price: 1500,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=600"
    },
    {
        id: 3,
        name: "Chicken Burger",
        description: "Crispy chicken with special sauce.",
        price: 1300,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600"
    },
    {
        id: 4,
        name: "Double Burger",
        description: "Double beef, double taste!",
        price: 2000,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600"
    },
    {
        id: 5,
        name: "Spicy Burger",
        description: "Hot and spicy burger with fresh sauce.",
        price: 1600,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600"
    },
    {
        id: 6,
        name: "Special Burger",
        description: "Our special recipe made with love.",
        price: 2500,
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600"
    }
];


// Cart Array

let cart = [];


// Display Burgers

function displayBurgers() {

    const burgerContainer =
        document.getElementById("burgerContainer");

    burgerContainer.innerHTML = "";

    burgers.forEach(burger => {

        burgerContainer.innerHTML += `
            <div class="burger-card">

                <img src="${burger.image}" alt="${burger.name}">

                <h3>${burger.name}</h3>

                <p>${burger.description}</p>

                <div class="price">
                    Rs. ${burger.price.toLocaleString()}
                </div>

                <button class="add-btn"
                    onclick="addToCart(${burger.id})">
                    ADD TO CART +
                </button>

            </div>
        `;

    });

}


// Add To Cart

function addToCart(id) {

    const burger = burgers.find(item => item.id === id);

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            ...burger,
            quantity: 1
        });

    }

    updateCart();

    alert(burger.name + " added to cart!");

}


// Update Cart

function updateCart() {

    const cartItems = document.getElementById("cartItems");

    const cartCount = document.getElementById("cartCount");

    const cartTotal = document.getElementById("cartTotal");

    let total = 0;
    let count = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty!</p>';

    }

    cart.forEach(item => {

        total += item.price * item.quantity;

        count += item.quantity;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div>
                    <h4>${item.name}</h4>
                    <p>Rs. ${item.price.toLocaleString()}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>

                <button onclick="removeItem(${item.id})">
                    Remove
                </button>

            </div>

        `;

    });

    cartCount.innerText = count;

    cartTotal.innerText = total.toLocaleString();

}


// Remove Item

function removeItem(id) {

    cart = cart.filter(item => item.id !== id);

    updateCart();

}


// Open / Close Cart

function toggleCart() {

    document.getElementById("cartPanel")
        .classList.toggle("active");

}


// Mobile Navigation

function toggleMenu() {
    document.getElementById("navLinks")
        .classList.toggle("active");

}


// Checkout

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;

    }

    let total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    const confirmOrder = confirm(
        "Confirm your order?\nTotal: Rs. " +
        total.toLocaleString()
    );

    if (confirmOrder) {
        alert("Thank you for choosing BURGERX! 🍔\nYour demo order has been placed.");
        cart = [];
        updateCart();
        toggleCart();

    }

}


// Initialize Website

displayBurgers();
updateCart();
