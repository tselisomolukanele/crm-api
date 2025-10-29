import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../server.js';

const Customer = sequelize.define(
  'Customer',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: 'customer',
    timestamps: true,
    underscored: true,
  });

const Market = sequelize.define(
  'Market',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: 'market',
    timestamps: true,
    underscored: true,
  }); 
  
Customer.belongsToMany(Market, { through: 'customer_book', as : 'markets', foreignKey: 'customer_id' });
Market.belongsToMany(Customer, { through: 'customer_book', as : 'customers', foreignKey: 'market_id' }); 

export { Customer, Market };
