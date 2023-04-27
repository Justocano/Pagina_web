$(document).ready(function () {
    $('#fromularioIngresar').validate({
        "rule":{
            "email":{
                "required":true,
                "emial": true,
            },
            "password":{
                "required": true,
            },
        },
        "messages":{
            "email":{
                "required":"el campo es obligaorio",
                "emial": "debe tener '@' para avanzar",
            },
            "password":{
                "required": "Este campor es obligatorio",
            },
        }
    })
});