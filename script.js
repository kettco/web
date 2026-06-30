const productos = [

{
nombre:"Pienso Premium",
precio:"24,99 €",
imagen:"https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80"
},

{
nombre:"Cama para perro",
precio:"39,99 €",
imagen:"https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80"
},

{
nombre:"Juguete para gato",
precio:"9,99 €",
imagen:"https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80"
},

{
nombre:"Transportín",
precio:"49,99 €",
imagen:"https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80"
}

];

const contenedor=document.querySelector(".productos-grid");

if(contenedor){

productos.forEach(producto=>{

contenedor.innerHTML+=`

<div class="producto">

<img src="${producto.imagen}">

<h3>${producto.nombre}</h3>

<p>${producto.precio}</p>

<button>Añadir al carrito</button>

</div>

`;

});

}
