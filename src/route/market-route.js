import express from 'express';
import { marketService } from '../service/market-service.js';

const router = express.Router();
const customers = [];
// GET all customers for the market
router.get('/:id/customer/', (req, res) => {
   marketService.getAllCustomers(req.params['id']).then(customers =>
      res.send(customers)
   )
});
export default router;