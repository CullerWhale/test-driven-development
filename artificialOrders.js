const workflow = require('./workFlow');

const customerOrders = () => {
    let orderArray = [];
    for (let index = 0; index < 10; index++) {
        const price = Math.floor(Math.random()*100);
        orderArray.push({price}); 

    }
    // console.log(orderArray);
    return orderArray;
}; 

// customerOrders();


console.log(workflow(customerOrders()))