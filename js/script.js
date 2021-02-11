/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * array of quotes to display
***/
let quotes = [{
  quote: "You miss 100% of the shots you dont take - Wayne Gretzkey",
  source: "- Michael Scott: The Office",
},
{
  quote: "The bee stings the bird & the bee's life is over",
  source: "- Gary Hunsaker",
},
{
  quote: "I Know",
  source: "-Han Solo, Star Wars: A New Hope",
},
{
  quote: "Aim low, reach your goals, and avoid disappointment.",
  source: "-Scott Adams",
},
{
  quote: "If it’s your job to eat a frog, it’s best to do it first thing in the morning. And If it’s your job to eat two frogs, it’s best to eat the biggest one first.",
  source: "- Mark Twain",
},
{
  quote: "I reject your reality and substitute my own",
  source: "- Adam Savage"
}];

/***
 * `getRandomQuote` function
***/
function getRandomQuote (array) {
  // random number to pick quote to display
  var whichQuote = Math.floor(Math.random() * (quotes.length));
  for (let i = 0; i < array.length; i++ ){
    var randomQuote = array[whichQuote];
  }
  return randomQuote;
} 



/***
 * `printQuote` function
***/
function printQuote(){
  var quotePrint = getRandomQuote(quotes);
  var input = `<p calss='quote'>${quotePrint.quote}</p><h1 class='source'>${quotePrint.source}</h1>`;
  document.querySelector("quote-box").innerhtml = input;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);