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
    if (nom == null || nom == 0 || ape == null || ape == 0) 
    {
        document.getElementById("Mensaje").innerHTML = "El campo Nombre es Obligatorio";
        document.getElementById("menape").innerHTML = "El campo Apellido es Obligatorio";
        elemento = document.getElementById("nombre");
        elemento = document.getElementById("apellido");
        elemento.focus();
        
        return false;
    }

    return true;

}
