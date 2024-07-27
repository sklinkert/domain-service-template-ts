import { Router } from 'express';
import { addBroker, getBrokers } from '../../controllers/BrokerController';

const router = Router();

router.post('/brokers', addBroker);
router.get('/brokers', getBrokers);

export default router;