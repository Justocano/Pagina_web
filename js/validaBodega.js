$(document).ready(function(){
    $('#formulario6').validate({
        "rules":{
            "cantidad":{
                "required":true,
                "number": true,
            },
        },
        "messages":{
            "cantidad":{
                "required":"El campo es obligaorio",
                "number": "Debe ser numero",
            },
        }
    })
})