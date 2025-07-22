import { Request, Response } from 'express';
import conexao from '../services/connection';
import { ResultSetHeader } from 'mysql2';

export const listaDepartamentos = async (req: Request, res: Response): Promise<void> => {
  console.log('GET departamentos');

  const [rows] = await conexao.query('SELECT * FROM DEPARTAMENTOS ORDER BY nome');
  res.json(rows);  
}

export const listaDepartamento = async (req: Request, res: Response): Promise<void> => {
  const {id_departamento} = req.params;

  const [rows] = await conexao.execute('SELECT * FROM DEPARTAMENTOS WHERE id_departamento = ?', [id_departamento]);
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

export const excluiDepartamento = async (req: Request, res: Response): Promise<void> => {
  const { id_departamento } = req.params;

  try {
    const [result] = await conexao.execute<ResultSetHeader>(
      'DELETE FROM DEPARTAMENTOS WHERE id_departamento = ?',
      [id_departamento]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({
        message: 'Departamento não encontrado'
      });

      return;
    }

    res.json({
      message: 'Departamento excluído',
      id_departamento
    });
    return;

  } catch (e) {
    let message = '';

    switch (e.code) {
      case 'ER_ROW_IS_REFERENCED_2':
        message = 'Departamento possui vínculos e não pode ser excluído';
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

export const atualizaDepartamento = async (req: Request, res: Response): Promise<void> => {
  const { id_departamento } = req.params;
  const { nome, sigla } = req.body;

  try {
    const [result] = await conexao.execute<ResultSetHeader>(
      'UPDATE DEPARTAMENTOS SET nome = ?, sigla = ? WHERE id_departamento = ?',
      [nome, sigla, id_departamento]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({
        message: 'Departamento não encontrado'
      });

      return;
    }

    res.json({
      message: 'Departamento atualizado',
      id_departamento
    });
    return;

  } catch (e) {
    res.status(500).json({
      message: 'Erro interno'
    })
  }

}
