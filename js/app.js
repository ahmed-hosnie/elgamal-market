/**
 * الجمل ماركت - El-Gamal Market | المنطق التفاعلي المتطابق مع واجهة السوبر ماركت 🛒🇪🇬
 * فرع: الخانكة - منطقة الحتة - محافظة القليوبية
 */

// ==================== Configuration & Store Info ====================
const STORE_INFO = {
  name: "الجمل ماركت - El-Gamal Market",
  branch: "الخانكة - منطقة الحتة",
  address: "مدينة الخانكة، منطقة الحتة، محافظة القليوبية 📍",
  phone: "01099887766",
  whatsapp: "201099887766",
  deliveryFee: 15,
  freeDeliveryThreshold: 150,
  deliveryTime: "خلال 30 - 60 دقيقة داخل الخانكة ⚡"
};

// ==================== Departments Configuration (Matching Mockup) ====================
const DEPARTMENTS_MOCKUP = [
  { id: "dairy", name: "الألبان ومنتجاتها", icon: "fas fa-cheese", bg: "#3b82f6", image: "images/juhayna_mix_chocolate_flavoured_milk_200ml.png" },
  { id: "noodles", name: "النودلز وسريعة التحضير", icon: "fas fa-bowl-food", bg: "#f59e0b", image: "images/indomie_special_chicken_noodles_70g.png" },
  { id: "groceries", name: "مستلزمات الطبخ والبيت", icon: "fas fa-utensils", bg: "#8b5cf6", image: "images/el_doha_egyptian_white_rice_1kg.png" },
  { id: "drinks", name: "المشروبات والعصائر", icon: "fas fa-wine-bottle", bg: "#10b981", image: "images/pepsi_can_330ml.png" },
  { id: "sweets", name: "السناكس والحلويات", icon: "fas fa-cookie-bite", bg: "#f97316", image: "images/cadbury_dairy_milk_bubbly_87g.png" },
  { id: "frozen", name: "المجمدات واللحوم", icon: "fas fa-snowflake", bg: "#06b6d4", image: "images/givrex_frozen_minced_molokhia_400g.png" },
  { id: "energy", name: "مشروبات الطاقة", icon: "fas fa-bolt", bg: "#ef4444", image: "images/fury_energy_drink_gold_250ml.png" },
  { id: "egyptian", name: "منتجات مصرية 🇪🇬", icon: "fas fa-flag", bg: "#dc2626", image: "images/chipsy_chili_lemon_10egp.png" }
];

// ==================== Application State ====================
const STATE = {
  selectedCategory: "all",
  selectedBrand: "all",
  egyptianOnly: false,
  minPrice: 0,
  maxPrice: 600,
  sortBy: "default",
  searchQuery: "",
  cart: JSON.parse(localStorage.getItem("elgamal_cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("elgamal_wishlist")) || [],
  selectedSizes: {},
  cardQuantities: {},
  filteredProducts: []
};

// ==================== App Initialization ====================
document.addEventListener("DOMContentLoaded", () => {
  renderDepartments();
  renderSidebarCategories();
  renderSidebarBrands();
  applyFiltersAndSort();
  updateCartUI();
  setupSearchAutocomplete();
});

// ==================== 1. Departments Showcase ====================
function renderDepartments() {
  const container = document.getElementById("departmentsContainer");
  if (!container) return;

  container.innerHTML = DEPARTMENTS_MOCKUP.map(dept => {
    const isActive = STATE.selectedCategory === dept.id;
    return `
      <div class="department-card ${isActive ? 'active' : ''}" onclick="filterByCategory('${dept.id}')">
        <div class="department-thumb-wrap">
          <img src="${dept.image}" alt="${dept.name}" onerror="this.src='images/el_doha_egyptian_white_rice_1kg.png'">
        </div>
        <div class="department-icon-circle" style="background:${dept.bg}">
          <i class="${dept.icon}"></i>
        </div>
        <span class="dept-name">${dept.name}</span>
      </div>
    `;
  }).join("");
}

// ==================== 2. Navigation & Filtering Helpers ====================
function scrollToCatalog(catId = "all") {
  filterByCategory(catId);
}

function renderSidebarCategories() {
  const container = document.getElementById("sidebarCategoryList");
  if (!container || typeof CATEGORIES_DATA === "undefined") return;

  container.innerHTML = CATEGORIES_DATA.map(cat => {
    const isActive = STATE.selectedCategory === cat.id;
    const count = getCategoryCount(cat.id);
    return `
      <div class="filter-choice-row ${isActive ? 'active' : ''}" onclick="filterByCategory('${cat.id}')">
        <div class="choice-label">
          <i class="${cat.icon} ${isActive ? 'text-gold' : ''}"></i>
          <span>${cat.name}</span>
        </div>
        <span class="choice-count-badge">${count}</span>
      </div>
    `;
  }).join("");
}

function getCategoryCount(catId) {
  if (typeof PRODUCTS_DATA === "undefined") return 0;
  if (catId === "all") return PRODUCTS_DATA.length;
  if (catId === "egyptian") return PRODUCTS_DATA.filter(p => p.isEgyptian).length;
  return PRODUCTS_DATA.filter(p => p.category === catId).length;
}

function filterByCategory(catId) {
  STATE.selectedCategory = catId;
  STATE.selectedBrand = "all";
  STATE.searchQuery = "";
  STATE.egyptianOnly = (catId === "egyptian");
  
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  renderDepartments();
  renderSidebarCategories();
  renderSidebarBrands();
  
  const currentCat = CATEGORIES_DATA.find(c => c.id === catId);
  const breadcrumb = document.getElementById("currentCategoryBreadcrumb");
  if (breadcrumb && currentCat) {
    breadcrumb.textContent = currentCat.name;
  }

  applyFiltersAndSort();
  
  const count = STATE.filteredProducts.length;
  showToast(`عرض قسم: ${currentCat ? currentCat.name : catId} (${count} منتج) 🛒`);

  const catalog = document.getElementById("catalogSection");
  if (catalog) {
    catalog.scrollIntoView({ behavior: "smooth" });
  }
}

// ==================== 4. Brands Filtering ====================
function renderSidebarBrands(searchFilter = "") {
  const container = document.getElementById("sidebarBrandList");
  if (!container || typeof PRODUCTS_DATA === "undefined") return;

  const brandCounts = {};
  PRODUCTS_DATA.forEach(p => {
    const b = p.brand || "أخرى";
    brandCounts[b] = (brandCounts[b] || 0) + 1;
  });

  const sortedBrands = Object.keys(brandCounts).sort((a, b) => brandCounts[b] - brandCounts[a]);
  const filteredBrands = sortedBrands.filter(b => b.toLowerCase().includes(searchFilter.toLowerCase()));

  let html = `
    <div class="filter-choice-row ${STATE.selectedBrand === 'all' ? 'active' : ''}" onclick="filterByBrand('all')">
      <div class="choice-label">
        <span>جميع الماركات</span>
      </div>
      <span class="choice-count-badge">${PRODUCTS_DATA.length}</span>
    </div>
  `;

  html += filteredBrands.map(brand => {
    const isActive = STATE.selectedBrand === brand;
    return `
      <div class="filter-choice-row ${isActive ? 'active' : ''}" onclick="filterByBrand('${brand.replace(/'/g, "\\'")}')">
        <div class="choice-label">
          <span>${brand}</span>
        </div>
        <span class="choice-count-badge">${brandCounts[brand]}</span>
      </div>
    `;
  }).join("");

  container.innerHTML = html;
}

function filterBrandsList(query) {
  renderSidebarBrands(query);
}

function filterByBrand(brand) {
  STATE.selectedBrand = brand;
  renderSidebarBrands(document.getElementById("brandSearchInput")?.value || "");
  applyFiltersAndSort();
}

function toggleEgyptianFilter(checked) {
  STATE.egyptianOnly = checked;
  applyFiltersAndSort();
}

function applyPriceFilter() {
  const minVal = parseFloat(document.getElementById("minPriceInput").value) || 0;
  const maxVal = parseFloat(document.getElementById("maxPriceInput").value) || 600;
  STATE.minPrice = minVal;
  STATE.maxPrice = maxVal;
  applyFiltersAndSort();
}

function handleSortChange(sortVal) {
  STATE.sortBy = sortVal;
  applyFiltersAndSort();
}

function resetAllFilters() {
  STATE.selectedCategory = "all";
  STATE.selectedBrand = "all";
  STATE.egyptianOnly = false;
  STATE.minPrice = 0;
  STATE.maxPrice = 600;
  STATE.sortBy = "default";
  STATE.searchQuery = "";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  
  const minInput = document.getElementById("minPriceInput");
  if (minInput) minInput.value = "0";

  const maxInput = document.getElementById("maxPriceInput");
  if (maxInput) maxInput.value = "600";

  const slider = document.getElementById("priceRangeSlider");
  if (slider) slider.value = "600";

  const egCheck = document.getElementById("sidebarEgyptianOnly");
  if (egCheck) egCheck.checked = false;

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "default";

  renderSidebarCategories();
  renderSidebarBrands();
  applyFiltersAndSort();
  showToast("تم تصفير جميع الفلاتر بنجاح 🔄");
}

// ==================== 5. Product Filtering & Sorting ====================
function applyFiltersAndSort() {
  if (typeof PRODUCTS_DATA === "undefined") return;

  let list = [...PRODUCTS_DATA];

  if (STATE.selectedCategory === "egyptian") {
    list = list.filter(p => p.isEgyptian);
  } else if (STATE.selectedCategory !== "all") {
    list = list.filter(p => p.category === STATE.selectedCategory);
  }

  if (STATE.egyptianOnly) {
    list = list.filter(p => p.isEgyptian);
  }

  if (STATE.selectedBrand !== "all") {
    list = list.filter(p => p.brand === STATE.selectedBrand);
  }

  list = list.filter(p => {
    const price = getProductCurrentPrice(p);
    return price >= STATE.minPrice && price <= STATE.maxPrice;
  });

  if (STATE.searchQuery.trim()) {
    const q = STATE.searchQuery.trim().toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      (p.nameEn && p.nameEn.toLowerCase().includes(q)) ||
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      (p.flavor && p.flavor.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }

  if (STATE.sortBy === "price-asc") {
    list.sort((a, b) => getProductCurrentPrice(a) - getProductCurrentPrice(b));
  } else if (STATE.sortBy === "price-desc") {
    list.sort((a, b) => getProductCurrentPrice(b) - getProductCurrentPrice(a));
  } else if (STATE.sortBy === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
  } else if (STATE.sortBy === "rating-desc") {
    list.sort((a, b) => (b.rating || 4.8) - (a.rating || 4.8));
  }

  STATE.filteredProducts = list;
  renderProductsGrid();
  renderActiveFilterTags();
  updateProductsCount();
}

function getProductCurrentPrice(product) {
  const selectedIdx = STATE.selectedSizes[product.id] || 0;
  if (product.sizes && product.sizes[selectedIdx]) {
    return product.sizes[selectedIdx].price;
  }
  return product.price || 10;
}

function updateProductsCount() {
  const display = document.getElementById("productsCountDisplay");
  if (display) {
    display.innerHTML = `عرض <strong>${STATE.filteredProducts.length}</strong> منتج`;
  }
}

function renderActiveFilterTags() {
  const container = document.getElementById("activeFilterTagsContainer");
  if (!container) return;

  const tags = [];
  if (STATE.selectedCategory !== "all") {
    const cat = CATEGORIES_DATA.find(c => c.id === STATE.selectedCategory);
    if (cat) tags.push({ label: `القسم: ${cat.name}`, action: "filterByCategory('all')" });
  }

  if (STATE.selectedBrand !== "all") {
    tags.push({ label: `الماركة: ${STATE.selectedBrand}`, action: "filterByBrand('all')" });
  }

  if (STATE.egyptianOnly) {
    tags.push({ label: "صنع في مصر 🇪🇬", action: "toggleEgyptianFilter(false); document.getElementById('sidebarEgyptianOnly').checked=false;" });
  }

  if (STATE.searchQuery.trim()) {
    tags.push({ label: `بحث: "${STATE.searchQuery}"`, action: "clearSearchInput()" });
  }

  if (tags.length === 0) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = tags.map(t => `
    <div class="filter-chip-tag">
      <span>${t.label}</span>
      <i class="fas fa-times" onclick="${t.action}"></i>
    </div>
  `).join("") + `
    <button class="btn-reset-filters text-sm mr-1" onclick="resetAllFilters()">مسح الكل</button>
  `;
}

// ==================== 6. Product Cards Rendering ====================
function renderProductsGrid() {
  const grid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return;

  if (STATE.filteredProducts.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  grid.innerHTML = STATE.filteredProducts.map(product => {
    const isWishlisted = STATE.wishlist.includes(product.id);
    const selectedSizeIdx = STATE.selectedSizes[product.id] || 0;
    const currentSize = product.sizes && product.sizes[selectedSizeIdx] ? product.sizes[selectedSizeIdx] : null;
    const currentPrice = currentSize ? currentSize.price : product.price;
    const currentWeight = currentSize ? currentSize.weight : (product.weight || "عبوة قياسية");
    const qty = STATE.cardQuantities[product.id] || 1;

    let sizesDropdownHtml = "";
    if (product.sizes && product.sizes.length > 1) {
      sizesDropdownHtml = `
        <div class="size-dropdown-wrapper">
          <select class="super-size-dropdown" onchange="handleProductSizeChange('${product.id}', this.value)">
            ${product.sizes.map((s, idx) => `
              <option value="${idx}" ${idx === selectedSizeIdx ? 'selected' : ''}>
                ${s.name}
              </option>
            `).join("")}
          </select>
        </div>
      `;
    } else {
      sizesDropdownHtml = `
        <div class="size-dropdown-wrapper">
          <span class="consumer-price-tag"><i class="fas fa-box"></i> ${currentWeight}</span>
        </div>
      `;
    }

    return `
      <div class="super-product-card" id="card_${product.id}">
        <div class="card-head-row">
          ${product.isEgyptian ? '<span class="origin-badge-flag"><i class="fas fa-flag"></i> صنع في مصر 🇪🇬</span>' : '<span></span>'}
          <button class="btn-card-heart ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}', event)" title="المفضلة">
            <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
          </button>
        </div>

        <div class="card-product-img-box" onclick="openQuickView('${product.id}')">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='images/farm-frites-pommes-frites-1kg.png'">
        </div>

        <span class="card-brand-label" onclick="filterByBrand('${product.brand.replace(/'/g, "\\'")}')">${product.brand}</span>
        <h4 class="card-item-title" onclick="openQuickView('${product.id}')" title="${product.name}">${product.name}</h4>

        <div class="card-rating-strip">
          <span class="rating-star-box"><i class="fas fa-star"></i> ${product.rating || 4.9}</span>
          <span class="consumer-price-tag">سعر المستهلك 🏷️</span>
        </div>

        ${sizesDropdownHtml}

        <div class="card-bottom-price-row">
          <div class="card-price-value" id="price_display_${product.id}">
            ${currentPrice} <small>ج.م</small>
          </div>
        </div>

        <div class="card-buy-stepper-row">
          <div class="qty-stepper-control">
            <button class="qty-step-btn" onclick="stepCardQty('${product.id}', -1)">-</button>
            <span class="qty-val-display" id="qty_val_${product.id}">${qty}</span>
            <button class="qty-step-btn" onclick="stepCardQty('${product.id}', 1)">+</button>
          </div>
          <button class="btn-card-add-cart" onclick="addToCartFromCard('${product.id}')">
            <i class="fas fa-cart-plus"></i>
            <span>أضف للسلة</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function handleProductSizeChange(productId, sizeIndex) {
  const idx = parseInt(sizeIndex, 10);
  STATE.selectedSizes[productId] = idx;
  
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product || !product.sizes || !product.sizes[idx]) return;

  const newPrice = product.sizes[idx].price;
  const priceEl = document.getElementById(`price_display_${productId}`);
  if (priceEl) {
    priceEl.innerHTML = `${newPrice} <small>ج.م</small>`;
  }
}

function stepCardQty(productId, delta) {
  const current = STATE.cardQuantities[productId] || 1;
  const updated = Math.max(1, current + delta);
  STATE.cardQuantities[productId] = updated;

  const el = document.getElementById(`qty_val_${productId}`);
  if (el) el.textContent = updated;
}

// ==================== 7. Cart Operations ====================
function addToCartFromCard(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const sizeIdx = STATE.selectedSizes[productId] || 0;
  const qty = STATE.cardQuantities[productId] || 1;

  addToCart(productId, sizeIdx, qty);
  STATE.cardQuantities[productId] = 1;
  const el = document.getElementById(`qty_val_${productId}`);
  if (el) el.textContent = 1;
}

function addToCart(productId, sizeIndex = 0, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const sizeObj = product.sizes && product.sizes[sizeIndex] ? product.sizes[sizeIndex] : null;
  const unitPrice = sizeObj ? sizeObj.price : product.price;
  const sizeName = sizeObj ? sizeObj.name : (product.weight || "العبوة القياسية");

  const cartItemId = `${productId}__s_${sizeIndex}`;
  const existing = STATE.cart.find(item => item.cartItemId === cartItemId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    STATE.cart.push({
      cartItemId: cartItemId,
      productId: productId,
      name: product.name,
      image: product.image,
      brand: product.brand,
      sizeIndex: sizeIndex,
      sizeName: sizeName,
      unitPrice: unitPrice,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  openCart();
  showToast(`تمت إضافة "${product.name}" إلى السلة 🛒`);
}

function updateCartItemQty(cartItemId, delta) {
  const item = STATE.cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(cartItemId);
    return;
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(cartItemId) {
  STATE.cart = STATE.cart.filter(i => i.cartItemId !== cartItemId);
  saveCart();
  updateCartUI();
  showToast("تم حذف المنتج من السلة 🗑️");
}

function clearCart() {
  STATE.cart = [];
  saveCart();
  updateCartUI();
  showToast("تم إفراغ سلة المشتريات 🔄");
}

function saveCart() {
  localStorage.setItem("elgamal_cart", JSON.stringify(STATE.cart));
}

function updateCartUI() {
  const totalItems = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const isFreeDelivery = subtotal >= STORE_INFO.freeDeliveryThreshold || subtotal === 0;
  const deliveryFee = isFreeDelivery ? 0 : STORE_INFO.deliveryFee;
  const grandTotal = subtotal + deliveryFee;

  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = totalItems;
  });

  const itemsCountText = document.getElementById("cartItemsCountText");
  if (itemsCountText) itemsCountText.textContent = totalItems;

  const freeFill = document.getElementById("freeDeliveryFill");
  const freeText = document.getElementById("freeDeliveryText");
  if (freeFill && freeText) {
    if (subtotal >= STORE_INFO.freeDeliveryThreshold) {
      freeFill.style.width = "100%";
      freeFill.style.background = "#22c55e";
      freeText.innerHTML = "🎉 مبروك! حصلت على <strong>توصيل مجاني</strong> لطلبك!";
    } else {
      const remaining = STORE_INFO.freeDeliveryThreshold - subtotal;
      const pct = Math.min(100, (subtotal / STORE_INFO.freeDeliveryThreshold) * 100);
      freeFill.style.width = `${pct}%`;
      freeFill.style.background = "var(--gold)";
      freeText.innerHTML = `أضف بـ <strong>${remaining.toFixed(2)} ج.م</strong> إضافية للحصول على توصيل مجاني 🚚`;
    }
  }

  const subtotalEl = document.getElementById("cartSubtotal");
  if (subtotalEl) subtotalEl.textContent = `${subtotal.toFixed(2)} ج.م`;

  const deliveryEl = document.getElementById("cartDelivery");
  if (deliveryEl) {
    deliveryEl.textContent = isFreeDelivery ? "مجاني" : `${STORE_INFO.deliveryFee} ج.م`;
    deliveryEl.className = isFreeDelivery ? "badge-free-delivery" : "font-bold text-slate";
  }

  const totalEl = document.getElementById("cartTotal");
  if (totalEl) totalEl.textContent = `${grandTotal.toFixed(2)} ج.م`;

  const body = document.getElementById("cartItemsBody");
  if (!body) return;

  if (STATE.cart.length === 0) {
    body.innerHTML = `
      <div class="catalog-empty-state" style="padding:2.5rem 1rem;">
        <div class="empty-icon"><i class="fas fa-shopping-bag"></i></div>
        <h3>عربة التسوق فارغة</h3>
        <p>لم تقم بإضافة أي منتجات للسلة بعد.</p>
        <button class="btn-hero-shop mt-3" onclick="closeCart()">تصفح المنتجات الآن</button>
      </div>
    `;
    return;
  }

  body.innerHTML = STATE.cart.map(item => `
    <div class="cart-row-item">
      <img src="${item.image}" alt="${item.name}" class="cart-thumb-img" onerror="this.src='images/farm-frites-pommes-frites-1kg.png'">
      <div class="cart-row-info">
        <h5 class="cart-row-title">${item.name}</h5>
        <span class="cart-row-size">${item.sizeName}</span>
        <div class="cart-price-stepper-flex">
          <span class="cart-row-price">${(item.unitPrice * item.quantity).toFixed(2)} ج.م</span>
          <div class="qty-stepper-control">
            <button class="qty-step-btn" onclick="updateCartItemQty('${item.cartItemId}', -1)">-</button>
            <span class="qty-val-display">${item.quantity}</span>
            <button class="qty-step-btn" onclick="updateCartItemQty('${item.cartItemId}', 1)">+</button>
          </div>
        </div>
      </div>
      <button class="btn-trash-item" onclick="removeFromCart('${item.cartItemId}')" title="حذف">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join("");
}

function openCart() {
  document.getElementById("cartDrawer")?.classList.add("active");
  document.getElementById("cartOverlay")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartDrawer")?.classList.remove("active");
  document.getElementById("cartOverlay")?.classList.remove("active");
  document.body.style.overflow = "";
}

// ==================== 8. Wishlist ====================
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  const idx = STATE.wishlist.indexOf(productId);
  if (idx > -1) {
    STATE.wishlist.splice(idx, 1);
    showToast("تمت إزالة المنتج من المفضلة ❤️");
  } else {
    STATE.wishlist.push(productId);
    showToast("تمت إضافة المنتج إلى المفضلة ❤️");
  }

  localStorage.setItem("elgamal_wishlist", JSON.stringify(STATE.wishlist));
  updateWishlistUI();
  renderProductsGrid();
}

function updateWishlistUI() {
  const count = STATE.wishlist.length;
  document.querySelectorAll(".wishlist-count").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

function showWishlistOnly() {
  if (STATE.wishlist.length === 0) {
    showToast("قائمة المفضلة فارغة حالياً ❤️");
    return;
  }

  STATE.filteredProducts = PRODUCTS_DATA.filter(p => STATE.wishlist.includes(p.id));
  renderProductsGrid();
  updateProductsCount();
  showToast(`عرض ${STATE.filteredProducts.length} منتج من المفضلة ❤️`);
  document.getElementById("catalogSection")?.scrollIntoView({ behavior: "smooth" });
}

// ==================== 9. Quick View ====================
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("quickViewModal");
  const overlay = document.getElementById("quickViewOverlay");
  const body = document.getElementById("quickViewBody");
  if (!modal || !overlay || !body) return;

  const selectedSizeIdx = STATE.selectedSizes[productId] || 0;
  const currentSize = product.sizes && product.sizes[selectedSizeIdx] ? product.sizes[selectedSizeIdx] : null;
  const currentPrice = currentSize ? currentSize.price : product.price;

  let sizeSelectHtml = "";
  if (product.sizes && product.sizes.length > 1) {
    sizeSelectHtml = `
      <div class="form-group-field mt-3">
        <label><strong>اختر الحجم والعبوة:</strong></label>
        <select class="form-input-control" onchange="handleModalSizeChange('${product.id}', this.value)">
          ${product.sizes.map((s, idx) => `
            <option value="${idx}" ${idx === selectedSizeIdx ? 'selected' : ''}>
              ${s.name}
            </option>
          `).join("")}
        </select>
      </div>
    `;
  }

  body.innerHTML = `
    <div class="quick-view-grid-wrap">
      <div>
        <img src="${product.image}" alt="${product.name}" class="quick-view-thumb" onerror="this.src='images/farm-frites-pommes-frites-1kg.png'">
      </div>
      <div>
        <span class="card-brand-label">${product.brand}</span>
        <h3 class="text-xl font-bold mb-2">${product.name}</h3>
        <div class="text-2xl font-bold text-gold mb-2" id="modalPrice">${currentPrice} ج.م</div>
        <p class="text-muted text-sm mb-4">${product.description || ''}</p>
        
        ${sizeSelectHtml}

        <div class="mt-4">
          <button class="btn-hero-shop w-100" onclick="addToCart('${product.id}', STATE.selectedSizes['${product.id}'] || 0, 1); closeQuickView();">
            <i class="fas fa-shopping-bag"></i>
            <span>إضافة إلى سلة المشتريات</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function handleModalSizeChange(productId, sizeIdx) {
  const idx = parseInt(sizeIdx, 10);
  STATE.selectedSizes[productId] = idx;

  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (product && product.sizes && product.sizes[idx]) {
    const el = document.getElementById("modalPrice");
    if (el) el.textContent = `${product.sizes[idx].price} ج.م`;
  }
}

function closeQuickView() {
  document.getElementById("quickViewModal")?.classList.remove("active");
  document.getElementById("quickViewOverlay")?.classList.remove("active");
  document.body.style.overflow = "";
}

// ==================== 10. Location Modal ====================
function openLocationModal() {
  document.getElementById("locationModal")?.classList.add("active");
  document.getElementById("locationOverlay")?.classList.add("active");
}

function closeLocationModal() {
  document.getElementById("locationModal")?.classList.remove("active");
  document.getElementById("locationOverlay")?.classList.remove("active");
}

// ==================== 11. WhatsApp Checkout ====================
function openCheckoutModal() {
  if (STATE.cart.length === 0) {
    showToast("عربة التسوق فارغة! أضف منتجات أولاً 🛒");
    return;
  }

  const modal = document.getElementById("checkoutModal");
  const overlay = document.getElementById("checkoutOverlay");
  if (!modal || !overlay) return;

  const totalItems = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const isFreeDelivery = subtotal >= STORE_INFO.freeDeliveryThreshold;
  const grandTotal = subtotal + (isFreeDelivery ? 0 : STORE_INFO.deliveryFee);

  const countEl = document.getElementById("checkoutItemsCount");
  if (countEl) countEl.textContent = `${totalItems} منتجات`;

  const totalEl = document.getElementById("checkoutTotalAmount");
  if (totalEl) totalEl.textContent = `${grandTotal.toFixed(2)} ج.م`;

  modal.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal")?.classList.remove("active");
  document.getElementById("checkoutOverlay")?.classList.remove("active");
  document.body.style.overflow = "";
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("custName")?.value.trim();
  const phone = document.getElementById("custPhone")?.value.trim();
  const address = document.getElementById("custAddress")?.value.trim();
  const notes = document.getElementById("custNotes")?.value.trim();

  if (!name || !phone || !address) {
    showToast("يرجى ملء الحقول المطلوبة ⚠️");
    return;
  }

  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const isFreeDelivery = subtotal >= STORE_INFO.freeDeliveryThreshold;
  const deliveryFee = isFreeDelivery ? 0 : STORE_INFO.deliveryFee;
  const grandTotal = subtotal + deliveryFee;

  let msg = `🛒 *طلب جديد من متجر الجمل ماركت - الخانكة*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *اسم العميل:* ${name}\n`;
  msg += `📱 *رقم الهاتف:* ${phone}\n`;
  msg += `📍 *العنوان:* ${address}\n`;
  if (notes) {
    msg += `📝 *ملاحظات:* ${notes}\n`;
  }
  msg += `━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📦 *تفاصيل المنتجات المطلوبة:*\n\n`;

  STATE.cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.name}*\n`;
    msg += `   ▫️ الحجم: ${item.sizeName}\n`;
    msg += `   ▫️ الكمية: ${item.quantity} × ${item.unitPrice} ج.م = *${(item.quantity * item.unitPrice).toFixed(2)} ج.م*\n\n`;
  });

  msg += `━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💵 *المجموع الفرعي:* ${subtotal.toFixed(2)} ج.م\n`;
  msg += `🚚 *رسوم التوصيل:* ${isFreeDelivery ? 'مجاني 🎁' : deliveryFee + ' ج.م'}\n`;
  msg += `💰 *الإجمالي المستحق:* *${grandTotal.toFixed(2)} ج.م*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━\n`;
  msg += `⚡ *شكراً لتسوقكم من الجمل ماركت!*`;

  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
  
  window.open(whatsappUrl, "_blank");
  clearCart();
  closeCheckoutModal();
  closeCart();
  showToast("تم إرسال الطلب عبر الواتساب بنجاح! 🚀");
}

// ==================== 12. Search & Autocomplete ====================
function setupSearchAutocomplete() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClearBtn");
  const dropdown = document.getElementById("searchDropdown");
  if (!input || !dropdown) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (clearBtn) clearBtn.style.display = q ? "block" : "none";

    if (!q) {
      dropdown.style.display = "none";
      STATE.searchQuery = "";
      applyFiltersAndSort();
      return;
    }

    STATE.searchQuery = q;
    applyFiltersAndSort();

    const matches = PRODUCTS_DATA.filter(p => 
      p.name.toLowerCase().includes(q) ||
      (p.brand && p.brand.toLowerCase().includes(q))
    ).slice(0, 6);

    if (matches.length === 0) {
      dropdown.innerHTML = `<div style="padding:1rem; text-align:center; color:#64748b;">لا توجد نتائج مطابقة لـ "${q}"</div>`;
      dropdown.style.display = "block";
      return;
    }

    dropdown.innerHTML = matches.map(p => `
      <div class="search-dropdown-row" onclick="selectSearchResult('${p.id}')">
        <img src="${p.image}" alt="${p.name}" class="search-dropdown-thumb" onerror="this.src='images/farm-frites-pommes-frites-1kg.png'">
        <div class="search-dropdown-details">
          <div class="search-dropdown-title">${p.name}</div>
          <div class="search-dropdown-meta">${p.brand} • ${p.weight || ''}</div>
        </div>
        <div class="search-dropdown-price">${p.price} ج.م</div>
      </div>
    `).join("");

    dropdown.style.display = "block";
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", clearSearchInput);
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-search-wrap")) {
      dropdown.style.display = "none";
    }
  });
}

function selectSearchResult(productId) {
  const dropdown = document.getElementById("searchDropdown");
  if (dropdown) dropdown.style.display = "none";
  openQuickView(productId);
}

function clearSearchInput() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClearBtn");
  const dropdown = document.getElementById("searchDropdown");
  if (input) input.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  if (dropdown) dropdown.style.display = "none";
  STATE.searchQuery = "";
  applyFiltersAndSort();
}

function executeSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;
  STATE.searchQuery = input.value.trim();
  applyFiltersAndSort();
  document.getElementById("catalogSection")?.scrollIntoView({ behavior: "smooth" });
}

function rotateHeroSlide(dir) {
  showToast("العرض التالي متاح في التحديث القادم 🌟");
}

// ==================== 13. Mobile Handlers ====================
function toggleMobileFilter(isOpen) {
  const sidebar = document.querySelector(".catalog-filters-sidebar");
  const overlay = document.getElementById("mobileFilterOverlay");
  if (isOpen) {
    sidebar?.classList.add("active");
    overlay?.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    sidebar?.classList.remove("active");
    overlay?.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function scrollToDepartments() {
  document.getElementById("departmentsSection")?.scrollIntoView({ behavior: "smooth" });
}

// ==================== 14. Toast Notification ====================
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "super-toast-item";
  toast.innerHTML = `<i class="fas fa-shopping-cart text-gold"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
