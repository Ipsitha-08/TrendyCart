const user = localStorage.getItem("user");
if (!user && window.location.pathname.endsWith("index.html")) {
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const productList = [
    { name: "Stylish Kurti", price: "₹699", image: "images/kurti1.jpg" },
    { name: "Men's T-Shirt", price: "₹499", image: "images/tshirt1.jpg" },
    { name: "Women's Saree", price: "₹1199", image: "images/saree1.jpg" },
    { name: "Men's Jeans", price: "₹899", image: "images/jeans1.jpg" },
    { name: "Casual Shirt", price: "₹599", image: "images/shirt1.jpg" },
    { name: "Sneakers", price: "₹1299", image: "images/shoes1.jpg" }
  ];

  const container = document.getElementById("product-list");

  productList.forEach((product, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 250px; object-fit: cover;">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}</p>
          <button class="btn btn-outline-danger wishlist-btn" data-index="${index}">❤️ Add to Wishlist</button>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
  const buttons = document.querySelectorAll(".wishlist-btn");
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      const product = productList[index];
      addToWishlist(product);
    });
  });
});

function addToWishlist(product) {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const exists = wishlist.some(item => item.name === product.name);
  if (exists) {
    alert("This item is already in your wishlist!");
    return;
  }
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert(`${product.name} added to wishlist!`);
}
