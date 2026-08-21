(() => {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;
  // Doomsday offline: skip opacity-0 reveal so the full homepage paints.
  nodes.forEach((el) => el.classList.add("is-in"));
})();
