const baseUrl = "https://johnsen-codes.no/rainyDaysWP/wp-json/wc/store/products"
async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products)
  const productsContainer = document.querySelector(".product-list");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".cart-total");

let cartArray = [];
// ADD PRODUCTS TO PAGE CONTAINER
  products.forEach(function (product, index) {
  productsContainer.innerHTML += `<div class="items">
      <h3 class="product-name">${product.name}</h3>
      <img class="product-image" src="${product.images[0].src}" alt="${product.name}">
      <div class="product-description">
        <p>${product.description}</p>
      </div>
      <div class="product-price">
        <span>Only $${product.prices.price},-</span>
        <small>Ex vat.</small>
      </div>
      <button type="button" class="btn cart-button" data-product="${product.name}">Add to cart</button>
    </div> `;
});
// ADD "BUY BUTTON" FUNCTION
const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.onclick = function (event) {
    
    // cartArray.push(event.target.dataset.product);
    const itemToAdd = products.find(
      (item) => item.name === event.target.dataset.product
    );
    cartArray.push(itemToAdd);
    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
    
  };
});
// Add Item
function showCart(cartItems) {
  cart.classList.remove("hidden");
  cartList.innerHTML = "";
  let total = 0;
  cartItems.forEach(function (cartElement, index) {
    total += parseInt(cartElement.prices.price);
    cartList.innerHTML += `
        <div class="cart-item">
          <img class="cart-image" src="${cartElement.images[0].src}" alt="${cartElement.name}">
          <div class="cart-details">
            <h6>${cartElement.name}</h6>
            <span>$${cartElement.prices.price},-</span>
          </div>
        </div>`;
  });
  totalContainer.innerHTML = `Total: $${total},-`;
}
const cartButtons = document.querySelectorAll('.cart-toggle');
cartButtons.forEach(button => button.addEventListener('click', onToggleCart));
function onToggleCart(event) {
  if (cartArray.length > 0) {
    const cart = document.querySelector(".cart");
    cart.classList.toggle("hidden");
  } else {
    alert('Cart is empty, please buy some products first.');
  }
};
onToggleCart();
}
getProducts(baseUrl);
// import { productArray } from "./storage/products.js";






// Updated Cart
function shoppingCartUpdated() {

}

// Change Quantity
function quantityUpdated() {

}

// Remove Item
function removeItem(index) {

}