//usuario carlos
//contraseña 123

let iniciar = document.querySelector("#iniciar");
let botonSalir = document.querySelector("#botonSalir");
let botonCliente = document.querySelector("#botonCliente");
let botonPortatil = document.querySelector("#botonPortatil");
let botonCelular = document.querySelector("#botonCelular");
let ingresarCliente = document.querySelector("#btnCliente");
let ingresarCelular = document.querySelector("#btnCelular");
let ingresarPortatil = document.querySelector("#btnPortatil");
let card_clientes = document.querySelector("#card-clientes");
let card_celular = document.querySelector("#card-celulares");
let card_Portatil = document.querySelector("#card-portatiles");

iniciar.addEventListener('click', () => {
    let _usuario = document.querySelector("#nombre")
    let _contraseña = document.querySelector("#contraseña")
    let login = document.querySelector("#login")
    let contenido = document.querySelector('#contenido')
    let botonSalir = document.querySelector("#botonSalir")
    let mensajeError = document.querySelector("#mensaje")
    if (_usuario.value === 'carlos' && _contraseña.value === '123') {
        login.classList.add("ocultar");
        login.classList.remove("ver")
        contenido.classList.add("ver");
        contenido.classList.remove("ocultar")
        botonSalir.classList.remove("ocultar");
        botonSalir.classList.add("ver");
    }
    else{
        let mensaje = "Usuario o contraseña invalida";
        mensajeError.innerHTML = mensaje
    }
})

botonSalir.addEventListener('click', () => {

    let login = document.querySelector("#login")
    let contenido = document.querySelector('#contenido')
    let mensajeError = document.querySelector("#mensaje")
    login.classList.add("ver");
    login.classList.remove("ocultar")
    contenido.classList.add("ocultar");
    contenido.classList.remove("ver")
    botonSalir.classList.remove("ver");
    botonSalir.classList.add("ocultar");
    cliente.classList.add("ocultar");
    cliente.classList.remove("ver");
    portatil.classList.add("ocultar");
    portatil.classList.remove("ver");
    celular.classList.add("ocultar");
    celular.classList.remove("ver");
    card_clientes.classList.remove("ver");
    card_clientes.classList.add("ocultar");
    card_celular.classList.add("ocultar");
    card_celular.classList.remove("ver");
    card_Portatil.classList.add("ocultar");
    card_Portatil.classList.remove("ver");
    formularioInicio.reset();
    mensajeError.innerHTML = "";
    
})

botonCliente.addEventListener('click', () => {

    let cliente = document.querySelector("#cliente");
    let portatil = document.querySelector("#portatil");
    let celular = document.querySelector("#celular");
    cliente.classList.add("ver");
    cliente.classList.remove("ocultar");
    portatil.classList.add("ocultar");
    portatil.classList.remove("ver");
    celular.classList.add("ocultar");
    celular.classList.remove("ver");
    card_clientes.classList.remove("ver");
    card_clientes.classList.add("ocultar");
    card_celular.classList.add("ocultar");
    card_celular.classList.remove("ver");
    card_Portatil.classList.add("ocultar");
    card_Portatil.classList.remove("ver");
    formularioCliente.reset();
    
})

botonPortatil.addEventListener('click', () => {

    let cliente = document.querySelector("#cliente");
    let portatil = document.querySelector("#portatil");
    let celular = document.querySelector("#celular");
    cliente.classList.add("ocultar");
    cliente.classList.remove("ver");
    portatil.classList.add("ver");
    portatil.classList.remove("ocultar");
    celular.classList.add("ocultar");
    celular.classList.remove("ver");
    card_clientes.classList.remove("ver");
    card_clientes.classList.add("ocultar");
    card_celular.classList.add("ocultar");
    card_celular.classList.remove("ver");
    card_Portatil.classList.add("ocultar");
    card_Portatil.classList.remove("ver");
    formularioPortatil.reset();

})

botonCelular.addEventListener('click', () => {

    let cliente = document.querySelector("#cliente");
    let portatil = document.querySelector("#portatil");
    let celular = document.querySelector("#celular");
    cliente.classList.add("ocultar");
    cliente.classList.remove("ver");
    portatil.classList.add("ocultar");
    portatil.classList.remove("ver");
    celular.classList.add("ver");
    celular.classList.remove("ocultar");
    card_clientes.classList.remove("ver");
    card_clientes.classList.add("ocultar");
    card_celular.classList.add("ocultar");
    card_celular.classList.remove("ver");
    card_Portatil.classList.add("ocultar");
    card_Portatil.classList.remove("ver");
    formularioCelular.reset();
})


ingresarCliente.addEventListener('click', () => {

    let nombreCliente = document.querySelector("#nombreCliente");
    let documento = document.querySelector("#documento");
    let incelular = document.querySelector("#incelular");
    let direccion = document.querySelector("#direccion");
    let correo = document.querySelector("#correo");
    let seccionClientes = document.querySelector("#card-clientes");

    cliente.classList.add("ocultar");
    cliente.classList.remove("ver");

    let inforcard =

    `
        <img src="img/user.png" width="auto" height="150px">
        
        <h1 class="titulo">${nombreCliente.value}</h1>
        <section class="container-interno">

            <section class="info">
                    <h2>Documento</h2>
                    <h1>${documento.value}</h1>
            </section>
            <section class="info">
                    <h2>Celular</h2>
                    <h1>${incelular.value}</h1>
            </section>
            <section class="info">
                    <h2>Direccion</h2>
                    <h1>${direccion.value}</h1>
            </section>
                <section class="info">
                    <h2>Correo</h2>
                <h1>${correo.value}</h1>
            </section>
        </section>
  
    `;
    seccionClientes.innerHTML = inforcard;
    seccionClientes.classList.add("ver");
    seccionClientes.classList.remove("ocultar");
})

ingresarCelular.addEventListener('click', () =>{
    let nombreCelular = document.querySelector("#nombreCelular");
    let referenciaCelular = document.querySelector("#referenciaCelular");
    let codigoCelular = document.querySelector("#codigoCelular");
    let valorCelular = document.querySelector("#valorCelular");
    let cantidadCelular = document.querySelector("#cantidadCelular");
    let imagenCelular = document.querySelector("#imagenCelular");
    let seccionCelular = document.querySelector("#card-celulares");

    celular.classList.add("ocultar");
    celular.classList.remove("ver");

    let inforcardCel = 
    `
            <img src="${imagenCelular.value}" width="auto" height="150px"> 
            
            <h1 class="titulo">${nombreCelular.value}</h1>
            <section class="container-interno">

                <section class="info">
                        <h2>Referencia</h2>
                        <h1>${referenciaCelular.value}</h1>
                </section>
                <section class="info">
                        <h2>codigo Celular</h2>
                        <h1>${codigoCelular.value}</h1>
                </section>
                <section class="info">
                        <h2>Valor</h2>
                        <h1>${valorCelular.value}</h1>
                </section>
                    <section class="info">
                        <h2>Cantidad</h2>
                        <h1>${cantidadCelular.value}</h1>
                </section>
            </section>

    `;
    seccionCelular.innerHTML = inforcardCel;
    seccionCelular.classList.add("ver");
    seccionCelular.classList.remove("ocultar");
})

ingresarPortatil.addEventListener('click', () =>{
    let nombrePortatil = document.querySelector("#nombrePortatil");
    let referenciaPortatil = document.querySelector("#referenciaPortatil");
    let codigoPortatil = document.querySelector("#codigoPortatil");
    let valorPortatil = document.querySelector("#valorPortatil");
    let cantidadPortatil = document.querySelector("#cantidadPortatil");
    let imagenPortatil = document.querySelector("#imagenPortatil");
    let seccionPortatil = document.querySelector("#card-portatiles");

    portatil.classList.add("ocultar");
    portatil.classList.remove("ver");

    let infocardPort = 
    `
            <img src="${imagenPortatil.value}" width="auto" height="150px"> 
            
            <h1 class="titulo">${nombrePortatil.value}</h1>
            <section class="container-interno">

                <section class="info">
                        <h2>Referencia</h2>
                        <h1>${referenciaPortatil.value}</h1>
                </section>
                <section class="info">
                        <h2>Codigo portatil</h2>
                        <h1>${codigoPortatil.value}</h1>
                </section>
                <section class="info">
                        <h2>Valor</h2>
                        <h1>${valorPortatil.value}</h1>
                </section>
                    <section class="info">
                        <h2>Cantidad</h2>
                        <h1>${cantidadPortatil.value}</h1>
                </section>
            </section>

    `;
    seccionPortatil.innerHTML = infocardPort;
    seccionPortatil.classList.add("ver");
    seccionPortatil.classList.remove("ocultar");
})



