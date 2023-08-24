const axios = require('axios');

// Defina o token de acesso pessoal (gerado no GitHub)
const token = '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';

// Defina as informações do repositório e do fluxo de trabalho
const owner = 'vinicius-sperb';
const repo = 'testeActions';
const workflow = 'github-actions-demo.yml';
const ref = 'main';

// Defina quaisquer parâmetros opcionais que o fluxo de trabalho possa requerer
const inputs = {
  parametro: 'valor',
};

// Construa a URL da API para iniciar o fluxo de trabalho manualmente
const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflow}/dispatches`;

// Crie o cabeçalho da requisição com o token de acesso
const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github.v3+json',
};

// Corpo da requisição
const data = {
  ref,
};

// Faça a requisição POST para iniciar o fluxo de trabalho manualmente
axios.post(url, data, { headers })
  .then(response => {
    console.log('Fluxo de trabalho iniciado com sucesso!', response.data);
  })
  .catch(error => {
    console.error('Erro ao iniciar o fluxo de trabalho:', error.response.data);
  });