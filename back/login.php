<?php

session_start();

$usuario=$_POST['usuario'];
$contraseña=$_POST['contraseña'];

 if($usuario === "nicole" && $contraseña === "12345")
    {
        session_start();
        $_SESSION['usuario'] = $usuario;
        $_SESSION['contraseña'] = $contraseña;
    }
    else
{
        echo "Incorrecto";
}

?>
