document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.purecounter');
  counters.forEach(counter => {
    counter.textContent = counter.textContent.replace(/[٠-٩]/g, function(c) {
      return String.fromCharCode(c.charCodeAt(0) - 1632 + 48);
    });
  });
});
