let miImage = document.querySelector("img");

//Cmabio de imagen al hacer click
miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "images/firefox.png") {
        miImage.setAttribute("src", "images/firefox2.png");
    } else {
        miImage.setAttribute("src", "images/firefox.png");
    }
};

//Mensaje de bienvenida personalizado
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre");  //Declaración de "miNombre" y asignación del valor del cuadro de dialogo
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem("nombre", miNombre);  //almacenamiento en el navegador de "nombre" del valor de "miNombre"
        miTitulo.textContent = "Mozilla es genial, " + miNombre;  //Establecimiento del título con "miNombre"
    }
}

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial, " + nombreAlmacenado;  //Establecimiento del título con "miNombre"
}

miBoton.onclick = function () {
    estableceNombreUsuario();
}