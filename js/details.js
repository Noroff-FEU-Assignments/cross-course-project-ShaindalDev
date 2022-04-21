const detailContainer = document.querySelector(".product-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// console.log(id);

const url = "https://johnsen-codes.no/rainyDaysWP/wp-json/wc/store/products/" + id;

//console.log(url);

async function getDetails() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);
		document.title = details.name;
         createHtml(details);
    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}
getDetails();

function createHtml(details) {
    detailContainer.innerHTML = `<div class="items">
	<h3 class="product-name">${details.name}</h3>
	<img class="product-image" src="${details.images[0].src}" alt="${details.name}">
	<div class="product-description">
	  <p>${details.description}</p>
	</div>
	<div class="product-price">
	  <span>Only $${details.prices.price},-</span>
	  <small>Ex vat.</small>
	</div>
	<button type="button" class="btn cart-button" data-product="${details.name}">Add to cart</button>
  </div> `;
}