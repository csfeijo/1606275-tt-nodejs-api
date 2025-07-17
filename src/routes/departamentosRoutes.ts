import { Router } from "express";
import { excluiDepartamento, insereDepartamento, listaDepartamentos } from "../controllers/departamentosControllers";

const departamentosRoutes = Router();

departamentosRoutes.get('/departamentos', listaDepartamentos);
departamentosRoutes.post('/departamentos', insereDepartamento);
departamentosRoutes.delete('/departamentos/:id_departamento', excluiDepartamento);



export default departamentosRoutes;
