const ordersFilter = (minimum, orders) => {
    return orders.filter(order => {
        return order.price >= minimum
    })
}

module.exports = ordersFilter;