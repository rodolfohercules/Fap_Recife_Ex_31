const express = require('express');
const app = express();
const port = 5000;

// Rota GET que retorna uma mensagem JSON
app.get('/mensagem', (req, res) => {
    const mensagem = { mensagem: 'Esta é uma mensagem para testar a atividade.' };
    res.json(mensagem);
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});
