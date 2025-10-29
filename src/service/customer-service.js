import { Customer } from '../repository/model/index.js';

class CustomerService {
    async addCustomer(customer) {

        try {
            const newCustomer = await Customer.create({
                ...customer
            });

            return newCustomer;
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    async getAllCustomers() {
        try {
            const customers = await Customer.findAll();
            return customers;
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
}

const customerService = new CustomerService();

export { customerService }