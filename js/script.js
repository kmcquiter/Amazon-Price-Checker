
displayPrompts();
// create a fuction that has the prompts

function displayPrompts() {
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
    
}

//Create a  function for Black Friday


function blackFriday(blackFriday) {
    
    if (blackFriday === "yes"){

      let message =  "Today is Black Friday, we will reduce the price by 25%: ";
        finalPrice =  basePrice - (basePrice * 0.25) ;
        console.log(message +  finalPrice);
     };
}



function searchEngine() {

    if (searchEngine === "yes"){

        message =  "Today is Black Friday, we will reduce the price by 25%: ";
        finalPrice =  basePrice - (basePrice * 0.25) ;
        console.log(message +  finalPrice);
     };
}


function shoppingSite() {

    if (shoppingSite === "yes"){
        message = "This purchaser is a comparison shopper, so we will reduce the price by 10% ";
        finalPrice = finalPrice * 0.10;
        console.log(message + finalPrice );
    };
}

function DisplayMessage(){

    alert("The base price for" + " " + userItem + "is" + "" + basePrice + "." 
   + "We will increase the price by 1% to pay the search engine." + "This purchaser is a comparison shopper, so we will reduce the price by 10%.Since it's Black Friday, we will reduce the price by 25%." + "The final price is" + finalPrice);
}

