import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import customerRoutes from './routes/customer.js';
import { sequelize } from './data/server.js';
import { Customer } from './data/model/customer.js';

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT;
app.use(bodyParser.json());
app.use('/customer', customerRoutes);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


(async () => {
  try {
    const newUser = await Customer.create({
      name: 'john_doe'
    });

    console.log('User created:', newUser.toJSON());
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await sequelize.close();
  }
})();