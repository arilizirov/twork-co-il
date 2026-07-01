(function () {
  const categoryGrids = document.querySelectorAll("[data-category-products]");

  if (!categoryGrids.length || !Array.isArray(window.products)) {
    return;
  }

  const renderProduct = (product) => {
    const sizes = product.sizes
      ? `<span class="home-product-sizes">מידות: ${product.sizes}</span>`
      : "";

    return `
      <article class="home-product-card" id="${product.code}">
        <div class="home-product-card-inner">
          <a class="home-product-image-link" href="${product.image}" aria-label="צפייה בתמונה של ${product.name}">
          <span class="home-product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async" />
          </span>
          </a>
          <span class="home-product-code">${product.code}</span>
          <span class="home-product-category">${product.category}</span>
          <span class="home-product-name">${product.name}</span>
          <span class="home-product-description">${product.description}</span>
          ${sizes}
          <a class="home-product-action" href="#phone-capture" data-product-inquiry data-product-code="${product.code}" data-product-name="${product.name}">בקשת הצעה</a>
        </div>
      </article>
    `;
  };

  categoryGrids.forEach((grid) => {
    const category = grid.dataset.categoryProducts;
    const sectionProducts = window.products.filter((product) => product.category === category);
    const count = document.querySelector(`[data-category-count="${category}"]`);

    grid.innerHTML = sectionProducts.map(renderProduct).join("");

    if (count) {
      count.textContent = `${sectionProducts.length} מוצרים`;
    }
  });

  if (window.location.hash) {
    const section = document.getElementById(window.location.hash.slice(1));

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ block: "start" });
      }, 0);
    }
  }
})();
