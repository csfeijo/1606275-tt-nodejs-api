import express from 'express';
import defaultRoutes from './routes/defaultRoutes';
import departamentosRoutes from './routes/departamentosRoutes';
import funcionariosRoutes from './routes/funcionariosRoutes';

const app = express();
const porta = 3030;

// Habilitar a APP para receber dados no corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurando para consumo das rotas criadas
app.use(defaultRoutes);
app.use(departamentosRoutes);
app.use(funcionariosRoutes);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
})
