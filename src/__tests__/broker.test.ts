import request from 'supertest';
import { Sequelize } from 'sequelize';
import app from '../app';
import sequelize from '../shared/database/sequelize';
import BrokerModel from '../infrastructure/persistence/BrokerModel';

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('Broker API', () => {
    it('should add a broker', async () => {
        const res = await request(app)
            .post('/api/brokers')
            .send({
                name: 'Test Broker',
                userId: 1,
                credentials: 'test-credentials'
            });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toBe('Test Broker');
    });

    it('should fetch all brokers', async () => {
        await BrokerModel.create({
            name: 'Broker 1',
            userId: 1,
            credentials: 'credentials-1'
        });

        await BrokerModel.create({
            name: 'Broker 2',
            userId: 1,
            credentials: 'credentials-2'
        });

        const res = await request(app).get('/api/brokers');

        expect(res.status).toBe(200);
        expect(res.body.length).toBe(2);
        expect(res.body[0].name).toBe('Broker 1');
        expect(res.body[1].name).toBe('Broker 2');
    });
});