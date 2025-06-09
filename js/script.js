document.addEventListener("DOMContentLoaded", function () {
  const products = [
    { id: 1, title: "Casual Shirt", price: 799, image: "images/shirt1.jpg" },
    { id: 2, title: "Designer Kurthi", price: 1299, image: "images/kurthi1.jpg" },
    { id: 3, title: "Stylish Saree", price: 2199, image: "images/saree1.jpg" },
    { id: 4, title: "Blue Jeans", price: 999, image: "images/jeans1.jpg" },
    { id: 5, title: "Graphic T-Shirt", price: 499, image: "images/tshirt1.jpg" },
    { id: 6, title: "Casual Shoes", price: 1599, image: "images/shoes1.jpg" }
  ];

  const container = document.getElementById("product-list");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">₹${product.price}</p>
          <select class="form-select mb-2" id="size-select-${product.id}">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <button class="btn btn-outline-primary w-100 mb-2" onclick="addToWishlist(${product.id})">❤️ Add to Wishlist</button>
          <button class="btn btn-success w-100" onclick="buyNow(${product.id})">🛒 Buy Now</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Flash Sale Countdown Timer
  const countdown = document.getElementById("countdown");
  let timeLeft = 3600; // 1 hour
  setInterval(() => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    countdown.textContent = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
    if (timeLeft > 0) timeLeft--;
  }, 1000);
});

function addToWishlist(id) {
  const user = localStorage.getItem("user");
  const guest = localStorage.getItem("guestContinue");
  if (!user && !guest) {
    alert("Please log in to add items to your wishlist.");
    window.location.href = "login.html";
    return;
  }

  const wishlist = JSON.parse(localStorage.getItem("wishlists") || '{}');
  const key = user || "guest"; // Store wishlist by username or "guest"

  if (!wishlist[key]) wishlist[key] = [];
  if (!wishlist[key].includes(id)) wishlist[key].push(id);
  localStorage.setItem("wishlists", JSON.stringify(wishlist));
  alert("Added to wishlist!");
}

function buyNow(id) {
  const user = localStorage.getItem("user");
  const guest = localStorage.getItem("guestContinue");
  if (!user && !guest) {
    alert("Please log in to buy products.");
    window.location.href = "login.html";
    return;
  }

  const sizeSelect = document.getElementById(`size-select-${id}`);
  const selectedSize = sizeSelect ? sizeSelect.value : null;

  const products = [
    { id: 1, title: "Casual Shirt", price: 799, image: "images/shirt1.jpg" },
    { id: 2, title: "Designer Kurthi", price: 1299, image: "images/kurthi1.jpg" },
    { id: 3, title: "Stylish Saree", price: 2199, image: "images/saree1.jpg" },
    { id: 4, title: "Blue Jeans", price: 999, image: "images/jeans1.jpg" },
    { id: 5, title: "Graphic T-Shirt", price: 499, image: "images/tshirt1.jpg" },
    { id: 6, title: "Casual Shoes", price: 1599, image: "images/shoes1.jpg" }
  ];
  const product = products.find(p => p.id === id);
  if (!product) {
    alert("Product not found!");
    return;
  }

  const cartItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    size: selectedSize || "N/A",
    quantity: 1
  };

  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingIndex = cart.findIndex(item => item.id === id && item.size === cartItem.size);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push(cartItem);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "checkout.html";
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("guestContinue");
  window.location.href = "login.html";
}
