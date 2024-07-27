import { Broker } from '../entities/Broker';

export interface IBrokerService {
    addBroker(broker: Broker): Promise<Broker>;
    getBroker(id: number): Promise<Broker | null>;
}