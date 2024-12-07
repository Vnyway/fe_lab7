export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
export const el1Click = () => {
  const element = document.getElementById("el1");
  element.style.color = getRandomColor();
  element.style.backgroundColor = getRandomColor();
};
export const el2Click = () => {
  const element = document.querySelector(".el2");
  element.style.color = getRandomColor();
  element.style.backgroundColor = getRandomColor();
};
export const addImg = () => {
  const imagesDiv = document.getElementById("images");
  const newLink = document.createElement("a");
  newLink.href =
    "https://mista.ua/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/%D0%A5%D0%BC%D1%96%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD/%D0%9A%D0%BE%D0%B7%D1%8F%D1%82%D0%B8%D0%BD";
  newLink.id = "image";
  const newImage = document.createElement("img");
  newImage.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/%D0%97%D0%B0%D0%BB%D1%96%D0%B7%D0%BD%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB_P1740495_%D0%9A%D0%BE%D0%B7%D1%8F%D1%82%D0%B8%D0%BD.jpg/435px-%D0%97%D0%B0%D0%BB%D1%96%D0%B7%D0%BD%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D0%B2%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB_P1740495_%D0%9A%D0%BE%D0%B7%D1%8F%D1%82%D0%B8%D0%BD.jpg";
  newImage.alt = "Козятин";
  newImage.style.width = "600px";
  newLink.appendChild(newImage);
  imagesDiv.appendChild(newLink);
};
export const increaseImg = () => {
  const imagesDiv = document.getElementById("images");
  const images = imagesDiv.getElementsByTagName("img");
  if (images.length > 0) {
    const lastImage = images[images.length - 1];
    const currentWidth = parseInt(window.getComputedStyle(lastImage).width);
    const currentHeight = parseInt(window.getComputedStyle(lastImage).height);
    lastImage.style.width = `${currentWidth + 100}px`;
    lastImage.style.height = `${currentHeight + 100}px`;
  } else {
    alert("There are no images left");
  }
};
export const decreaseImg = () => {
  const imagesDiv = document.getElementById("images");
  const images = imagesDiv.getElementsByTagName("img");
  if (images.length > 0) {
    const lastImage = images[images.length - 1];
    const currentWidth = parseInt(window.getComputedStyle(lastImage).width);
    const currentHeight = parseInt(window.getComputedStyle(lastImage).height);
    lastImage.style.width = `${currentWidth - 100}px`;
    lastImage.style.height = `${currentHeight - 100}px`;
  } else {
    alert("There are no images left");
  }
};
export const deleteImg = () => {
  const imagesDiv = document.getElementById("images");
  const images = imagesDiv.getElementsByTagName("a");
  if (images.length > 0) {
    const lastImage = images[images.length - 1];
    imagesDiv.removeChild(lastImage);
  } else {
    alert("There are no images left.");
  }
};
