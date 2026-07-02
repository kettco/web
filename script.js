/*
  MOAKI - JavaScript principal
  Gestiona carrito, favoritos, buscador y newsletter.
*/

let carrito = [];
let favoritos = [];

// Elementos principales del carrito
const contador = document.getElementById("contador");
const cartButton = document.getElementById("cartButton");
const cartPanel = document.getElementById("cartPanel");
const closeCartButton = document.getElementById("closeCartButton");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// Elementos de búsqueda
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

// Elementos de favoritos
const favoriteButtons = document.querySelectorAll(".favorite-button");
const favoritesButton = document.getElementById("favoritesButton");

// Formulario newsletter
const newsletterForm = document.querySelector(".newsletter-form");

// Abre el panel lateral del carrito
cartButton.addEventListener("click", () => {
  cartPanel.classList.add("open");
});

// Cierra el panel lateral del carrito
closeCartButton.addEventListener("click", () => {
  cartPanel.classList.remove("open");
});

// Añade productos al carrito
document.querySelectorAll(".producto").forEach((producto) => {
  const boton = producto.querySelector(".add-cart-button");
  const nombre = producto.querySelector("h3").innerText;
  const precioTexto = producto.querySelector(".price").innerText;
  const precio = Number(precioTexto.replace("€", "").replace(",", ".").trim());

  boton.addEventListener("click", () => {
    const productoExistente = carrito.find((item) => item.nombre === nombre);

    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      carrito.push({
        nombre: nombre,
        precio: precio,
        cantidad: 1
      });
    }

    actualizarCarrito();
    cartPanel.classList.add("open");
  });
});

// Actualiza contador, lista de productos y total
function actualizarCarrito() {
  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
  const precioTotal = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

  contador.innerText = cantidadTotal;
  cartTotal.innerText = `${precioTotal.toFixed(2).replace(".", ",")} €`;

  if (carrito.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">Tu carrito está vacío.</p>`;
    return;
  }

  cartItems.innerHTML = "";

  carrito.forEach((item, index) => {
    const cartItem = document.createElement("article");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <div>
        <h3>${item.nombre}</h3>
        <p>${item.cantidad} x ${item.precio.toFixed(2).replace(".", ",")} €</p>
      </div>
      <button class="remove-cart-item" aria-label="Eliminar producto">Eliminar</button>
    `;

    cartItem.querySelector(".remove-cart-item").addEventListener("click", () => {
      carrito.splice(index, 1);
      actualizarCarrito();
    });

    cartItems.appendChild(cartItem);
  });
}

// Activa o desactiva favoritos visualmente
favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card");
    const productName = productCard.querySelector("h3").innerText;

    button.classList.toggle("active");

    if (favoritos.includes(productName)) {
      favoritos = favoritos.filter((item) => item !== productName);
      button.innerText = "♡";
    } else {
      favoritos.push(productName);
      button.innerText = "♥";
    }
  });
});

// Muestra cuántos favoritos hay por ahora
favoritesButton.addEventListener("click", () => {
  if (favoritos.length === 0) {
    alert("Todavía no tienes productos favoritos.");
  } else {
    alert(`Tus favoritos:\n\n${favoritos.join("\n")}`);
  }
});

// Buscador de productos
searchInput.addEventListener("input", () => {
  const textoBusqueda = searchInput.value.toLowerCase().trim();

  productCards.forEach((card) => {
    const nombre = card.querySelector("h3").innerText.toLowerCase();
    const categoria = card.dataset.category.toLowerCase();
    const descripcion = card.querySelector(".product-description").innerText.toLowerCase();

    const coincide =
      nombre.includes(textoBusqueda) ||
      categoria.includes(textoBusqueda) ||
      descripcion.includes(textoBusqueda);

    card.style.display = coincide ? "block" : "none";
  });
});

// Lleva al usuario al buscador al pulsar el botón Buscar
searchButton.addEventListener("click", () => {
  searchInput.focus();
  searchInput.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

// Simula suscripción a newsletter
newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = newsletterForm.querySelector("input");
  const email = emailInput.value.trim();

  if (email === "") {
    alert("Por favor, introduce tu email.");
    return;
  }

  alert("Gracias por suscribirte a la newsletter de MOAKI.");
  emailInput.value = "";
});
