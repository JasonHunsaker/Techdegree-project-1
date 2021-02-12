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
  quote: `"You miss 100% of the shots you dont take - Wayne Gretzkey"`,
  source: "Michael Scott: The Office",
},
{
  quote: `"The bee stings the bird & the bee's life is over"`,
  source: "Gary Hunsaker",
},
{
  quote: `"I Know"`,
  source: "Han Solo, Star Wars: A New Hope",
},
{
  quote: `"Aim low, reach your goals, and avoid disappointment."`,
  source: "Scott Adams",
},
{
  quote: `"If it’s your job to eat a frog, it’s best to do it first thing in the morning. And If it’s your job to eat two frogs, it’s best to eat the biggest one first."`,
  source: "Mark Twain",
},
{
  quote: `"I reject your reality and substitute my own"`,
  source: "Adam Savage"
}];

/***
 * `getRandomQuote` function - needed to create a random number, assign that number to a variable, which would then be used to pull from the quotes array at random
***/
function getRandomQuote (array) {
  var whichQuote = Math.floor(Math.random() * (quotes.length));
  for (let i = 0; i < array.length; i++ ){
    var randomQuote = array[whichQuote];
  }
  return randomQuote;
} 
// used to check & ensure the getrandomquote array is working properly
console.log(getRandomQuote(quotes))


/***
 * `printQuote` function - Takes the randomly selected quote from the getrandomquote function & formats it to display on webpage
***/
function printQuote() {
  var input = "";
  var quotePrint = getRandomQuote(quotes);
  input = '<p calss="quote">' + quotePrint.quote + '</p>';
  input += '<p class="source">' + quotePrint.source + '</p>';
  document.getElementById('quote-box').innerHTML = input;
}
printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);