"use strict";

const projects = document.querySelector(".contact-link");
const isProjectsPage =
  window.location.pathname === "/projects.html" ||
  window.location.pathname === "/projects" ||
  window.location.pathname.endsWith("/projects.html");

// const lines = document.querySelectorAll(".header div");
// gsap.set(lines, { opacity: 0 });

// timeline.to(lines, {
//   duration: 1,
//   opacity: 1,
//   y: 0,
//   stagger: 0.3,
//   ease: "power2.out",
// });

projects.addEventListener("click", (e) => {
  if (isProjectsPage) {
    e.preventDefault();
    return;
  }
  localStorage.setItem("hasVisited", "true");
});
