import { Request, Response } from 'express';
import { BrokerService } from '../../application/services/BrokerService';
import { SequelizeBrokerRepository } from '../../infrastructure/orm/SequelizeBrokerRepository';

const brokerRepository = new SequelizeBrokerRepository();
const brokerService = new BrokerService(brokerRepository);

export const addBroker = async (req: Request, res: Response) => {
    try {
        const brokerDTO = req.body;
        const broker = await brokerService.addBroker(brokerDTO);
        res.status(201).json(broker);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add broker' });
    }
};

export const getBrokers = async (req: Request, res: Response) => {
    try {
        const brokers = await brokerService.getAllBrokers();
        res.status(200).json(brokers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch brokers' });
    }
};