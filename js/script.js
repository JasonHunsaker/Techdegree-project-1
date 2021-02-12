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
  source: "Michael Scott",
  citation: "The Office"
},
{
  quote: `"The bee stings the bird & the bee's life is over"`,
  source: "Gary Hunsaker",
  year: 2002,
},
{
  quote: `"I Know"`,
  source: "Han Solo",
  citation: "Star Wars: A New Hope",
  year: 1977,
},
{
  quote: `"Aim low, reach your goals, and avoid disappointment."`,
  source: "Scott Adams",
},
{
  quote: `"It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt."`,
  source: "Mark Twain",
},
{
  quote: `"I reject your reality and substitute my own"`,
  source: "Adam Savage",
  citation: "MythBusters",
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

//code to return random background color - found at https://css-tricks.com/snippets/javascript/random-hex-color/

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

// code to have printQuote called every 10 seconds
setInterval(function() {
  printQuote();
}, 10000)

/***
 * `printQuote` function - Takes the randomly selected quote from the getrandomquote function & formats it to display on webpage 
 * if statements included to show potential citation & year if they are inluded in array information
***/
function printQuote() {
  setBg()
  var input = "";
  var quotePrint = getRandomQuote(quotes);
  input = '<p calss="quote">' + quotePrint.quote + '</p>';
  input += '<p class="source">' + quotePrint.source ;
  if (quotePrint.citation) {
    input += '<span class="citation">' + quotePrint.citation + '</span>' ;
  }
  if (quotePrint.year){
    input += '<span class="year">' + quotePrint.year + '</span>' ;
  }
 '</p>'    
  document.getElementById('quote-box').innerHTML = input;
}
printQuote(); //used to ensure the page loads a random quote without having to click the button first


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false, setBg());