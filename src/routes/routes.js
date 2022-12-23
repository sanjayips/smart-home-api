import express from 'express';
import {
  checkserver,
  getHardwareOnline,
} from '../controllers/registerHardwareControllers.js';
const router = express();

router.post('/hardware/online', getHardwareOnline);
router.get('/checkserver', checkserver);

export default router;
