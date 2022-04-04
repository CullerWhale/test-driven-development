const Constants = require('./constants');
const ordersFilter = require('./ordersFilter');
const ordersMultiplier = require('./ordersMultiplier');
const addShipping = require('./addShipping');

const workFlow = (orders) => {
    // return [ordersFilter(Constants.ORDER_MINIMUM), ordersMultiplier(Constants.MULTIPLIER), addShipping(Constants.SHIPPING)].reduce(
    //     (ords, funk) => { 
    //         return funk(ords);
    //     }, orders
    // )

    // return undefined;
    const ordersOne = ordersFilter(Constants.ORDER_MINIMUM, orders);
    // console.log(ordersOne);
    const ordersTwo =  ordersMultiplier(Constants.MULTIPLIER, ordersOne);
    // console.log(ordersTwo);
    const ordersThree = addShipping(Constants.SHIPPING, ordersTwo);
    // console.log(ordersThree);
    return ordersThree

}
const orders = [{
    price: 8

}, {
    price:20
}]

workFlow(orders);
module.exports = workFlow;