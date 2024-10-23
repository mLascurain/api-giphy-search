import apiKey from "./apikey.js";
const API_KEY = apiKey;
function obtenerValor() {
  let valorInput = document.querySelector("input").value;
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${valorInput}`;
  llamarAPI(url);
}

const searchButton = document.querySelector("button");
searchButton.addEventListener("click", () => {
  obtenerValor();
});

const llamarAPI = (url) => {
  fetch(url, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      mostrarGif(response);
    });
};

const mostrarGif = (response) => {
  const container = document.querySelector(".img-container");
  const img = document.createElement("img");
  container.appendChild(img);
  img.src = response.data.images.original.url;
};
