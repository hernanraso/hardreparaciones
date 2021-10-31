var inputs = document.getElementsByClassName('formulario_input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length >=1) {
            this.nextElementSibling.classList.add('fijar');
            
        }   else {
            this.nextElementSibling.classList.remove('fijar');
           
        }
    });
}

function validacion () {
    nom = document.getElementById("nombre").value;
    ape = document.getElementById("apellido").value;
    mail = document.getElementById("email").value;
    tel = document.getElementById("telefono").value;
    expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
    if (nom == null || nom == 0 || ape == null || ape == 0 || mail == null || mail == 0 || tel == null || tel == 0) 
    {
        document.getElementById("Mensaje").innerHTML = "*El campo Nombre es Obligatorio";
        document.getElementById("menape").innerHTML = "*El campo Apellido es Obligatorio";
        document.getElementById("menmail").innerHTML = "*El campo Mail es Obligatorio";
        document.getElementById("mentel").innerHTML = "*El campo Telefono es Obligatorio";
        elemento = document.getElementById("nombre");
        elemento = document.getElementById("apellido");
        elemento = document.getElementById("email");
        elemento = document.getElementById("telefono");
        elemento.focus();
        
        return false;
    }

    else if(!expresion.test(email)) {
        document.getElementById("menmail").innerHTML = "*El Correo no es valido";
        elemento = document.getElementById("email");
        return false;
    }

   

}
