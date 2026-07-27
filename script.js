// ==========================================
// ملف التحكم المطور (script.js) - الميزات الـ 5
// ==========================================

let currentPage = 1;
const productsPerPage = 8;
let filteredProducts = (typeof products !== 'undefined') ? [...products] : [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// 1. عرض المنتجات
function renderProducts(items) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `<div class="no-products" style="text-align:center; width:100%; padding:40px; font-size:18px;">مفيش منتجات هُنا حالياً 🌸</div>`;
    renderPaginationControls(0);
    return;
  }

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  grid.innerHTML = paginatedItems.map(product => {
    const productImages = (product.images && product.images.length > 0) 
      ? product.images 
      : [product.image || 'https://via.placeholder.com/200?text=No+Image'];

    const isFav = favorites.includes(product.id);

    let dotsHtml = '';
    if (productImages.length > 1) {
      dotsHtml = `<div class="image-dots">` + 
        productImages.map((_, index) => `
          <span class="dot ${index === 0 ? 'active' : ''}" onclick="changeProductImage(event, ${product.id}, ${index})"></span>
        `).join('') + 
      `</div>`;
    }

    return `
      <div class="product-card" onclick="openProductModal(${product.id})">
        <div class="card-top-icons">
          <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart heart-icon ${isFav ? 'active' : ''}" 
             onclick="toggleFavorite(event, ${product.id})"></i>
        </div>
        
        <img 
          id="img-${product.id}"
          src="${productImages[0]}" 
          alt="${product.name}"
          onerror="this.src='https://via.placeholder.com/200?text=No+Image'"
        >

        ${dotsHtml}

        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="sub-text">${product.subText || ''}</p>
          <div class="card-bottom">
            <span class="price">${product.price} ج.م</span>
            <button class="add-cart-icon-btn" onclick="addToCart(event, ${product.id})">
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  renderPaginationControls(items.length);
  updateCartCount();
}

// 2. ترتيب المنتجات حسب السعر (Price Sorting)
function sortProducts(criteria) {
  if (criteria === 'low-high') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (criteria === 'high-low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else {
    filteredProducts = [...products];
  }
  currentPage = 1;
  renderProducts(filteredProducts);
}

// 3. عرض المفضلة فقط
function showFavorites() {
  filteredProducts = products.filter(p => favorites.includes(p.id));
  currentPage = 1;
  renderProducts(filteredProducts);
}

// 4. إشعار الـ Toast الكوايي
function showToast(message) {
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// 5. إضافة للمفضلة
function toggleFavorite(event, productId) {
  event.stopPropagation();
  const index = favorites.indexOf(productId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast('تمت الإزالة من المفضلة 💔');
  } else {
    favorites.push(productId);
    showToast('تمت الإضافة للمفضلة 💖');
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderProducts(filteredProducts);
}

// 6. إضافة للسلة
function addToCart(event, productId) {
  if (event) event.stopPropagation();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const mainImg = (product.images && product.images.length > 0) ? product.images[0] : (product.image || '');
    cart.push({ ...product, image: mainImg, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
  showToast(`تمت إضافة "${product.name}" للسلة! 🛍️✨`);
}

// باقي الدوال الخاصة بالسلة والفلترة والبحث والمودال
function changeProductImage(event, productId, imgIndex) {
  event.stopPropagation();
  const product = products.find(p => p.id === productId);
  if (!product || !product.images) return;
  const imgElement = document.getElementById(`img-${productId}`);
  if (imgElement) imgElement.src = product.images[imgIndex];
  const card = imgElement.closest('.product-card');
  const dots = card.querySelectorAll('.dot');
  dots.forEach((dot, idx) => {
    if (idx === imgIndex) dot.classList.add('active');
    else dot.classList.remove('active');
  });
}

function filterProducts(category) {
  if (window.event) {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    if (window.event.target) window.event.target.classList.add('active');
  }
  if (category === 'all') filteredProducts = [...products];
  else filteredProducts = products.filter(p => p.category === category);
  currentPage = 1;
  renderProducts(filteredProducts);
}

function searchProducts() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  const query = searchInput.value.trim().toLowerCase();
  filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
  currentPage = 1;
  renderProducts(filteredProducts);
}

function toggleCart(forceOpen = false) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('overlay');
  if (!drawer) return;
  if (forceOpen || !drawer.classList.contains('open')) {
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    renderCartItems();
  } else {
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  if (!cartItemsContainer) return;
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="text-align:center; margin-top:20px;">السلة فاضية.. جربي تضيفي حاجة كوايي! 🌸</p>';
    if (cartTotalEl) cartTotalEl.textContent = '0';
    return;
  }
  let total = 0;
  cartItemsContainer.innerHTML = cart.map(item => {
    total += item.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>${item.price} ج.م</p>
          <div class="quantity-controls">
            <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
        <i class="fa-solid fa-trash remove-item-btn" onclick="removeFromCart(${item.id})"></i>
      </div>
    `;
  }).join('');
  if (cartTotalEl) cartTotalEl.textContent = total;
}

function changeQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
}

function updateCartCount() {
  const cartCountEl = document.getElementById('cart-count');
  if (cartCountEl) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;
  }
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast('السلة فاضية يا قمر! 🛍️');
    return;
  }
  let text = "أهلاً H-STORE ✨، عايزة أطلب المنتجات دي:\n\n";
  let total = 0;
  cart.forEach(item => {
    text += `• ${item.name} (${item.quantity} قطعة) - ${item.price * item.quantity} ج.م\n`;
    total += item.price * item.quantity;
  });
  text += `\nإجمالي الحساب: ${total} ج.م`;
  const phone = "201000000000";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}

function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.style.display = 'flex';
}
function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.style.display = 'none';
}
function switchAuthTab(tab) {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const tabLogin = document.getElementById('tab-login');
  const tabSignup = document.getElementById('tab-signup');
  if (tab === 'login') {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    tabLogin.classList.add('active');
    tabSignup.classList.remove('active');
  } else {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    tabLogin.classList.remove('active');
    tabSignup.classList.add('active');
  }
}
function handleLogin(e) { e.preventDefault(); showToast('تم تسجيل الدخول بنجاح! ✨'); closeAuthModal(); }
function handleSignup(e) { e.preventDefault(); showToast('تم إنشاء الحساب بنجاح! 💖'); closeAuthModal(); }

function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const productImages = (product.images && product.images.length > 0) ? product.images : [product.image];
  let modal = document.getElementById('product-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'modal';
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal" onclick="closeProductModal()">&times;</span>
      <div class="modal-body">
        <div class="modal-gallery">
          <img id="modal-main-img" src="${productImages[0]}" alt="${product.name}">
          <div class="modal-thumbs">
            ${productImages.map(img => `<img src="${img}" onclick="document.getElementById('modal-main-img').src='${img}'">`).join('')}
          </div>
        </div>
        <div class="modal-details">
          <h2>${product.name}</h2>
          <p class="modal-subtext">${product.subText || ''}</p>
          <div class="modal-price">${product.price} ج.م</div>
          <button class="modal-add-btn" onclick="addToCart(null, ${product.id}); closeProductModal();">إضافة إلى السلة 🛍️</button>
        </div>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
}
function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.style.display = 'none';
}

function renderPaginationControls(totalItems) {
  let paginationContainer = document.getElementById('pagination-container');
  if (!paginationContainer) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination-container';
    grid.parentNode.insertBefore(paginationContainer, grid.nextSibling);
  }
  const totalPages = Math.ceil(totalItems / productsPerPage);
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }
  let buttonsHtml = `<button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">السابقة</button>`;
  for (let i = 1; i <= totalPages; i++) {
    buttonsHtml += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }
  buttonsHtml += `<button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">التالية</button>`;
  paginationContainer.innerHTML = buttonsHtml;
}

function goToPage(pageNumber) {
  currentPage = pageNumber;
  renderProducts(filteredProducts);
  const grid = document.getElementById('products-grid');
  if (grid) grid.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof products !== 'undefined') {
    filteredProducts = [...products];
    renderProducts(filteredProducts);
    renderCartItems();
  }
});
// 📱 فتح وإغلاق نافذة إتمام الطلب
function openCheckout() {
  document.getElementById('checkout-modal').style.display = 'flex';
}

function closeCheckout() {
  document.getElementById('checkout-modal').style.display = 'none';
}

// 📩 تحضير وإرسال تفاصيل الطلب على الواتساب
function sendOrderToWhatsApp(event) {
  event.preventDefault();

  const phoneBrand = "201xxxxxxxx"; // ⚠️ غيري الرقم هنا برقم الواتساب الخاص بكِ
  const name = document.getElementById('cust-name').value;
  const phone = document.getElementById('cust-phone').value;
  const address = document.getElementById('cust-address').value;

  // جلب عناصر السلة (تأكدي من مطابقة اسم المتغير عندك cart)
  let cartItemsText = "";
  let totalPrice = 0;

  if (typeof cart !== 'undefined' && cart.length > 0) {
    cart.forEach((item, index) => {
      cartItemsText += `\n${index + 1}. ${item.name || 'منتج'} - ${item.price} ج.م`;
      totalPrice += Number(item.price) || 0;
    });
  } else {
    alert("السلة فارغة!");
    return;
  }

  // صياغة الرسالة الشيك
  const message = `🌸 *طلب جديد من H-STORE* 🌸\n` +
                  `----------------------------\n` +
                  `👤 *بيانات العميل:*\n` +
                  `• الاسم: ${name}\n` +
                  `• الهاتف: ${phone}\n` +
                  `• العنوان: ${address}\n\n` +
                  `🛍️ *المنتجات المطلوبة:*` +
                  `${cartItemsText}\n\n` +
                  `💰 *الإجمالي:* ${totalPrice} ج.م\n` +
                  `----------------------------`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneBrand}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');
  closeCheckout();
}
