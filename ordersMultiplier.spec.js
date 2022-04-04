const ordersMultiplier = require('./ordersMultiplier');

describe('ordersMultiplier', () => {
    it('For empty orders, return empty array', () => {
        const modifiedOrders = ordersMultiplier(2, []);
        expect(modifiedOrders).toEqual([]);
    })

    it('For order with one element, double that price when multiplier is two', () => {
        const modifiedOrders = ordersMultiplier(2, [{
            price: 10
        }]);
        expect(modifiedOrders).toEqual([{
            price: 10, 
            newPrice: 20
        }]);
    })

    it('For order with two elements, triple that price when multiplier is 3', () => {
        const modifiedOrders = ordersMultiplier(3, [{
            price: 10
        }, {
            price: 20
        }]);
        expect(modifiedOrders).toEqual([{
            price: 10, 
            newPrice: 30
        }, {
            price: 20,
            newPrice:60
        }]);
    })


})
