import express from 'express';
import defaultRoutes from './routes/defaultroutes';

const app = express();
const porta = 3030;

app.use(defaultRoutes);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
})
