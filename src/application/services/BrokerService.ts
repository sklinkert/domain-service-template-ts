import { IBrokerService } from '../../domain/services/IBrokerService';
import { IBrokerRepository } from '../../domain/repositories/IBrokerRepository';
import { Broker } from '../../domain/entities/Broker';
import { BrokerDTO } from '../dto/BrokerDTO';

export class BrokerService implements IBrokerService {
    constructor(private brokerRepository: IBrokerRepository) {}

    async addBroker(brokerDTO: BrokerDTO): Promise<Broker> {
        const broker = new Broker(0, brokerDTO.name, brokerDTO.userId, brokerDTO.credentials);
        return this.brokerRepository.add(broker);
    }

    async getBroker(id: number): Promise<Broker | null> {
        return this.brokerRepository.findById(id);
    }

    async getAllBrokers(): Promise<Broker[]> {
        return this.brokerRepository.findAll();
    }
}