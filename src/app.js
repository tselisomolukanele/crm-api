import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import customerRoutes from './route/customer-route.js';
import marketRoutes from './route/market-route.js';

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT;
app.use(bodyParser.json());
app.use('/customer', customerRoutes);
app.use('/market', marketRoutes);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
