# Beverage vending machine 2018

The script developed in Node.js v10.9.0 by Nadav Eshed. 

## Important notes:
1. There is no UI.
2. The script will work with node.js version above 8.
3. The script take the arguments that the user inserst and return output.
4. The script creating a json file to save data.
5. In every step of the script the user can cancel the operation by adding "Cancel".
6. Before run the script the user should install the external library: tofixed.

## Operating Instructions:
1. open cmd or other command prompet that work with node.js function. 
2. type `npm i tofixed --save`.
3. write `node app.js` to start the script.
4. follow the script steps.
5. fisrt the user need to choose the payment method: credit or coins.
6. the user can choose which beverage type he want by typing: hot or light.
7. after the user choose the kind, the user will get the list of products.
8. the user can choose the product from the list or insert coins (coins case).
9. after the user entered enough coins to the machine he can choose the product he want.
10. in case of hot beverage the user will need to choose how many sugar he want in his hot drink.

## Example run:
1. `node app.js`
2. `node app.js coins`
3. `node app.js coins hot`
3. `node app.js coins hot 5`
4. `node app.js coins hot Tea`
5. `node app.js coins hot Tea 2`

*The user insert 5$ to the machine and choose Tea,*
*he will get back Tea with 2 sugar and 3.5$ change.*
