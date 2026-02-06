// Eminent Prestige - minimal UI helpers
(() => {
  const root = document.documentElement;

  // ===== Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ===== Mobile nav toggle (adds/removes .nav-open on header)
  const navToggle = document.getElementById("nav-toggle");
  const header = document.querySelector(".site-header");
  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      header.classList.toggle("nav-open");
    });
  }

  // ===== Theme toggle (persists to localStorage)
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("ep-theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    root.setAttribute("data-theme", savedTheme);
  }

  const syncThemeBtn = () => {
    if (!themeToggle) return;
    const t = root.getAttribute("data-theme") || "dark";
    themeToggle.textContent = t === "dark" ? " Dark" : " Light";
  };

  if (themeToggle) {
    syncThemeBtn();
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("ep-theme", next);
      syncThemeBtn();
    });
  }

  // ===== Reveal-on-scroll
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && revealEls.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => obs.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
})();
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}
// Reveal on scroll (mobile-safe)
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((el) => io.observe(el));
} else {
  // fallback for old browsers
  reveals.forEach((el) => el.classList.add("in-view"));
}
