(function () {
  // Add the business WhatsApp number in international format, for example: "972501234567".
  const businessWhatsAppNumber = "";
  const phoneForm = document.querySelector("[data-whatsapp-form]");
  const phoneInput = document.querySelector("#inquiry-phone");
  const phoneStatus = document.querySelector("[data-phone-status]");
  const searchForm = document.querySelector("[data-site-search]");
  const searchInput = document.querySelector("#site-search");
  const searchStatus = document.querySelector("#site-search-status");
  const truckVideo = document.querySelector(".truck-divider-video");
  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  const buildWhatsAppUrl = (message) => {
    const encodedMessage = encodeURIComponent(message);

    if (businessWhatsAppNumber) {
      return `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;
    }

    return "";
  };

  const openWhatsApp = (message) => {
    const url = buildWhatsAppUrl(message);

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }

    return Boolean(url);
  };

  const setPhoneStatus = (message, type = "info") => {
    if (!phoneStatus) {
      return;
    }

    phoneStatus.textContent = message;
    phoneStatus.dataset.state = type;
  };

  const saveLocalLead = (phone) => {
    try {
      const leads = JSON.parse(window.localStorage.getItem("tworkLeadRequests") || "[]");
      leads.push({
        phone,
        createdAt: new Date().toISOString()
      });
      window.localStorage.setItem("tworkLeadRequests", JSON.stringify(leads.slice(-50)));
    } catch (error) {
      // Local storage can be disabled in some browsers. The visible message still explains the next step.
    }
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

  const setMenuOpen = (isOpen) => {
    if (!siteHeader || !menuToggle) {
      return;
    }

    siteHeader.classList.toggle("is-nav-open", isOpen);
    mainNav?.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };

  if (menuToggle && siteHeader) {
    menuToggle.addEventListener("click", () => {
      setMenuOpen(!siteHeader.classList.contains("is-nav-open"));
    });
  }

  if (mainNav) {
    mainNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        setMenuOpen(false);
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });

  if (phoneForm && phoneInput) {
    phoneForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const phone = phoneInput.value.trim();

      if (!phone) {
        phoneInput.focus();
        return;
      }

      saveLocalLead(phone);

      const sentToWhatsApp = openWhatsApp(`שלום T-WORK, אשמח להצעת מחיר לבגדי עבודה ממותגים. מספר הטלפון שלי: ${phone}`);

      if (sentToWhatsApp) {
        setPhoneStatus("המספר נשלח בוואטסאפ. נחזור אליכם בהקדם.", "success");
        phoneInput.value = "";
      } else {
        setPhoneStatus("המספר נשמר בדפדפן הזה בלבד. כדי שפניות יגיעו אליכם בפועל, צריך להוסיף את מספר הוואטסאפ העסקי של T-WORK בקוד האתר.", "warning");
      }
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

    const sentToWhatsApp = openWhatsApp(`שלום T-WORK, אשמח להצעת מחיר עבור ${productName} (${productCode}).`);

    if (!sentToWhatsApp) {
      setPhoneStatus("בחרתם מוצר מהקטלוג. הזינו מספר טלפון ונחזור אליכם אחרי שנחבר מספר וואטסאפ עסקי.", "warning");
      scrollToElement(document.querySelector("#phone-capture"));
    }
  });
})();
