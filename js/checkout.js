// checkout.js

function checkAuth() {
  // Simple auth check, redirect if no user
  const user = localStorage.getItem("user");
  if (!user) {
    alert("Please login first.");
    window.location.href = "login.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const container = document.querySelector(".card.p-4.shadow-sm");
  
  if (!cart.length) {
    container.innerHTML = `<p>Your cart is empty. <a href="index.html">Shop now</a>.</p>`;
    return;
  }
  
  let itemsHTML = `<h5 class="mb-3">Selected Items</h5>`;
  let totalPrice = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    itemsHTML += `
      <div class="d-flex align-items-center mb-3">
        <img src="${item.image}" alt="${item.title}" style="width: 100px; height: 100px; object-fit: cover;">
        <div class="ms-3 flex-grow-1">
          <h6>${item.title}</h6>
          <p class="mb-1">Size: ${item.size}</p>
          <p class="mb-1">Price: ₹${item.price} x ${item.quantity} = ₹${itemTotal}</p>
        </div>
      </div>
    `;
  });

  itemsHTML += `<hr>
    <div class="d-flex justify-content-between">
      <strong>Total</strong>
      <strong>₹${totalPrice}</strong>
    </div>
    <div class="text-end mt-4">
      <button class="btn btn-success" onclick="confirmOrder()">Confirm Order</button>
    </div>
  `;

  container.innerHTML = itemsHTML;
});

function confirmOrder() {
  alert("Order confirmed! Thank you for shopping with TrendyCart.");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
