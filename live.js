const pesquisa = document.getElementById("pesquisa");
const itens = document.querySelectorAll("#lista li");

pesquisa.addEventListener("input", function () {

    const texto = pesquisa.value.toLowerCase();

    itens.forEach(function (item) {

        const nome = item.textContent.toLowerCase();

        if (nome.includes(texto)) {
            item.classList.remove("esconder");
        } else {
            item.classList.add("esconder");
        }

    });

});