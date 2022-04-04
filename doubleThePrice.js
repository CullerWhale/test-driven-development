const doubleThePrice = (orders) => {
    return orders.map(order => {
        return {
            ...order, newPrice: order.price*2
        }
    });
    
} 

module.exports = doubleThePrice;


