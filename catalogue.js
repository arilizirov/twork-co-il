(function () {
  const grid = document.querySelector("[data-catalogue-grid]");
  const filters = document.querySelectorAll("[data-category-filter]");
  const count = document.querySelector("[data-product-count]");

  if (!grid || !Array.isArray(window.products)) {
    return;
  }

  const renderProducts = (category) => {
    const visibleProducts = category === "הכל"
      ? window.products
      : window.products.filter((product) => product.category === category);

    grid.innerHTML = visibleProducts
      .map((product) => {
        const sizes = product.sizes
          ? `<span class="catalogue-product-sizes">מידות: ${product.sizes}</span>`
          : "";

        return `
          <article class="catalogue-product-card" id="${product.code}">
            <a href="${product.image}" aria-label="${product.name}">
              <span class="catalogue-product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" />
              </span>
              <span class="catalogue-product-code">${product.code}</span>
              <span class="catalogue-product-name">${product.name}</span>
              <span class="catalogue-product-category">${product.category}</span>
              <span class="catalogue-product-description">${product.description}</span>
              ${sizes}
              <span class="catalogue-product-page">עמוד ${product.page} בקטלוג</span>
            </a>
          </article>
        `;
      })
      .join("");

    if (count) {
      count.textContent = `${visibleProducts.length} מוצרים`;
    }
  };

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((filter) => filter.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.categoryFilter);
    });
  });

  renderProducts("הכל");
})();
