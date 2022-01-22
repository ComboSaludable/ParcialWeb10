var nFilas = 0;
var editando_fila = false;

function agregarFila(){
    var gusto = document.getElementById("gustos").value;
    if (gusto.length == 0){
        console.log("No se agrega por longitud 0");
    }else{
        nFilas += 1;
        var tabla = document.getElementById("tabla_gustos");
        var fila = tabla.insertRow(-1);
        var cel1 = fila.insertCell(0);
        var cel2 = fila.insertCell(1);
        var cel3 = fila.insertCell(2);
        cel1.innerHTML = "<input class=\"input_tabla\" name=\"gusto"+nFilas.toString()+"\" value=\""+gusto+"\" id=\"gusto"+nFilas.toString()+"\"disabled>";
        cel2.innerHTML = "<input class=\"input_tabla\" name=\"por"+nFilas.toString()+"\" value=\"0\" onkeypress=\"return soloNumeros(event)\" id=\"por"+nFilas.toString()+"\" disabled>";
        cel3.innerHTML = "<div onclick=\"editarFila('gusto"+nFilas.toString()+"', 'por"+nFilas.toString()+"', 'edita"+nFilas.toString()+"')\" class=\"celdaEdicion\" id=\"edita"+nFilas.toString()+"\">Editar</div>";
    }
}

function editarFila(in_g, in_p, l_e){
    if(editando_fila === true){
        alert("Solo se puede editar una línea.");
    }else{
        var input_gusto = document.getElementById(in_g);
        var input_por = document.getElementById(in_p);
        var texto_edita = document.getElementById(l_e);

        texto_edita.style.color = "#888888";
        texto_edita.innerHTML = "En edición";
        input_gusto.disabled = false;
        input_por.disabled = false;
        editando_fila = true;

        document.getElementById("botones_edicion").innerHTML = "            <div id=\"div_aceptar\">Pulse aceptar para guardar los cambios o cancelar para anularlos.<br><button class=\"b_aceptar\" onclick=\"enviarInfo('"+in_g+"', '"+in_p+"')\">Aceptar</button><button class=\"b_cancelar\" onclick=\"cancelarTabla()\">Cancelar</button></div>";
    }
}

function cancelarTabla(){
    document.getElementById("td-tab-gustos").innerHTML = "<table class=\"tab-gustos\" id=\"tabla_gustos\"><tr><td><b>Gusto</b></td><td><b>%</b></td><td><b>Edit</b></td></tr></table>";
    nFilas = 0;
    editando_fila = false;
    document.getElementById("botones_edicion").innerHTML = "";
}

function enviarInfo(in_g, in_p){
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var numero = document.getElementById("numero").value;
    var gusto = document.getElementById(in_g).value;
    var porcentaje = document.getElementById(in_p).value;

    var url = "Info.html?nombre="+nombre+"&correo="+correo+"&numero="+numero+"&gusto="+gusto+"&porcentaje="+porcentaje.toString();
    console.log(url);
    window.location=url;
    console.log("Ok");
}