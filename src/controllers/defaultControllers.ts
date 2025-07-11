import { Request, Response } from 'express';
import conexao from '../services/connection';

export const rootReponse = (req: Request, res: Response): void => {
  res.send('Executando a API REST');
}

export const pingReponse = (req: Request, res: Response): void => {
  res.send('Pong');
}

export const listaDepartamentos = async (req: Request, res: Response) => {
  console.log('GET departamentos');

  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS ORDER BY nome');
  res.json(rows);  
}