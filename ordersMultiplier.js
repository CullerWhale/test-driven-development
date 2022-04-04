const ordersMultiplier = (MULTIPLIER, orders) => {
    return orders.map(order => {
        return {
            ...order, newPrice: order.price*MULTIPLIER
        }
    });
    
} 

module.exports = ordersMultiplier;


