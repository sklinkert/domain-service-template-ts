import express from 'express';
import brokerRoutes from './interfaces/http/routes/BrokerRoutes';

const app = express();

app.use(express.json());
app.use('/api', brokerRoutes);

export default app;