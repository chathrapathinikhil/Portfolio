"use strict";

const work = document.querySelector(".contact-link");
const isWorkPage =
  window.location.pathname === "/work.html" ||
  window.location.pathname === "/work" ||
  window.location.pathname.endsWith("/work.html");

// Scroll reveal functionality
const observerOptions = {
  root: null,
  threshold: 0.2, // Increased threshold for better visibility
  rootMargin: "-50px 0px", // Trigger slightly before element enters viewport
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    } else {
      entry.target.classList.remove("reveal"); // Remove class when out of view
    }
  });
}, observerOptions);

// Observe elements
document.addEventListener("DOMContentLoaded", () => {
  // Observe container
  const container = document.querySelector(".container");
  observer.observe(container);

  // Observe timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => {
    observer.observe(item);
  });

  // Observe content icons
  const icons = document.querySelectorAll(".content-icon");
  icons.forEach((icon) => {
    observer.observe(icon);
  });
});

work.addEventListener("click", (e) => {
  if (isWorkPage) {
    e.preventDefault();
    return;
  }
  localStorage.setItem("hasVisited", "true");
});
