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

// Count clicks on papers, appendices, syllabi and the CV in GoatCounter
// (shows up in the dashboard as e.g. "Paper: Climate Change, Firms, and Aggregate Productivity")
document.addEventListener("click", function (event) {
  var link = event.target.closest(".paper-actions a, .cv-link, .course a");
  if (!link || !window.goatcounter || !window.goatcounter.count) return;
  var item = link.closest(".paper, .course");
  var heading = item ? item.querySelector("h3") : null;
  var label = heading && !heading.contains(link)
    ? link.textContent.trim() + ": " + heading.textContent.trim()
    : link.textContent.trim();
  window.goatcounter.count({ path: label, title: label, event: true });
});
