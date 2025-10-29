import { Customer, Market } from '../repository/model/index.js';

class MarketService {
    async getAllCustomers(marketId) {
        try {
            const market =
                await Market
                    .findByPk(
                        marketId,
                        {
                            include: {
                                as: 'customers',
                                model: Customer,
                            },
                        }
                    );

            return market.customers;
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
}

const marketService = new MarketService();

export { marketService }