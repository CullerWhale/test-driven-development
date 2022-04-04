const workFlow = require('./workFlow');

const orders = [{
    price: 8

}, {
    price:20
}]

const expectedOrders = [{
    price: 20,
    newPrice:46.5
}]



describe('workFlow', () => {
    it('should do the thing', () => {
        const updatedOrders = workFlow(orders);
        console.log(updatedOrders);
        console.log(expectedOrders);
        expect(updatedOrders).toEqual(expectedOrders);

    })
})