// WhatsApp Number configuration (formatted without spaces, +, or dashes)
const WHATSAPP_NUMBER = "6289502051958";

// Build and initialize WhatsApp links dynamically
function initWhatsAppButtons() {
  const buttons = document.querySelectorAll(".js-whatsapp");

  buttons.forEach((button) => {
    const text = button.getAttribute("data-wa-text") || "Halo PickCode House, saya ingin berkonsultasi mengenai website.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    
    button.setAttribute("href", url);
    button.setAttribute("target", "_blank");
    button.setAttribute("rel", "noopener noreferrer");
  });
}

// Mobile Menu toggle with expanded aria states
function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking on a link
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target) && menu.classList.contains("is-open")) {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Sticky header styling on scroll
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  // Run on load and scroll
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
}

// FAQ Accordion with smooth height transitions
function initFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");
    const body = item.querySelector(".faq-body");

    if (!header || !body) return;

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other open FAQ items for a clean accordion experience
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          const otherBody = otherItem.querySelector(".faq-body");
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      // Toggle active class and dynamic height on the clicked item
      item.classList.toggle("active");
      if (!isActive) {
        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        body.style.maxHeight = null;
      }
    });
  });
}

// Scroll progress bar indicator at the top
function initScrollProgressBar() {
  const progressBar = document.getElementById("scrollProgress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
  }, { passive: true });
}

// Subtle parallax scroll effect for background glows
function initScrollParallax() {
  const glowSpheres = document.querySelectorAll(".hero-glow-bg");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    glowSpheres.forEach(sphere => {
      // Moves slower than document scroll
      sphere.style.transform = `translateY(${scrolled * 0.15}px)`;
    });
  }, { passive: true });
}

// Scroll reveal animations using IntersectionObserver with scroll-out resets
function initScrollReveal() {
  const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
  const revealElements = document.querySelectorAll(selectors);
  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "-60px 0px -60px 0px",
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        // Reset only if the element goes below the viewport (scrolling up)
        const rect = entry.target.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          entry.target.classList.remove("active");
        }
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

// Run all initializations on load
document.addEventListener("DOMContentLoaded", () => {
  initWhatsAppButtons();
  initMobileMenu();
  initStickyHeader();
  initFAQAccordion();
  initScrollProgressBar();
  initScrollParallax();
  initScrollReveal();
});
