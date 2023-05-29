$(document).ready(function(){
    $('#formulario2').validate({
        "rules":{
            "correo":{
                "required":true,
                "email": true,
            },
            "contraseña":{
                "required": true,
                "minlength":5,
            },
        },
        "messages":{
            "correo":{
                "required":"El campo es obligaorio",
                "email": "Debe tener '@' para avanzar",
            },
            "contraseña":{
                "required": "Este campo es obligatorio",
                "minlength":"Debe tener minimo 5 caracteres"
            },
        }
    })
})