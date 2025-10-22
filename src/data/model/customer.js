import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../server.js';

const Customer = sequelize.define('Customer', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
    name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'customer',
  timestamps: true,
  createdAt: 'created_at', 
  updatedAt: 'updated_at'
});

export { Customer };
