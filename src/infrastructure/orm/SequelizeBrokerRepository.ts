import { IBrokerRepository } from '../../domain/repositories/IBrokerRepository';
import { Broker } from '../../domain/entities/Broker';
import BrokerModel from '../persistence/BrokerModel';

export class SequelizeBrokerRepository implements IBrokerRepository {
    async add(broker: Broker): Promise<Broker> {
        const createdBroker = await BrokerModel.create({
            id: broker.id,
            name: broker.name,
            userId: broker.userId,
            credentials: broker.credentials
        });
        return new Broker(createdBroker.id, createdBroker.name, createdBroker.userId, createdBroker.credentials);
    }

    async findById(id: number): Promise<Broker | null> {
        const broker = await BrokerModel.findByPk(id);
        if (!broker) return null;
        return new Broker(broker.id, broker.name, broker.userId, broker.credentials);
    }

    async findAll(): Promise<Broker[]> {
        const brokers = await BrokerModel.findAll();
        return brokers.map(broker => new Broker(broker.id, broker.name, broker.userId, broker.credentials));
    }
}
