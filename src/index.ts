import express, { Request, Response } from 'express';

const app = express();
const porta = 3030;

app.get('/', (req: Request, res: Response): void => {
  res.send('Executando a NODE JS API REST');
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
})
