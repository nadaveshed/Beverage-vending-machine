const file = require('./file.js');

var payment = process.argv[2];
var kind = process.argv[3];
var command = process.argv[4];
var amount = process.argv[5];

console.log('-------------------------------------------------------------------');
console.log(' Please choose paying method: credit or coins');
console.log('-------------------------------------------------------------------');
console.log(' You can cancel the operation at any state by add: Cancel');
console.log('-------------------------------------------------------------------');
file.checkFile();
if (payment === 'coins') {
    console.log(' Please choose which type of drink you would like to buy (light/hot)');
    console.log('-------------------------------------------------------------------');
    if (kind === 'light') {
        console.log(' Insert coins or choose beverage');
        console.log('-------------------------------------------------------------------');
        file.insertCoin(command);
        console.log(file.productList(kind));
        if (command === 'Coke')         {
            console.log('Coke has selected');
            console.log('The price is: 3$');
            file.calculateChange(3.0);
        } else if (command === 'Sprite')         {
            console.log('Sprite has selected');
            console.log('The price is: 2.5$');
            file.calculateChange(2.5);
        } else if (command === 'Cancel') {
            console.log('Action canceled');
            file.calculateChange(0);
        }
    } else if (kind === 'hot') {
        console.log('Insert coins');
        file.insertCoin(command);
        console.log(file.productList(kind));
        if (command === 'Coffee') {
            console.log('Coffee has selected');
            console.log('The price is: 2.1$');
            file.sugarAmount(payment, command, amount);
            if (amount === 'Cancel') {
                console.log(' Action canceled!');
                file.calculateChange(0);
            }
        } else if (command === 'Tea') {
            console.log('Tea has selected');
            console.log('The price is: 1.5$');
            file.sugarAmount(payment, command, amount);
            if (amount === 'Cancel') {
                console.log(' Action canceled!');
                file.calculateChange(0);
            }
        } else if (command === 'Cancel') {
            console.log(' Action canceled!');
            file.calculateChange(0);
        }
    } else if (kind === 'Cancel') {
        console.log(' Action canceled!');
        file.calculateChange(0);
    }
} 

else if (payment === 'credit') {
    console.log(' Please choose which type of drink you would like to buy (light/hot)');
    console.log('-------------------------------------------------------------------');
    if (kind == 'light') {
        console.log(' Please choose beverage');
        console.log('-------------------------------------------------------------------');
        console.log(file.productList(kind));
        if (command === 'Coke') {
            console.log('Coke has selected');
            console.log('You will be charged: 3$');
            file.creditCharge(3);
        } else if (command === 'Sprite') {
            console.log('Sprite has selected');
            console.log('You will be charged: 2.5$');
            file.creditCharge(2.5);
        }
    } else if (kind == 'hot') {
        console.log(' Please choose beverage');
        console.log('-------------------------------------------------------------------');
        console.log(file.productList(kind));
        if (command === 'Coffee') {
            console.log('Coffee has selected');
            file.sugarAmount(payment, command, amount);
        } else if (command === 'Tea') {
            console.log('Tea has selected');
            file.sugarAmount(payment, command, amount);
        } else if (command === 'Cancel') {
            console.log(' Action canceled!');
            file.calculateChange(0);
        }
    } else if (kind === 'Cancel') {
        console.log(' Action canceled!');
        file.calculateChange(0);
    }
}