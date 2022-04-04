const addShipping = (shipping, orders) => {
    return orders.map(order => {
        const updatedPrice = order.newPrice + shipping;
        return {
            ...order, newPrice: updatedPrice
        }

    })
}

module.exports = addShipping;
