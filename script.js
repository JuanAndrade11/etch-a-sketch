const container = document.getElementById("container");

const itemsPerRow = 16;

for (let i = 0; i < itemsPerRow * itemsPerRow; i++){
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.setAttribute(
        "style",
        `width: ${800 / itemsPerRow}px; height: ${800 / itemsPerRow}px`
      );
    container.appendChild(gridElement);
};
