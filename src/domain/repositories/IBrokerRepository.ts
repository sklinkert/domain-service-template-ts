import { Broker } from '../entities/Broker';

export interface IBrokerRepository {
    add(broker: Broker): Promise<Broker>;
    findById(id: number): Promise<Broker | null>;
}