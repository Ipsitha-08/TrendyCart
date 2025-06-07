document.addEventListener('DOMContentLoaded', function () {
    const wishlistContainer = document.getElementById('wishlist-container');
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
    if (wishlist.length === 0) {
      wishlistContainer.innerHTML = '<p style="text-align:center; margin-top:2rem;">Your wishlist is empty.</p>';
      return;
    }
  
    wishlist.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card mb-4';
      card.style.width = '18rem';
      card.style.margin = '1rem';
  
      card.innerHTML = `
        <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 250px; object-fit: cover;">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}</p>
          <button class="btn btn-danger btn-sm">Remove</button>
        </div>
      `;
  
      const removeBtn = card.querySelector('button');
      removeBtn.addEventListener('click', () => {
        removeFromWishlist(product.name);
        card.remove();
      });
  
      wishlistContainer.appendChild(card);
    });
  });
  
  function removeFromWishlist(name) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.name !== name);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${name} removed from wishlist!`);
  }
  