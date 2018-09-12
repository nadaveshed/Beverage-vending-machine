const fs = require('fs');
var toFixed = require('tofixed');

var coins = [{
    name: "10 cent",
    value: 0.1
  }, {
    name: "50 cent",
    value: 0.5
  }, {
    name: "1 dollar",
    value: 1
  }, {
    name: "2 dollar",
    value: 2
  }, {
    name: "5 dollar",
    value: 5
  }];
 
var products = [{
    name: "Coke",
    type: "light",
    cost: 3.0, 
  }, {
    name: "Sprite",
    type: "light",
    cost: 2.5
  }, {
    name: "Tea",
    type: "hot",
    cost: 1.5
  }, {
    name: "Coffee",
    type: "hot",
    cost: 2.1 
  }];

checkFile = () => {
    try {
        var noteString = fs.readFileSync('machineMoney.json', null,JSON.stringify(0));
        return JSON.parse(noteString);
    } catch (e) {
        console.log('No file');
        console.log('Creating new file for money in the machine');
        fs.writeFileSync('machineMoney.json', JSON.stringify(0));
    }
};

var savedAmount = (sum) => {
    fs.writeFileSync('machineMoney.json', JSON.stringify(sum));
}

var productList = (productKind) => {
    console.log('-------------------------------------------------------------------');
    console.log('---------------');
    console.log(productKind + ' beverages list:');
    console.log('---------------');
    for (let i = 0; i < products.length; i++) {
        if (products[i].type === productKind) {
            console.log(products[i].name, products[i].cost + '$');
        }
    }
    console.log('-------------------------------------------------------------------');
    // checkFile();
};  

var insertCoin = (coin) => {    
    if (isNaN(coin) === true) {
        return;
    }
    if (checkCoin(coin)) {
        return;
    } else {
        var product = JSON.parse(fs.readFileSync('machineMoney.json'));
        result = +coin + +product;
        console.log('Current money in the machine:', toFixed(result, 1) + '$');
        savedAmount(toFixed(result, 1));
        return JSON.parse(result);
    }
};

var checkCoin = (insertedCoin) => {
    let coin = coins.filter(key => key.value === parseFloat(insertedCoin));
    var x = insertedCoin;
    if(coin.length !=0) {
        if (x>=1) {
            console.log('-----------------------------');
            console.log('', x + '$ Inserted to the machine!');
        }
        else {
            console.log('-----------------------------');
            console.log('', x + '¢ Inserted to the machine!');
        }
        return false;
    } else {
        console.log('-------!!Warning!!-------');
        console.log('This is not a valid coin');
        console.log('Please enter 0.1 / 0.5 / 1 / 2 / 5 dollar');
        return true;
    }
  }

var cancellation = (val) => {
    if (val>0) {
        console.log('Please take your drink');
    }
}

var calculateChange = (price) => {
    var change = fs.readFileSync('machineMoney.json');
    var currentChange = JSON.parse(change);
    console.log('-------------------------------------');
    console.log('Current money in the machine: ', toFixed(currentChange,1) + '$');
    if (currentChange === toFixed(price, 1)) {
        console.log('No change!');
        cancellation(price);
        currentChange = 0;
    } else if (currentChange > price) {
        currentChange = currentChange - price;
        cancellation(price);
        console.log('-------------------------------------');
        console.log('Your change is: ', toFixed(currentChange,1) + '$');
        console.log('-------------------------------------');
        currentChange = 0;
    } else {
        console.log('Please insert more money');
    }
    savedAmount(currentChange);
}

var sugarAmount = (method, command, sugar) => {
    let cost = products.filter(key => key.name === command).map(a => a.cost);
    if(sugar!=null && sugar>=0 && sugar<6) {
        console.log('The command amount is', command);
        console.log('-------------------------------------');
        console.log('Orderd: ' + command + ' with ' + sugar + ' unit(s) sugar');
        console.log('-------------------------------------');
        if (method == 'coins') {
            calculateChange(cost);        
        }
        if (method == 'credit') {
            creditCharge(cost);
            console.log('You will be charged: ' + cost + '$');  
        }
    } else {
        console.log('-------------------------------------');
        console.log('Please choose the amount of sugar 0-5');
        console.log('-------------------------------------');
    }
}

async function creditCharge(val) {
    await sleep(5000);
    console.log('Credit card has been charged ' + val +'$');
    console.log('Please take your drink');
}

let sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = {
    productList,
    insertCoin,
    calculateChange,
    sugarAmount,
    creditCharge,
    checkFile
};