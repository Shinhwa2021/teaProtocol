// seller/index.js

const buyer = require('@shinhwa2021/houseselling');
const sellerUtils = require('./sellerUtils');
const sellerActions = require('./sellerActions');

function sellHouse() {
    const sellerName = sellerUtils.generateRandomName(); // Generate seller name
    console.log(`${sellerName} wants to sell the house.`);

    // Show seller actions
    console.log(`${sellerName} starts the house selling process:`);
    sellerActions.sellerActions.forEach((action, index) => {
        console.log(`${index + 1}. ${action}`);
    });

    // Simulate house arrangement
    setTimeout(() => {
        console.log(`The house has been prepared and is ready for sale.`);
    }, 1000);

    // Simulate house selling process
    setTimeout(() => {
        buyer.buyHouse();
    }, 2000);
}

module.exports = {
    sellHouse
};
