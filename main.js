let iniciar = document.querySelector("#iniciar");
let botonSalir = document.querySelector("#botonSalir");
let botonCliente = document.querySelector("#botonCliente");
let botonPortatil = document.querySelector("#botonPortatil");
let botonCelular = document.querySelector("#botonCelular");

iniciar.addEventListener('click',()=>{
    let _usuario = document.querySelector("#nombre")
    let _contraseña = document.querySelector("#contraseña")
    let login = document.querySelector("#login")
    let contenido = document.querySelector('#contenido')
    let botonSalir = document.querySelector("#botonSalir")
    if(_usuario.value === 'carlos' && _contraseña.value === '123'){
        login.classList.add("ocultar");
        login.classList.remove("ver")
        contenido.classList.add("ver");
        contenido.classList.remove("ocultar")
        botonSalir.classList.remove("ocultar");
        botonSalir.classList.add("ver");
    }
})

botonSalir.addEventListener('click', () =>{

    let login = document.querySelector("#login")
    let contenido = document.querySelector('#contenido')
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
    formularioInicio.reset();
})

botonCliente.addEventListener('click',()=>{
    
    let cliente = document.querySelector("#cliente");
    let portatil = document.querySelector("#portatil");
    let celular = document.querySelector("#celular");
    cliente.classList.add("ver");
    cliente.classList.remove("ocultar");
    portatil.classList.add("ocultar");
    portatil.classList.remove("ver");
    celular.classList.add("ocultar");
    celular.classList.remove("ver");
})

botonPortatil.addEventListener('click',()=>{
    
    let cliente = document.querySelector("#cliente");
    let portatil = document.querySelector("#portatil");
    let celular = document.querySelector("#celular");
    cliente.classList.add("ocultar");
    cliente.classList.remove("ver");
    portatil.classList.add("ver");
    portatil.classList.remove("ocultar");
    celular.classList.add("ocultar");
    celular.classList.remove("ver");

})

botonCelular.addEventListener('click',()=>{
    
    let cliente = document.querySelector("#cliente");
    let portatil = document.querySelector("#portatil");
    let celular = document.querySelector("#celular");
    cliente.classList.add("ocultar");
    cliente.classList.remove("ver");
    portatil.classList.add("ocultar");
    portatil.classList.remove("ver");
    celular.classList.add("ver");
    celular.classList.remove("ocultar"); 
})

