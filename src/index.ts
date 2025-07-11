import express from 'express';
import defaultRoutes from './routes/defaultRoutes';
import departamentosRoutes from './routes/departamentosRoutes';

const app = express();
const porta = 3030;

app.use(defaultRoutes);
app.use(departamentosRoutes);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
})
