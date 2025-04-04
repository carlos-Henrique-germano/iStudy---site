document.addEventListener("DOMContentLoaded", function () {
    const btnEstatisticas = document.querySelector("button.btn-primary");
    btnEstatisticas.addEventListener("click", carregarEstatisticas);
});

async function carregarEstatisticas() {
    const estatisticasDiv = document.getElementById("estatisticas");
    estatisticasDiv.innerHTML = "<p>Carregando estatísticas...</p>";
    estatisticasDiv.style.display = "block";

    try {
        const response = await fetch("http://localhost:8080/api/estatisticas");
        if (!response.ok) throw new Error("Erro ao buscar estatísticas");

        const data = await response.json();
        estatisticasDiv.innerHTML = `
            <p><strong>Total de questões:</strong> ${data.totalQuestoes}</p>
            <p><strong>Acertos:</strong> ${data.acertos}</p>
            <p><strong>Erros:</strong> ${data.erros}</p>
            <p><strong>Horas de estudo:</strong> ${data.horasEstudo}</p>
        `;
    } catch (error) {
        estatisticasDiv.innerHTML = `<p style="color: red;">Erro ao carregar estatísticas</p>`;
    }
}


