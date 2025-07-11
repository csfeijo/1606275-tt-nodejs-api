import { Router } from "express";
import { rootReponse, pingReponse } from "../controllers/defaultControllers";

const defaultRoutes = Router();

defaultRoutes.get('/', rootReponse);
defaultRoutes.get('/ping', pingReponse);

export default defaultRoutes;
