// Agarro la api key del archivo
import apiKey from "./apikey.js";
const API_KEY = apiKey;

// Guardo el elemento input en una variable
const inputUser = document.querySelector("input");

// Obtengo el valor del input y le mando la url a la funcion llamarAPI()
function obtenerValor() {
  let valorInput = document.querySelector("input").value;
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${valorInput}`;
  llamarAPI(url);
}

// Cuando le doy click al boton buscar se ejecuta la busqueda
const searchButton = document.querySelector("button");
searchButton.addEventListener("click", () => {
  obtenerValor();
  inputUser.value = "";
});

// Cuando se toca la tecla enter se ejecuta la busqueda
inputUser.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    obtenerValor();
    inputUser.value = "";
  }
});

// Hace una consulta a la api y devuelve los valores que obtiene de ella
const llamarAPI = async (url) => {
  const response = await fetch(url, { mode: "cors" });
  const responseJSON = await response.json();
  mostrarGif(responseJSON);
};

// Modifica elementos del DOM para hacer visible para el usuario el gif
const mostrarGif = (response) => {
  const container = document.querySelector(".img-container");
  const img = document.createElement("img");
  container.appendChild(img);
  img.src = response.data.images.original.url;
};
