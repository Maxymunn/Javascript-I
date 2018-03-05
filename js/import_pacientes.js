var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
xhr.send();
xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
        
        var pacientes = JSON.parse(xhr.responseText);
        var table = document.querySelector("#tabela-pacientes");
        pacientes.forEach(element => {
            setInfoPacienteTable(table, element);
        });
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        console.log(xhr.responseURL);
    }
});