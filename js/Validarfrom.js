$(document).ready(function(){
    $.validator.addMethod("rutChileno", function(value, element) {
    value = value.replace(/[.-]/g, "");
    if (value.length < 8 || value.length > 9) {
        return false;
    }
    var validChars = "0123456789K";
    var lastChar = value.charAt(value.length - 1).toUpperCase();
    if (validChars.indexOf(lastChar) == -1) {
        return false;
    }
    var rut = parseInt(value.slice(0, -1), 10);
    var factor = 2;
    var sum = 0;
    var digit;
    while (rut > 0) {
        digit = rut % 10;
      sum += digit * factor;
        rut = Math.floor(rut / 10);
        factor = factor === 7 ? 2 : factor + 1;
    }
    var dv = 11 - (sum % 11);
    dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
    return dv === lastChar;
    }, "Por favor ingrese un RUT válido.");
    $('#formulario').validate({
        "rule":{
            "emial":{
                "required":true,
                "emial": true,
            },
            "password":{
                "required": true,
                "minlength":true,
            },
            "repetircontraseña":{
                "required": true,
                "equalTo":"#contraseña",
            },
            "nombres":{
                "required": true,
                "text": true,
            },
            "rut":{
                "required": true,
                "text": true,
            },
            "apellidos":{
                "required": true,
                "text": true,
            },
            "suscripcion":{
                "required": true,
            }
        },
        "messages":{
            "correo":{
                "required":"el campo es obligaorio",
                "emial": "debe tener '@' para avanzar",
            },
            "contraseña":{
                "required": "Este campor es obligatorio",
                "minlength":"debe tener minimo 5 letras ",
            },
            "repetircontraseña":{
                "required": "Este campo es obligatorio",
                "equalTo":"Debe ser igual al campo contraseña",
            },
            "nombres":{
                "required": "Este campo es obligatorio",
                "text": "Tiene que ser texto",
            },
            "rut":{
                "required": "Este campo es obligatorio",
                "text": "Tiene que ser texto",
            },
            "apellidos":{
                "required": "Este campo es obligatorio",
                "text": "Tiene que ser texto",
            },
            "suscripcion":{
                "required": "Este campo es obligatorio",
            }
        }
    })
});