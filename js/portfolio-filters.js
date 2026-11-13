/* Accessible category filters for the portfolio projects section */
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("[data-project-filter]");
  const projectCards = document.querySelectorAll("[data-project-category]");
  const status = document.getElementById("project-filter-status");

  if (!filterButtons.length || !projectCards.length) return;

  function applyProjectFilter(selectedFilter) {
    let visibleCount = 0;

    projectCards.forEach(function (card) {
      const matches = selectedFilter === "all" ||
        card.dataset.projectCategory === selectedFilter;

      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    filterButtons.forEach(function (button) {
      const isActive = button.dataset.projectFilter === selectedFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (status) {
      const label = selectedFilter === "all"
        ? "projects and planned builds"
        : selectedFilter === "analyst"
          ? "Data Analyst projects"
          : selectedFilter === "scientist"
            ? "Data Science builds"
            : "AI Engineering builds";

      status.textContent = "Showing " + visibleCount + " " + label;
    }
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyProjectFilter(button.dataset.projectFilter);
    });
  });

  applyProjectFilter("all");
});
