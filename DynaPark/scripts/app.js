document.addEventListener('DOMContentLoaded', () => {
    // Função de validação de login
    document.getElementById('login-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email && password) {
            alert('Login efetuado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Função de validação de registro de usuário
    document.getElementById('register-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const email = document.getElementById('email-registro').value;
        const password = document.getElementById('password-registro').value;
        if (nome && cpf && email && password) {
            alert('Registro realizado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Simulação do pagamento com cartão
    document.getElementById('payment-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Pagamento com cartão realizado com sucesso!');
    });

    // Geração de QR Code para pagamento com PIX
    document.getElementById('gerar-qr')?.addEventListener('click', () => {
        const tipoPix = document.getElementById('tipo-pix').value;
        const chavePix = document.getElementById('chave-pix').value;
        
        if (!tipoPix || !chavePix) {
            alert('Por favor, selecione o tipo de chave PIX e preencha o campo.');
            return;
        }

        // Simulação de um QR Code gerado (poderia ser uma URL real em um caso prático)
        const qrCodeUrl = `https://fake-qrcode.com/${tipoPix}/${chavePix}`;
        const qrCodeImage = document.getElementById('qr-code');
        qrCodeImage.src = qrCodeUrl;

        // Exibir o QR Code
        document.getElementById('qr-code-container').style.display = 'block';
        alert('QR Code gerado com sucesso!');
    });

    // Função para registrar veículo
    document.getElementById('vehicle-form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const marca = document.getElementById('marca').value;
        const modelo = document.getElementById('modelo').value;
        const placa = document.getElementById('placa').value;

        if (marca && modelo && placa) {
            alert('Veículo registrado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
