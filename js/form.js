var btnAdicionar = document.querySelector("#adicionar-paciente");

function getInfoPacienteForm(form) {
    var paciente = {
        nome: form.nome.value.toLowerCase(),
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function setInfoPacienteTable(table, paciente) {
    
    if (validaAltura(paciente.altura) && validaPeso(paciente.peso)) {
        var imc = calcIMC(paciente.peso, paciente.altura);
        paciente.imc = imc;
    } else if (!validaAltura(paciente.altura) && !validaPeso(paciente.peso)) {
        setError(paciente)
        paciente.imc = "peso e altura inválidos"
    } else if (!validaAltura(paciente.altura)) {
        setError(paciente)
        paciente.imc = "altura inválida!"
    } else if (!validaPeso(paciente.peso)) {
        setError(paciente)
        paciente.imc = "peso inválido!"
    }

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(createTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(createTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(createTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(createTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(createTd(paciente.imc, "info-imc"));

    table.appendChild(pacienteTr);
}

function createTd(pacienteValue, classe) {
    var pacienteInfo = document.createElement("td");
    pacienteInfo.textContent = pacienteValue;
    pacienteInfo.classList.add(classe);
    return pacienteInfo;
}

function exibeMsgErro(arrayErros) {
    var ul = document.querySelector(".error>ul");
    ul.innerHTML = "";
    arrayErros.forEach(element => {
        var li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    });
}
btnAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var tablePacientes = document.querySelector("#tabela-pacientes");
    var paciente = getInfoPacienteForm(form);
    var erro = validaPaciente(paciente);
    
    if (erro.length > 0) {
        exibeMsgErro(erro);
        return;
    }
    
    setInfoPacienteTable(tablePacientes, paciente);
    form.reset();
    document.querySelector(".error>ul").innerHTML = "";
});


// clica no botão

// valida os dados
// -adquiri os dados do form
// -true: manda pra tabela;
// -false: exibe a mensagem de erro;