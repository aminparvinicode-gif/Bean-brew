document.addEventListener("DOMContentLoaded", () => {
  // ۱. گرفتن المان‌ها از HTML
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("search-input");
  const productsGrid = document.getElementById("products-grid");
  const emptyState = document.getElementById("empty-state");

  // ==========================================
  // شبیه‌سازی لودینگ اولیه (Skeleton)
  // ==========================================
  // ذخیره کردن کارت‌های اصلی برای نمایش بعدی
  const originalCards = Array.from(document.querySelectorAll("#products-grid .cart-product"));
  const originalContent = originalCards.map(card => card.outerHTML);
  
  // ۱. پاک کردن گرید و نمایش اسکلت‌های لودینگ
  productsGrid.innerHTML = '';
  for (let i = 0; i < 4; i++) {
      productsGrid.innerHTML += `
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-coffee-cream dark:border-gray-700">
              <div class="skeleton w-full h-56 rounded-xl mb-4"></div>
              <div class="skeleton h-6 w-3/4 mb-3"></div>
              <div class="skeleton h-4 w-1/2 mb-4"></div>
              <div class="flex justify-between items-center mt-4">
                  <div class="skeleton h-6 w-20"></div>
                  <div class="skeleton h-10 w-10 rounded-full"></div>
              </div>
          </div>
      `;
  }

  // ۲. بعد از ۱.۵ ثانیه، کارت‌های اصلی رو برمی‌گردونیم
  setTimeout(() => {
      productsGrid.innerHTML = originalContent.join('');
      
      // بعد از برگشت کارت‌ها، دوباره به دکمه‌های افزودن به سبد لیسنر می‌دیم (اگر وجود داشته باشن)
      // این کار برای جلسات بعدی که دکمه‌ها فعال میشن لازمه
      const newProductCards = document.querySelectorAll("#products-grid .cart-product");
      
      // چون فعلاً منطق سبد خرید رو جدا کردیم، این بخش خالی می‌مونه
      // اما ساختار برای آینده آماده است.
      
  }, 1500);


  // ==========================================
  // تابع اصلی برای فیلتر کردن
  // ==========================================
  function filterProducts() {
    // پیدا کردن دسته‌بندی فعال
    const activeBtn = document.querySelector(".filter-btn.active");
    const activeCategory = activeBtn ? activeBtn.dataset.category : "all";

    // گرفتن متن جستجو و تبدیل به حروف کوچک
    const searchTerm = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;

    // گرفتن کارت‌های محصول (چون کارت‌ها ممکنه با Skeleton بازسازی بشن، داخل تابع دوباره می‌گیریم)
    const currentProductCards = document.querySelectorAll("#products-grid .cart-product");

    // حلقه روی محصولات
    currentProductCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const cardName = (card.dataset.name || "").toLowerCase();

      // شرط ۱: آیا دسته‌بندی مطابقت دارد؟ (اگر "all" باشه، یعنی همه)
      const matchCategory = activeCategory === "all" || cardCategory === activeCategory;
      
      // شرط ۲: آیا متن جستجو در اسم محصول وجود دارد؟
      const matchSearch = cardName.includes(searchTerm);

      // اگر هر دو شرط درست بود، کارت را نشان بده
      if (matchCategory && matchSearch) {
        card.style.display = "flex"; // چون کارت‌ها flex-col هستند
        visibleCount++;
      } else {
        card.style.display = "none"; // مخفی کن
      }
    });

    // اگر هیچ محصولی پیدا نشد، پیام خالی بودن را نشان بده
    if (visibleCount === 0) {
      emptyState.classList.remove("hidden");
      emptyState.classList.add("flex-col", "items-center", "justify-center");
      productsGrid.classList.add("hidden");
    } else {
      emptyState.classList.add("hidden");
      emptyState.classList.remove("flex-col", "items-center", "justify-center");
      productsGrid.classList.remove("hidden");
    }
  }

  // ==========================================
  // لیسنر برای دکمه‌های فیلتر
  // ==========================================
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // اول کلاس active را از همه دکمه‌ها بردار
      filterButtons.forEach((b) => b.classList.remove("active"));
      // بعد به دکمه‌ای که کلیک شد بده
      btn.classList.add("active");
      // و فیلتر را اجرا کن
      filterProducts();
    });
  });

  // ==========================================
  // لیسنر برای کادر جستجو
  // ==========================================
  searchInput.addEventListener("input", filterProducts);

});