document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("search-input");
  const productsGrid = document.getElementById("products-grid");
  const productCards = document.querySelectorAll(
    "#products-grid .cart-product",
  );
  const emptyState = document.getElementById("empty-state");

  function filterProducts() {
    const activeBtn = document.querySelector(".filter-btn.active");
    const activeCategory = activeBtn ? activeBtn.dataset.category : "all";

    const searchTerm = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;

    productCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const cardName = (card.dataset.name || "").toLowerCase();

      const matchCategory =
        activeCategory === "all" || cardCategory === activeCategory;

      const matchSearch = cardName.includes(searchTerm);

      if (matchCategory && matchSearch) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

   if (visibleCount === 0) {
  emptyState.classList.remove("hidden");
  productsGrid.classList.add("hidden");
} else {
  emptyState.classList.add("hidden");
  productsGrid.classList.remove("hidden");
}
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");

      filterProducts();
    });
  });

  searchInput.addEventListener("input", filterProducts);
});
