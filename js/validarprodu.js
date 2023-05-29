$(document).ready(function () {
    $('#formulario3').validate({
        "rules": {
            "id": {
                "required": true,
                "number":true,
            },
            "nombre": {
                "required": true,
            },
            "descripcion": {
                "required": true,
            },
            "precio": {
                "required": true,
                "number":true,
            },
            "desc-subscriptor": {
                "required": true,
                "number":true,
            },
            "desc-oferta": {
                "required": true,
                "number":true,
            },
            "direccion": {
                "required": true,
            },
        },
        "messages": {
            "id": {
                "required": "Este campo es requerido",
                "number":"Debe ser un numero",
            },
            "nombre": {
                "required": "Este campo es requerido",
            },
            "descripcion": {
                "required": "Este campo es requerido",
            },
            "precio": {
                "required": "Este campo es requerido",
                "number":"Debe ser un numero",
            },
            "desc-subscriptor": {
                "required": "Este campo es requerido",
                "number":"Debe ser un numero",
            },
            "desc-oferta": {
                "required": "Este campo es requerido",
                "number":"Debe ser un numero",
            },
            "direccion": {
                "required": "Este campo es requerido",
            },
        }
    })
});