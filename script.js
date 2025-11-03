let cart = [];
let total = 0;
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartMenu = document.getElementById('cart');
const cartBtn = document.getElementById('cart-btn');

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = cart.map(item => `<li>${item.name} - R$${item.price}</li>`).join('');
  cartTotal.textContent = total.toFixed(2);
}

cartBtn.addEventListener('click', () => {
  cartMenu.classList.toggle('active');
});

document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  alert(`Compra finalizada com sucesso! Total: R$${total.toFixed(2)}`);
  cart = [];
  total = 0;
  updateCart();
  cartMenu.classList.remove('active');
});