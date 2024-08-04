import { Router } from "express";
import { homeController } from "../controllers/homeController";

const router = Router();

// Define una ruta básica para el endpoint raíz
router.get("/", homeController.getHome);

// Puedes agregar más rutas aquí

export default router;
