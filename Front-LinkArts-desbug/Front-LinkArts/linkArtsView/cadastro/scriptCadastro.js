function toggleCadastro(tipo) {
    const cpfField = document.getElementById("cpf-field");
    const cnpjField = document.getElementById("cnpj-field");
    
    if (tipo === "artista") {
        cpfField.style.display = "block";
        cnpjField.style.display = "none";

        welcomeText.innerText = 'Bem-vindo, Artista!';
        welcomeImage.src = '../img/imgArtista.png';
        
        tituloTipoCadastro.innerText = 'Cadastro do Artista';

    } else {
        cpfField.style.display = "none";
        cnpjField.style.display = "block";

        welcomeText.innerText = 'Bem-vinda, Empresa!';
        welcomeImage.src = '../img/imgEmpresa.png';

        tituloTipoCadastro.innerText = 'Cadastro da Empresa';
    }
}
