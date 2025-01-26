"use strict";

const navigation = document.querySelector(".navigation");
const header = document.createElement("div");
const titles = document.querySelectorAll(".title");
const blocks = document.querySelectorAll(".blocks .block");
const container = document.querySelector(".container");
const homeLink = document.querySelector(".home-link");

// Check if we're on the home page
const isHomePage =
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html" ||
  window.location.pathname.endsWith("/index.html");

// Check if this is a page refresh
const lastLoadTime = localStorage.getItem("lastLoadTime");
const currentTime = new Date().getTime();
const isRefresh = lastLoadTime && currentTime - lastLoadTime < 3000; // Within 3 seconds considered a refresh

// Update last load time
localStorage.setItem("lastLoadTime", currentTime);

const shouldPlayAnimation =
  isHomePage && (!localStorage.getItem("hasVisited") || isRefresh);

// Only run animations if we're on home page AND animation hasn't played yet
if (shouldPlayAnimation) {
  document.body.classList.add("initial-load");

  const timeline = gsap.timeline();

  titles.forEach((title) => {
    timeline.from(title, {
      duration: 0.8,
      x: "-60",
      ease: "power3.inOut",
      opacity: 0,
    });

    timeline.to(title, {
      duration: 0.8,
      x: "60",
      ease: "power3.inOut",
      opacity: 0,
    });
  });

  timeline.from(
    blocks,
    {
      duration: 3,
      x: "-1600",
      ease: "expo.inOut",
      stagger: 0.16,
    },
    "-=1.6"
  );

  timeline.to(blocks, {
    duration: 2.6,
    x: "1600",
    ease: "power1.inout",
    stagger: 0.25,
    onComplete: () => {
      createHeaderContent();
      localStorage.setItem("hasVisited", "true");
      document.body.classList.remove("initial-load");
    },
  });
} else {
  navigation.classList.remove("hidden");
  createHeaderContent();
}

// Moved header creation to a separate function
function createHeaderContent() {
  navigation.classList.remove("hidden");

  const headerWrapper = document.createElement("div");
  headerWrapper.className = "header-wrapper";

  header.className = "header";
  header.innerHTML = `
        <div class="first-div">Hi there,</div>
        <div class="second-dev">I'm Chathrapathi Nikhil</div>
        <div class="third-dev">a self taught software developer</div>
        <div class="button-container">
            <button class="btn download-btn">Download Resume</button>
            <button class="btn hello-btn">Say Hi!</button>
        </div>
    `;

  // Add click handler for download
  const downloadBtn = header.querySelector(".download-btn");
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "Chathrapathi_Nikhil_Kandagatla.pdf";
    link.download = "Chathrapathi_Nikhil_Kandagatla.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  const sayhi = header.querySelector(".hello-btn");
  sayhi.addEventListener("click", () => {
    window.location.href = "../contact/contact.html";
  });

  const portfolioimage = document.createElement("img");
  portfolioimage.className = "portfolio-image";
  portfolioimage.src = "Nikhil.png";
  portfolioimage.alt = "My image";

  headerWrapper.appendChild(header);
  headerWrapper.appendChild(portfolioimage);

  container.prepend(headerWrapper);

  const lines = document.querySelectorAll(".header div");
  gsap.set(lines, { opacity: 0 });

  gsap.timeline().to(lines, {
    duration: 1,
    opacity: 1,
    y: 0,
    stagger: 0.3,
    ease: "power2.out",
    onComplete: () => {
      document.querySelector(".header").classList.remove("hidden");
      console.log("Animation complete!");
    },
  });
}
if (homeLink) {
  homeLink.addEventListener("click", (e) => {
    if (isHomePage) {
      e.preventDefault();
      return;
    }
    titles.style.display = "none";
    blocks.style.display = "none";
    // Otherwise, set visited flag and allow navigation
    localStorage.setItem("hasVisited", "true");
  });
}

// if (isHomePage && ) {
//   // Hide animation elements if not on homepage
//   const titles = document.querySelector(".titles");
//   const blocks = document.querySelector(".blocks");
//   if (titles) titles.style.display = "none";
//   if (blocks) blocks.style.display = "none";
// }
