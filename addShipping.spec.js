const addShipping = require('./addShipping');

describe('addShipping', () => {
    it('for no orders return empty array',  () => {
        const updatedOrders = addShipping(10,[]);
        expect(updatedOrders).toEqual([])
    })

    it('for one order, add shipping cost to new price',  () => {
        const updatedOrders = addShipping(10,[{
            newPrice: 20
        }]);
        expect(updatedOrders).toEqual([{
            newPrice: 30
        }]);
    })



    
    // it('for one order under the minimum, return empty array',  () => {
    //     const filteredOrders = ordersFilter(10,[{
    //         price: 9
    //     }]);
    //     expect(filteredOrders).toEqual([]);
    // })


})

