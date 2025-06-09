document.addEventListener("DOMContentLoaded", function () {
  const user = localStorage.getItem("user");
  const wishlistData = JSON.parse(localStorage.getItem("wishlists") || '{}');
  const userWishlist = wishlistData[user] || [];

  // Use the full product list from your main script.js
  const products = [
    {
      id: 1,
      title: "Casual Shirt",
      price: 799,
      image: "images/shirt1.jpg"
    },
    {
      id: 2,
      title: "Designer Kurthi",
      price: 1299,
      image: "images/kurthi1.jpg"
    },
    {
      id: 3,
      title: "Stylish Saree",
      price: 2199,
      image: "images/saree1.jpg"
    },
    {
      id: 4,
      title: "Blue Jeans",
      price: 999,
      image: "images/jeans1.jpg"
    },
    {
      id: 5,
      title: "Graphic T-Shirt",
      price: 499,
      image: "images/tshirt1.jpg"
    },
    {
      id: 6,
      title: "Casual Shoes",
      price: 1599,
      image: "images/shoes1.jpg"
    }
  ];

  const container = document.getElementById("wishlist-container");

  const filtered = products.filter(p => userWishlist.includes(p.id));

  if (filtered.length === 0) {
    container.innerHTML = `<p>No items in your wishlist.</p>`;
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="image-container">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">₹${product.price}</p>
          <button class="btn btn-danger w-100" onclick="removeFromWishlist(${product.id})">Remove from Wishlist</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
});

function removeFromWishlist(id) {
  const user = localStorage.getItem("user");
  const wishlistData = JSON.parse(localStorage.getItem("wishlists") || '{}');
  if (wishlistData[user]) {
    wishlistData[user] = wishlistData[user].filter(item => item !== id);
    localStorage.setItem("wishlists", JSON.stringify(wishlistData));
    location.reload();
  }
}
