document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    dropdown.addEventListener("click", function () {
      dropdownContent.classList.toggle("show");
    });
  
    dropdownContent.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        const category = event.target.getAttribute("data-category");
        filterImages(category);
      }
    });
  
    function filterImages(category) {
      galleryItems.forEach(function (item) {
        if (category === "all" || item.classList.contains(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
  });
  