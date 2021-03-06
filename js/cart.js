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
      <a href="../pages/productpage.html?id=${product.id}"><img class="product-image" src="${product.images[0].src}" alt="${product.name}"></a>
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

}
getProducts(baseUrl);


// Future improvements that is being worked on
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
// inspirational modal approach
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var moreInfo = document.getElementById("myModalBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks the button, open the modal 
// moreInfo.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

      // <button id="myModalBtn">More info</button>
      // <div id="myModal class="modal">
      //   <div class="modalContent">
      //     <span class="close">&times;</span>
      //     <p>${product.description}</p>
      //   </div>
      // </div>