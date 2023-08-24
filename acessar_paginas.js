const axios = require('axios');

const token = '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';

const owner = 'vinicius-sperb';
const repo = 'testeActions';
const workflow = 'github-actions-demo.yml';
const ref = 'main';


const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflow}/dispatches`;

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github.v3+json',
};

const data = {
  ref
};

axios.post(url, data, { headers })
  .then(response => {
    console.log('Fluxo de trabalho iniciado com sucesso!', response.data);
  })
  .catch(error => {
    console.error('Erro ao iniciar o fluxo de trabalho:', error.response.data);
  });


