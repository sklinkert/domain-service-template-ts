import { DataTypes, Model } from 'sequelize';
import sequelize from '../../shared/database/sequelize';

class BrokerModel extends Model {
    public id!: number;
    public name!: string;
    public userId!: number;
    public credentials!: string;
}

BrokerModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    credentials: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'brokers',
});

export default BrokerModel;