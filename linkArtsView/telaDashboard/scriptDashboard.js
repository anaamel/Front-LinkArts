
document.addEventListener("DOMContentLoaded", () => {
    const bellIcon = document.querySelector('.icon-bar img[alt="Notificações"]');
    if (bellIcon) {
        bellIcon.addEventListener('click', () => {
            alert("Você não tem novas notificações.");
        });
    }

    const mailIcon = document.querySelector('.icon-bar img[alt="Mensagens"]');
    if (mailIcon) {
        mailIcon.addEventListener('click', () => {
            alert("Caixa de mensagens vazia.");
        });
    }


const perfis = [
    { nome: 'DJ Ana', tipo: 'Artista', descricao: 'Especialista em música eletrônica.', cor: '#f0f8ff' },
    { nome: 'Bar do Zé', tipo: 'Estabelecimento', descricao: 'Melhor point de samba da cidade.', cor: '#fff0f5' },
    { nome: 'MC Leo', tipo: 'Artista', descricao: 'Referência no funk consciente.', cor: '#f5fffa' },
    { nome: 'Casa do Rock', tipo: 'Estabelecimento', descricao: 'Shows ao vivo toda semana.', cor: '#e6e6fa' }
];

const container = document.getElementById('perfil-container');

perfis.forEach(perfil => {
    const card = document.createElement('div');
    card.classList.add('perfil-card');
    card.style.backgroundColor = perfil.cor;

    card.innerHTML = `
        <h3>${perfil.nome} (${perfil.tipo})</h3>
        <p>${perfil.descricao}</p>
    `;

    container.appendChild(card);
});

});
