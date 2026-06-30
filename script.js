const productos=[

{

nombre:"Pienso Premium Perro",

precio:"34,99€",

imagen:"https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=900&q=80"

},

{

nombre:"Cama Luxury",

precio:"59,99€",

imagen:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80"

},

{

nombre:"Juguete Natural",

precio:"14,99€",

imagen:"https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80"

},

{

nombre:"Transportín Premium",

precio:"79,99€",

imagen:"https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80"

},

{

nombre:"Rascador Deluxe",

precio:"89,99€",

imagen:"https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=80"

},

{

nombre:"Fuente Inteligente",

precio:"49,99€",

imagen:"https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80"

}

];

const contenedor=document.querySelector(".productos-grid");

contenedor.innerHTML="";

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
