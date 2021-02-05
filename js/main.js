document.addEventListener("DOMContentLoaded", function (event) {
  let selectedColor;

  const canvas = document.getElementsByClassName("canvas")[0];

  for (let i = 0; i < 10000; i++) {
    const div = document.createElement("div");
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.border = "1px solid black";
    canvas.appendChild(div);
  }

  const palette = document.getElementsByClassName("palette")[0];

  const colorPicker = document.createElement("input");

  colorPicker.setAttribute("type", "color");

  palette.appendChild(colorPicker);

  const button = document.createElement("button");

  button.textContent = "Add Color";

  palette.appendChild(button);

  const colorPalette = document.createElement("div");

  colorPalette.style.margin = "10px";

  palette.appendChild(colorPalette);

  button.addEventListener("click", function (event) {
    const colorDiv = document.createElement("div");
    colorDiv.setAttribute("data-color", colorPicker.value);
    colorDiv.style.backgroundColor = `${colorPicker.value}`;
    colorDiv.classList.add("color-box");
    colorPalette.appendChild(colorDiv);
  });

  colorPalette.addEventListener("click", function (event) {
    if (event.target.hasAttribute("data-color")) {
      Array.from(document.getElementsByClassName("selected")).map((el) =>
        el.classList.remove("selected")
      );

      event.target.classList.add("selected");
      selectedColor = event.target.getAttribute("data-color");
    }
  });

  canvas.addEventListener("mouseover", function (event) {
    console.log(event.target);
    if (event.shiftKey && !!selectedColor) {
      event.target.style.backgroundColor = selectedColor;
    }
  });
});
