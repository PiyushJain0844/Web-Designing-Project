const products = [
  { id: 1, name: "Wireless Headphones", category: "electronics", price: 2499, rating: "★★★★☆", image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25696583/barracuda2.jpg?quality=90&strip=all&crop=0,0,100,100" },
  { id: 2, name: "Smart Watch", category: "electronics", price: 3299, rating: "★★★★★", image: "https://m.media-amazon.com/images/I/71JU-bUt-sL._AC_UL480_FMwebp_QL65_.jpg" },
  { id: 3, name: "Running Shoes", category: "fashion", price: 1899, rating: "★★★★☆", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" },
  { id: 4, name: "Backpack", category: "fashion", price: 999, rating: "★★★★☆", image: "https://m.media-amazon.com/images/I/81KEKEDFUcL._AC_UL480_FMwebp_QL65_.jpg" },
  { id: 5, name: "Table Lamp", category: "home", price: 799, rating: "★★★☆☆", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600" },
  { id: 6, name: "Coffee Maker", category: "home", price: 2199, rating: "★★★★☆", image: "https://www.lifelongindiaonline.com/cdn/shop/files/LLCMK901_3_b4d5dcdc-ea82-4765-84c3-e817b78f79fb_3200x.jpg?v=1752577991" },

  { id: 7, name: "Bluetooth Speaker", category: "electronics", price: 1499, rating: "★★★★☆", image: "https://bearhugs.in/cdn/shop/files/buy-ocean-dream-wave-bluetooth-speaker-at-bear-hugs-39696.webp?v=1771022044" },
  { id: 8, name: "Laptop Stand", category: "electronics", price: 899, rating: "★★★★☆", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5w6S5DsJgALx0kHmyT3ox9PXWHb3xpqNgxw&s" },
  { id: 9, name: "Wireless Mouse", category: "electronics", price: 599, rating: "★★★★☆", image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_UL480_FMwebp_QL65_.jpg" },
  { id: 10, name: "rgb Keyboard", category: "electronics", price: 799, rating: "★★★☆☆", image: "https://m.media-amazon.com/images/I/71Sl9tngKEL._AC_UF1000,1000_QL80_.jpg" },

  { id: 11, name: "Men's T-Shirt", category: "fashion", price: 499, rating: "★★★★☆", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600" },
  { id: 12, name: "Women's Handbag", category: "fashion", price: 1299, rating: "★★★★☆", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600" },
  { id: 13, name: "Sunglasses", category: "fashion", price: 699, rating: "★★★★☆", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600" },
  { id: 14, name: "Denim Jacket", category: "fashion", price: 1799, rating: "★★★★★", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600" },

  { id: 15, name: "Bedsheet Set", category: "home", price: 1099, rating: "★★★★☆", image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?w=600" },
  { id: 16, name: "Wall Clock", category: "home", price: 649, rating: "★★★☆☆", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600" },
  { id: 17, name: "Office Chair", category: "home", price: 4999, rating: "★★★★☆", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600" },
  { id: 18, name: "Dinner Plate Set", category: "home", price: 1399, rating: "★★★★☆", image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=600" },

  { id: 19, name: "Face Wash", category: "beauty", price: 249, rating: "★★★★☆", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600" },
  { id: 20, name: "Perfume", category: "beauty", price: 1199, rating: "★★★★★", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600" },
  { id: 21, name: "Hair Dryer", category: "beauty", price: 1599, rating: "★★★★☆", image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600" },
  { id: 22, name: "Makeup Kit", category: "beauty", price: 999, rating: "★★★★☆", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600" }
];

let cart = [];

function renderProducts(list = products) {
  const container = document.getElementById("productContainer");

  container.innerHTML = list.map(product => `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="rating">${product.rating}</div>
      <div class="price">₹${product.price.toLocaleString("en-IN")}</div>
      <p>Free delivery available. Limited time deal.</p>
      <button onclick="addToCart(${product.id}, this)">Add to Cart</button>
    </div>
  `).join("");
}

function addToCart(id, button) {
  const product = products.find(item => item.id === id);
  cart.push(product);

  updateCart();

  button.textContent = "Added ✓";

  setTimeout(() => {
    button.textContent = "Add to Cart";
  }, 900);

  addBotMessage(`${product.name} added to cart.`);
}

function updateCart() {
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  cartCount.textContent = cart.length;

  if (!cartItems || !cartTotal) {
    return;
  }

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <strong>${item.name}</strong>
        <span>₹${item.price.toLocaleString("en-IN")}</span>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `).join("");
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total.toLocaleString("en-IN");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  const cartPanel = document.getElementById("cartPanel");

  if (cartPanel) {
    cartPanel.classList.toggle("open");
  } else {
    alert(`Cart items: ${cart.length}`);
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  alert("Order placed successfully! Demo checkout complete.");
  cart = [];
  updateCart();
}

function searchProducts(event) {
  event.preventDefault();

  const text = document.querySelector(".search-bar input").value.toLowerCase();
  const category = document.querySelector(".search-bar select").value.toLowerCase();

  const filtered = products.filter(product => {
    const categoryMatch = category === "all" || product.category === category;
    const textMatch = product.name.toLowerCase().includes(text);
    return categoryMatch && textMatch;
  });

  renderProducts(filtered);
}

function toggleChat() {
  const chatbox = document.getElementById("chatbox");
  chatbox.style.display = chatbox.style.display === "block" ? "none" : "block";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();

  if (!text) return;

  addUserMessage(text);
  input.value = "";

  setTimeout(() => {
    addBotMessage(reply(text));
  }, 400);
}

function addUserMessage(text) {
  const messages = document.getElementById("chatMessages");

  messages.innerHTML += `
    <div class="message user">
      ${text}
    </div>
  `;

  messages.scrollTop = messages.scrollHeight;
}

function addBotMessage(text) {
  const messages = document.getElementById("chatMessages");

  messages.innerHTML += `
    <div class="message bot">
      ${text}
    </div>
  `;

  messages.scrollTop = messages.scrollHeight;
}

function reply(text) {
  text = text.toLowerCase();

  if (text.includes("cart")) {
    return `You have ${cart.length} item(s) in your cart.`;
  }

  if (text.includes("order")) {
    return "You can check orders from Returns & Orders.";
  }

  if (text.includes("prime")) {
    return "Prime gives fast delivery and special offers.";
  }

  if (text.includes("deal") || text.includes("offer")) {
    return "Today's best deals are on headphones, watches, shoes, and home items.";
  }

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! Search a product or add something to your cart.";
  }

  return "I can help with cart, orders, Prime, deals, and products.";
}

function startVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Voice input is not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.start();

  recognition.onresult = event => {
    document.getElementById("userInput").value = event.results[0][0].transcript;
    sendMessage();
  };
}

document.querySelector(".search-bar").addEventListener("submit", searchProducts);
document.querySelector(".cart").addEventListener("click", toggleCart);

document.getElementById("userInput")?.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

renderProducts();
updateCart(); 