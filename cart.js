// Select elements
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const buttons = document.querySelectorAll(".add-to-cart");
const clearBtton = document.getElementById("clear-cart");

let count = 0;

// Loop through buttons
buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        // Increase cart count
        count++;
        cartCount.textContent = count;

        // Get product info
        const productCard = button.parentElement;
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = productCard.querySelector("p").textContent;

        // Create new item and add to cart
        const item = document.createElement("p");
        item.textContent = `${productName} - ${productPrice}`;
        cartItems.appendChild(item);

    });
});


clearBtton.addEventListener("click", function() {
    count = 0;
    cartCount.textContent = count;
    cartItems.innerHTML = "";

});