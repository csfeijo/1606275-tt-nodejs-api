import { Router } from "express";
import { rootReponse, pingReponse, listaDepartamentos } from "../controllers/defaultControllers";

const defaultRoutes = Router();

defaultRoutes.get('/', rootReponse);
defaultRoutes.get('/ping', pingReponse);

defaultRoutes.get('/departamentos', listaDepartamentos);

export default defaultRoutes;

