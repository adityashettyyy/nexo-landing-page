// Utility: toggle active class in a group
function handleActiveToggle(selector) {
  const elements = document.querySelectorAll(selector);

  if (!elements.length) return;

  elements.forEach((el) => {
    el.addEventListener("click", () => {
      elements.forEach((item) => item.classList.remove("active"));
      el.classList.add("active");
    });
  });
}

// Sidebar navigation
handleActiveToggle(".sidebar-item");

// Period buttons
handleActiveToggle(".period-btn");

// Search input focus effect
const searchInput = document.querySelector(".search-input");
const searchBox = document.querySelector(".search-box");

if (searchInput && searchBox) {
  searchInput.addEventListener("focus", () => {
    searchBox.classList.add("focused");
  });

  searchInput.addEventListener("blur", () => {
    searchBox.classList.remove("focused");
  });
}
