const express = require('express'); // importa o express aqui 
const app = express(); 
const PORT = 3000; 

// middleware 
app.use(express.json());


let tarefas = [];
let proximoId = 1; 

// rota GET: pra listar todas as tarefas
app.get('/tarefas', (req, res) => {
  // retorna a array que eu declarei como JSON
  res.status(200).json(tarefas);
});

// rota POST: pra criar nova tarefa
app.post('/tarefas', (req, res) => {
  const { titulo, descricao, concluida } = req.body; // pega os dados do body
  
  const novaTarefa = {
    id: proximoId++,
    titulo,
    descricao: descricao || '', // vou usar || pra caso n tenha descricao e pra manter os valores de antes //
    concluida: concluida || false
  };
  
  tarefas.push(novaTarefa); // adiciona na array
  res.status(201).json(novaTarefa); // retorna a nova tarefa que criei
});

// rota PUT: pra atualizar tarefa por ID
app.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id); // Pega o ID da URL
  const { titulo, descricao, concluida } = req.body;
  const indice = tarefas.findIndex(t => t.id === id); 
  
  if (indice === -1) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }
  
  // atualiza 
  tarefas[indice].titulo = titulo || tarefas[indice].titulo;
  tarefas[indice].descricao = descricao || tarefas[indice].descricao;
  tarefas[indice].concluida = concluida !== undefined ? concluida : tarefas[indice].concluida;
  
  res.status(200).json(tarefas[indice]); // retorna minha tarefa atualizada
});

// rota DELETE: pra excluir tarefa por ID
app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const indice = tarefas.findIndex(t => t.id === id);
  
  if (indice === -1) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }
  
  tarefas.splice(indice, 1); // remove da array
  res.status(204).send(); 
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
