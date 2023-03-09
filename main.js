let iniciar = document.querySelector("#iniciar")
let usuario = "carlos"
let contraseña = "123"
iniciar.addEventListener('click',(e)=>{
    let _usuario = document.querySelector("#nombre")
    let _contraseña = document.querySelector("#contraseña")
    let main = document.querySelector("#main")
    if(_usuario.value == usuario && _contraseña.value == contraseña){
        main.innerHTML = '';
    }
})