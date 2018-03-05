function calcIMC(peso, altura) {
    var imc = peso / (altura * altura)
    return imc.toFixed(2);
}

function validaAltura(altura) {
    if (altura <= 0 || altura >= 3 || altura.length == 0) {
        // console.log("Altura maior que 3 metros ou menor que 0 metros");
        return false;
    } else {
        return true;
    }
}

function validaPeso(peso) {
    if (peso <= 0 || peso >= 600 || peso.length == 0) {
        // console.log("Peso maior que 600kg ou menor que 0kg");
        return false;
    } else {
        return true;
    }
}

function validaNome(nome) {
    if (nome.length == 0) {
        return false;
    }else{
        return true;
    }
}

function validaGordura(gordura) {
    if (gordura.length == 0) {
        return false;
    }else{
        return true;
    }
}

function setError(element) {
    element.classList.add("campo-invalido");
}

function setIMC(pacientes) {
    
    pacientes.forEach(element => {
        var peso = element.querySelector(".info-peso").textContent;
        var altura = element.querySelector(".info-altura").textContent;
        var imc = element.querySelector(".info-imc").textContent;
        var alturaValida = validaAltura(altura);
        var pesoValido = validaPeso(peso);

        if (alturaValida && pesoValido) {
            imc = calcIMC(peso, altura);
            element.querySelector(".info-imc").textContent = imc;
        } else if (!alturaValida && !pesoValido) {
            setError(element)
            element.querySelector(".info-imc").textContent = "Peso e altura inválidos"
        } else if (!alturaValida) {
            setError(element)
            element.querySelector(".info-imc").textContent = "Altura inválida!"
        } else if (!pesoValido) {
            setError(element)
            element.querySelector(".info-imc").textContent = "Peso Inválido!"
        }
    });
}

function validaPaciente(paciente) {

    var erros = [];

    if (!validaAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido!");
    }
    
    if (!validaGordura(paciente.gordura)) {
        erros.push("Gordura inválida!")
    }
    
    if (!validaNome(paciente.nome)) {
        erros.push("Nome inválido!")
    }

    return erros;
}

var mainTitle = document.querySelector('h1');
mainTitle.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

setIMC(pacientes);