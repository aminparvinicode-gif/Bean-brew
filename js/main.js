document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const closeMenuBtn = document.getElementById("close-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuBackdrop = document.getElementById("menu-backdrop");
  const navbar = document.getElementById("navbar");
  const backToTopBtn = document.getElementById("back-to-top");

  function openMenu() {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");

    menuBackdrop.classList.remove("hidden");

    setTimeout(() => {
      menuBackdrop.classList.remove("opacity-0");
      menuBackdrop.classList.add("opacity-100");
    }, 10);
  }

  function closeMenu() {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");

    menuBackdrop.classList.remove("opacity-100");
    menuBackdrop.classList.add("opacity-0");

    setTimeout(() => {
      menuBackdrop.classList.add("hidden");
    }, 300);
  }

  mobileMenuBtn.addEventListener("click", openMenu);
  menuBackdrop.addEventListener("click", closeMenu);
  closeMenuBtn.addEventListener("click", closeMenu);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("shadow-md", "bg-white/50");
      navbar.classList.remove("bg-coffee-cream/50");
    } else {
      navbar.classList.add("bg-coffee-cream/50");
      navbar.classList.remove("shadow-md", "bg-white/50");
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("opacity-0", "invisible");
      backToTopBtn.classList.add("opacity-100", "visible");
    } else {
      backToTopBtn.classList.add("opacity-0", "invisible");
      backToTopBtn.classList.remove("opacity-100", "visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Scroll Reveal

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.20,
    },
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  //Dark Mode

  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById(
    "theme-toggle-light-icon",
  );
  if (themeToggleBtn) {
    themeToggleDarkIcon.classList.remove("hidden");
    themeToggleLightIcon.classList.add("hidden");
    document.documentElement.classList.remove("dark");

    themeToggleBtn.addEventListener("click", () => {
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
      }else {
        document.documentElement.classList.add("dark");
      }
    });
  }
});
