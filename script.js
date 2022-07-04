import { QUOTES } from "./quote.js";

function getRandomInt() {
  return Math.floor(Math.random() * QUOTES.length);
}

// REGISTER JS by ID
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const topicDOMUL = document.getElementById("topics");
const btnNew = document.getElementById("btn-new");
const btnShare = document.getElementById("btn-share");


function generateProfessionText(innerText) {
  const quoteProfession = document.createElement("small");
  quoteProfession.classList = "text-sm";
  quoteProfession.id = "author-profession";
  quoteProfession.innerText = innerText;

  return quoteProfession;
}

function generateTopicItem(listDOM, items) {
  listDOM.innerHTML = "";
  for (let t of items) {
    const topicItem = document.createElement("li");
    topicItem.classList =
      "rounded-full bg-purple-700 px-4 flex items-center text-white h-8 ml-2";
    topicItem.innerText = t;
    listDOM.append(topicItem);
  }
}

let RANDOM_VALUE = getRandomInt();

// INITIAL QUOTE
let DEFAULT_QUOTE = QUOTES[RANDOM_VALUE];

// SET VALUE FOR INITIAL CONDITION
function initLoad() {
  quoteText.innerText = DEFAULT_QUOTE["quote"];
  quoteAuthor.innerText = `${DEFAULT_QUOTE["author"]} ; `;

  const professionDOM = generateProfessionText(DEFAULT_QUOTE["profession"]);
  quoteAuthor.append(professionDOM);

  const topicItems = DEFAULT_QUOTE["topics"];
  generateTopicItem(topicDOMUL, topicItems);
}

// GENERATE NEW QUOTE
function btnNewQuote() {
  const randIndex = getRandomInt();
  let newQuote = QUOTES[randIndex];

  quoteText.innerText = newQuote["quote"];
  quoteAuthor.innerText = `${newQuote["author"]} ; `;

  quoteAuthor.append(generateProfessionText(newQuote["profession"]));

  const topicItems = newQuote["topics"];
  generateTopicItem(topicDOMUL, topicItems);
}

// SHARE TWIITER FUNCTION
function btnShareTwitter(quoteText, authorName) {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText}-${authorName}`;
  window.open(twitterUrl, "_blank");
}

// document.addEventListener("click",)
btnNew.addEventListener("click", btnNewQuote);
btnShare.addEventListener(
  "click",
  btnShareTwitter(quoteText.innerText, quoteAuthor.innerText)
);

initLoad();