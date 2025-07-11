import { Request, Response } from 'express';
import conexao from '../services/connection';

export const listaDepartamentos = async (req: Request, res: Response) => {
  console.log('GET departamentos');

  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS ORDER BY nome');
  res.json(rows);  
}
