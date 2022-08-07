const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const navbarSlider = document.getElementById("navbar-slider");
const navabarSliderCover = document.querySelector(".navbar-slider-cover");
const featureChangeButton = document.querySelector(".feature-list-button");
const featureList = document.getElementById("features-list");
const companyChangeButton = document.querySelector(".company-list-button");
const companyList = document.getElementById("company-list");

const body = document.querySelector("body");
console.log(companyChangeButton, companyList);
mobileNavToggle.addEventListener("click", () => {
  const navbarVisibility = navbarSlider.getAttribute("data-visibility");
  if (navbarVisibility === "false") {
    navbarSlider.setAttribute("data-visibility", true);
    mobileNavToggle.setAttribute("aria-expanded", true);
    navabarSliderCover.setAttribute("aria-visible", true);
  }
  if (navbarVisibility === "true") {
    navbarSlider.setAttribute("data-visibility", false);
    mobileNavToggle.setAttribute("aria-expanded", false);
    navabarSliderCover.setAttribute("aria-visible", false);
  }
});

featureChangeButton.addEventListener("click", () => {
  const featureListVisibility = featureList.getAttribute("data-visible");
  if (featureListVisibility === "false") {
    featureList.setAttribute("data-visible", true);
    featureChangeButton.setAttribute("aria-expanded", true);
  }
  if (featureListVisibility === "true") {
    featureList.setAttribute("data-visible", false);
    featureChangeButton.setAttribute("aria-expanded", false);
  }
});

companyChangeButton.addEventListener("click", () => {
  const companyListVisibility = companyList.getAttribute("data-visible");
  if (companyListVisibility === "false") {
    companyList.setAttribute("data-visible", true);
    companyChangeButton.setAttribute("aria-expanded", true);
  }
  if (companyListVisibility === "true") {
    companyList.setAttribute("data-visible", false);
    companyChangeButton.setAttribute("aria-expanded", false);
  }
});
