const ordersFilter = require('./ordersFilter');

describe('ordersFilter', () => {
    it('for no orders return empty array',  () => {
        const filteredOrders = ordersFilter(10,[]);
        expect(filteredOrders).toEqual([])
    })

    it('for one order over the minimum should return order',  () => {
        const filteredOrders = ordersFilter(10,[{
            price: 20
        }]);
        expect(filteredOrders).toEqual([{
            price: 20
        }]);
    })



    
    it('for one order under the minimum, return empty array',  () => {
        const filteredOrders = ordersFilter(10,[{
            price: 9
        }]);
        expect(filteredOrders).toEqual([]);
    })


})

