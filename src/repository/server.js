import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to PostgreSQL:', error.message);
    }
})();

export { sequelize };