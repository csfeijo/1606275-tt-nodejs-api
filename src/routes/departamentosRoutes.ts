import { Router } from "express";
import { excluiDepartamento, insereDepartamento, listaDepartamento, listaDepartamentos } from "../controllers/departamentosControllers";

const departamentosRoutes = Router();

departamentosRoutes.get('/departamentos', listaDepartamentos);
departamentosRoutes.get('/departamentos/:id_departamento', listaDepartamento);

departamentosRoutes.post('/departamentos', insereDepartamento);
departamentosRoutes.delete('/departamentos/:id_departamento', excluiDepartamento);


export default departamentosRoutes;
