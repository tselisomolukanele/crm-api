import express from 'express';
import { customerService } from '../service/customer-service.js';

const router = express.Router();
const customers = [];
// GET all customers
router.get('/', (req, res) => {
   customerService.getAllCustomers().then(customers =>
      res.send(customers)
   )
});
// POST a new customer
router.post('/', (req, res) => {
   const customer = req.body;
   customerService.addCustomer(customer).then(newCustomer => {
      res.send(`${newCustomer.id} has been added to the Database`);
   })
});
// GET a customer by ID
router.get('/:id', (req, res) => {
   const { id } = req.params;
   const foundcustomer = customers.find(customer => customer.id === id);
   res.send(foundcustomer);
});
export default router;