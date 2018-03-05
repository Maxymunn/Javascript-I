var filter = document.querySelector(".filter-table");

filter.addEventListener("input", function (params) {
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value != "") {
        pacientes.forEach(element => {
            var regexp = new RegExp(this.value, "i");
            if (!regexp.test(element.querySelector(".info-nome").textContent)) {
                element.classList.add("hidden");
            }else{
                element.classList.remove("hidden");
            }
        });
    }else{
        pacientes.forEach(element => {
            element.classList.remove("hidden");
        });
    }
})