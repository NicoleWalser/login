window.onload = ()=>{


const form = document.querySelector("#loginForm")
form.onsubmit= function(event){
event.preventDefault();
obtenerusuario();
}
 async function obtenerusuario(){
    let url = "http://localhost/ejercicio_login/back/controlador/controlador.php?function=obtenerUsuario";
    const data= new FormData(form)
    try {
        let consulta = await fetch(url, {
            method: "post",
            body: data
        });
        let datos = await consulta.json();
        setLocalstorage(datos);
        console.log('Datos recibidos:', datos);
        
        
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
    }
}
}
function setLocalstorage(usuario){
    usuario= JSON.stringify(usuario);
    localStorage.setItem("usuario", usuario);
}