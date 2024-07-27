import { Router } from 'express';
import { addBroker } from '../../controllers/BrokerController';

const router = Router();

router.post('/brokers', addBroker);

export default router;