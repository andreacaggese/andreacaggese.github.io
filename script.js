// Show / hide abstracts
document.querySelectorAll(".toggle").forEach(function (button) {
  button.addEventListener("click", function () {
    var abstract = button.closest(".paper").querySelector(".abstract");
    var open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    abstract.hidden = open;
  });
});

// Keep the copyright year current
var year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
