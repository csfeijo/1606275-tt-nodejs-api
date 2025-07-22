import { Router } from "express";
import { 
  atualizaDepartamento, 
  excluiDepartamento, 
  insereDepartamento, 
  listaDepartamento, 
  listaDepartamentos 
} from "../controllers/departamentosControllers";

const departamentosRoutes = Router();

departamentosRoutes.get('/departamentos', listaDepartamentos);
departamentosRoutes.get('/departamentos/:id_departamento', listaDepartamento);

departamentosRoutes.post('/departamentos', insereDepartamento);
departamentosRoutes.delete('/departamentos/:id_departamento', excluiDepartamento);

departamentosRoutes.patch('/departamentos/:id_departamento', atualizaDepartamento)


export default departamentosRoutes;
