(function () {
  // Add the business WhatsApp number in international format, for example: "972501234567".
  const businessWhatsAppNumber = "";
  const phoneForm = document.querySelector("[data-whatsapp-form]");
  const phoneInput = document.querySelector("#inquiry-phone");
  const searchForm = document.querySelector("[data-site-search]");
  const searchInput = document.querySelector("#site-search");
  const searchStatus = document.querySelector("#site-search-status");
  const truckVideo = document.querySelector(".truck-divider-video");

  const buildWhatsAppUrl = (message) => {
    const encodedMessage = encodeURIComponent(message);

    if (businessWhatsAppNumber) {
      return `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;
    }

    return `https://wa.me/?text=${encodedMessage}`;
  };

  const openWhatsApp = (message) => {
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const normalizeText = (value) =>
    String(value || "")
      .trim()
      .toLocaleLowerCase("he-IL");

  const setSearchStatus = (message) => {
    if (searchStatus) {
      searchStatus.textContent = message;
    }
  };

  const scrollToElement = (element) => {
    if (!element) {
      return;
    }

    element.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  if (phoneForm && phoneInput) {
    phoneForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const phone = phoneInput.value.trim();

      if (!phone) {
        phoneInput.focus();
        return;
      }

      openWhatsApp(`שלום T-WORK, אשמח להצעת מחיר לבגדי עבודה ממותגים. מספר הטלפון שלי: ${phone}`);
    });
  }

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const query = normalizeText(searchInput.value);
      const products = Array.isArray(window.products) ? window.products : [];

      if (!query) {
        setSearchStatus("מציגים את הקטלוג המלא.");
        scrollToElement(document.querySelector("#catalogue"));
        return;
      }

      const product = products.find((item) =>
        [item.code, item.name, item.category, item.description]
          .map(normalizeText)
          .some((value) => value.includes(query))
      );

      if (product) {
        const productCard = document.getElementById(product.code);
        setSearchStatus(`נמצא מוצר: ${product.name}`);
        document.querySelectorAll(".home-product-card.is-search-hit").forEach((card) => {
          card.classList.remove("is-search-hit");
        });
        productCard?.classList.add("is-search-hit");
        scrollToElement(productCard);
        window.setTimeout(() => {
          productCard?.classList.remove("is-search-hit");
        }, 2500);
        return;
      }

      const section = [...document.querySelectorAll(".home-catalogue-section")].find((item) =>
        normalizeText(item.innerText).includes(query)
      );

      if (section) {
        setSearchStatus("נמצאה קטגוריה תואמת.");
        scrollToElement(section);
        return;
      }

      setSearchStatus("לא נמצאו מוצרים תואמים. אפשר להשאיר מספר ונחזור אליכם.");
      scrollToElement(document.querySelector("#phone-capture"));
    });
  }

  if (truckVideo && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    truckVideo.pause();
    truckVideo.removeAttribute("autoplay");
  }

  document.addEventListener("click", (event) => {
    const inquiryLink = event.target.closest("[data-product-inquiry]");

    if (!inquiryLink) {
      return;
    }

    event.preventDefault();

    const productCode = inquiryLink.dataset.productCode;
    const productName = inquiryLink.dataset.productName;

    if (phoneInput) {
      phoneInput.focus({ preventScroll: true });
    }

    openWhatsApp(`שלום T-WORK, אשמח להצעת מחיר עבור ${productName} (${productCode}).`);
  });
})();
