import { Router } from 'express';
import homeController from './homeController';
// crear instancia
const router = new Router();

// enrutamos
router.get(['/', '/home', '/index'], homeController.homeIndex);

export default router;
