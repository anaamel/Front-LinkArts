function enviarEmail() {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Por favor, insira um email válido.");
        return;
    }


    console.log("Email enviado para:", email); 


    document.getElementById('email-section').style.display = 'none';


    document.getElementById('codigo-section').style.display = 'block';


    iniciarContador();
}

function iniciarContador() {
    const btnReenviar = document.querySelector('.resend-button');
    const infoText = document.querySelector('.info-text');
    let segundos = 30;

    const intervalo = setInterval(() => {
        segundos--;
        infoText.textContent = `Disponível para reenvio em ${segundos} segundos...`;

        if (segundos <= 0) {
            clearInterval(intervalo);
            btnReenviar.disabled = false;
            btnReenviar.style.cursor = 'pointer';
            btnReenviar.style.opacity = '1';
            infoText.textContent = "Você pode reenviar o código agora.";
        }
    }, 1000);
}
