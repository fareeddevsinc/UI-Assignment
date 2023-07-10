// Get all the accordion headers
const accordionHeaders = document.querySelectorAll(".accordion-header");
const icon = document.querySelector(".accordion-header i");
// Add click event listener to each header
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // Select the icon within the clicked header
    const icon = header.querySelector("i");
    // Toggle the active class on the clicked accordion item
    header.parentNode.classList.toggle("active");
    icon.classList.toggle("fa-square-plus");
    icon.classList.toggle("fa-square-minus");
    header.style.color = "#007bff";
    // Toggle the accordion content visibility
    const accordionContent = header.nextElementSibling;
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
      header.style.color = "black";
    } else {
      accordionContent.style.display = "block";
    }
  });
});

let activeIndex = 0;

const images = document.querySelectorAll(".carousel__image");
const dots = document.querySelectorAll(".carousel__dot");
const leftIndicator = document.querySelector(".carousel__indicator--left");
const rightIndicator = document.querySelector(".carousel__indicator--right");

const updateCarousel = () => {
  images.forEach((image) => (image.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("carousel__dot--active"));

  images[activeIndex].style.display = "block";
  dots[activeIndex].classList.add("carousel__dot--active");
};

updateCarousel();

leftIndicator.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + images.length) % images.length;
  updateCarousel();
});

rightIndicator.addEventListener("click", () => {
  activeIndex = (activeIndex + 1) % images.length;
  updateCarousel();
});

setInterval(() => {
  activeIndex = (activeIndex + 1) % images.length;
  updateCarousel();
}, 5000);
