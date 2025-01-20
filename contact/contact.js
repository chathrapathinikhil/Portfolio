"use strict";

const contact = document.querySelector(".contact-link");
const isContactPage =
  window.location.pathname === "/contact.html" ||
  window.location.pathname === "/contact" ||
  window.location.pathname.endsWith("/contact.html");

// const lines = document.querySelectorAll(".header div");
// gsap.set(lines, { opacity: 0 });

// timeline.to(lines, {
//   duration: 1,
//   opacity: 1,
//   y: 0,
//   stagger: 0.3,
//   ease: "power2.out",
// });

contact.addEventListener("click", (e) => {
  if (isContactPage) {
    e.preventDefault();
    return;
  }
  localStorage.setItem("hasVisited", "true");
});
