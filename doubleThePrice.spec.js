const doubleThePrice = require('./doubleThePrice');

describe('doubleThePrice', () => {
    it('For empty orders, return empty array', () => {
        const modifiedOrders = doubleThePrice([]);
        expect(modifiedOrders).toEqual([]);
    })

    it('For order with one element, double that price', () => {
        const modifiedOrders = doubleThePrice([{
            price: 10
        }]);
        expect(modifiedOrders).toEqual([{
            price: 10, 
            newPrice: 20
        }]);
    })

    it('For order with two elements, double that price', () => {
        const modifiedOrders = doubleThePrice([{
            price: 10
        }, {
            price: 20
        }]);
        expect(modifiedOrders).toEqual([{
            price: 10, 
            newPrice: 20
        }, {
            price: 20,
            newPrice:40
        }]);
    })


})
