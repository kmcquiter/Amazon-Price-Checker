/* 

1) create a prompt to ask the user some questions 
(each prompt with start with a const)
(a) make a prompt () that what is the name of the
project
(b) What is the base price?
(c) Is today "Black Friday"?
(d) Did thte purchaser find the product theough a search engine?
(e) Did purchaser vist a comparison-shopping site?

*/

const userItem = prompt("What is the name of the item?: ");
alert(userItem);
const basePrice = prompt("What is the base price?: ");
alert(basePrice);
const blackFriday = prompt("Is today Black Friday?: ");
alert(blackFriday);
const searchEngine = prompt("Did the purchaser find the product through a search engine?: ");
alert(searchEngine);
const shoppingSite = prompt("Did the purchaser visit a comparison-shoping site?: ");
alert(shoppingSite);

/* 
  if statements:

 if the the user uses find the product using a 
 search engine, give a message to the user and then
 calculate the final price.

 Final price = finalPrice * 1.01;

 if today is black friday reduce the price by 25%
 else if it is not black friday, then do not
 show the message.

*/
let bFprice;
let finalPrice
let message;

// if it is Black Friday, then reduce the price by 25%
if (blackFriday === "yes"){

   message =  message + "Today is Black Friday, we will reduce the price by 25%: ";
   finalPrice =  basePrice - (basePrice * 0.25) ;
   console.log(message +  finalPrice);
}

if (searchEngine === "yes"){
    message = message + "The purchaser came through a search engine, so we will increase the price by 1%. ";
    finalPrice = basePrice * 1.01;
    console.log(message +  finalPrice);
}

if (shoppingSite === "yes"){
    message = message + "This purchaser is a comparison shopper, so we will reduce the price by 10% ";
    finalPrice = finalPrice * 0.10;
    console.log(message + finalPrice );
}





