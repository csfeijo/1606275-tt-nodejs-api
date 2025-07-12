import { Request, Response } from 'express';
import conexao from '../services/connection';

export const listaDepartamentos = async (req: Request, res: Response) => {
  console.log('GET departamentos');

  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS ORDER BY nome');
  res.json(rows);  
}

export const insereDepartamento = async (req: Request, res: Response): Promise<void> => {
  const { nome, sigla } = req.body;

  try {
    const [result] = await conexao.execute("INSERT INTO DEPARTAMENTOS (nome, sigla) VALUES (?, ?)", [nome, sigla]);

    res.status(201).json({
      message: 'Departamento criado'
    });

  } catch(e) {
    let message: string;

    switch (e.code) {
      case 'ER_DUP_ENTRY':
        message = 'Registro duplicado';
      break;
      default:
        message = 'Erro interno';
        break;
    }

    res.status(500).json({
      message
    })
  }
}