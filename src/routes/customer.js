import express from 'express';
const router = express.Router();
const customers = [];
// GET all customers
router.get('/', (req, res) => {
   res.send(customers);
});
// POST a new customer
router.post('/', (req, res) => {
   const customer = req.body;
   customers.push({ ...customer, id: 1 + Math.random().toString(36).substring(7) });
   res.send(`${customer.id} has been added to the Database`);
});
// GET a customer by ID
router.get('/:id', (req, res) => {
   const { id } = req.params;
   const foundcustomer = customers.find(customer => customer.id === id);
   res.send(foundcustomer);
});
// DELETE a customer by ID
router.delete('/:id', (req, res) => {
   const { id } = req.params;
   customers = customers.filter(customer => customer.id !== id);
   res.send(`${id} deleted successfully from database`);
});
// PATCH a customer by ID
router.patch('/:id', (req, res) => {
   const { id } = req.params;
   const { first_name, last_name, email } = req.body;
   const customer = customers.find(customer => customer.id === id);
   if (first_name) customer.first_name = first_name;
   if (last_name) customer.last_name = last_name;
   if (email) customer.email = email;
   res.send(`customer with the ${id} has been updated`);
});
export default router;