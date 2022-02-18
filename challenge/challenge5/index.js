const changeBtn = document.querySelector("button");
const colorList = [
  "yellow",
  "green",
  "red",
  "blue",
  "orange",
  "purple",
  "pink",
  "navy",
  "gray",
];

changeBtn.addEventListener("click", () => {
  const direction = ["to right", "to left"];
  const rand_num_0_to_1 = Math.floor(Math.random() * 2);
  const rand_color_num1 = Math.floor(Math.random() * colorList.length);
  let rand_color_num2 = Math.floor(Math.random() * colorList.length);
  while (rand_color_num1 == rand_color_num2) {
    rand_color_num2 = Math.floor(Math.random() * colorList.length);
  }

  const color1 = colorList[rand_color_num1];
  const color2 = colorList[rand_color_num2];
  console.log(color1);
  console.log(color2);
  document.body.style.background =
    `linear-gradient(${direction[rand_num_0_to_1]},` +
    color1 +
    "," +
    color2 +
    ")";
});
