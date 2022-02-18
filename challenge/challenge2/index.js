window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const fullWidth = 1286;
  const halfWidth = 693;
  let color;
  if (width >= fullWidth) color = "yellow";
  else if (width <= halfWidth) color = "blue";
  else color = "purple";
  document.body.style.backgroundColor = color;
});
