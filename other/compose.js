import { compose } from "../src/compose";
import { map } from "../src/map";
import { filter } from "../src/filter";
import { partial } from "../src/partial";

export const compose2 = (a, b) => c => a(b(c));

/* let data = parseFloat('3.56');
let number = Math.round(data);
console.log(number); */

let number = compose2(Math.round, parseFloat);
// => (c) => Math.round(parseFlout(c));
console.log(number("3.56"));

let spiltWithSpace = str => str.split(" ");
let count = array => array.length;
let oddOrEven = count => (count % 2 == 0 ? "Even" : "Odd");

const countWords2 = compose2(count, spiltWithSpace);
const countWords = compose(oddOrEven, count, spiltWithSpace);
console.log(countWords("Hello world how are you?"));
console.log(countWords2("Hello world how are you?"));

let apressBooks = [
  {
    id: 111,
    title: "C# 6.0",
    author: "ANDREW TROELSEN",
    rating: [4.7],
    reviews: [{ good: 4, excellent: 12 }],
  },
  {
    id: 222,
    title: "Efficient Learning Machines",
    author: "Rahul Khanna",
    rating: [4.5],
    reviews: [],
  },
  {
    id: 333,
    title: "Pro AngularJS",
    author: "Adam Freeman",
    rating: [4.0],
    reviews: [],
  },
  {
    id: 444,
    title: "Pro ASP.NET",
    author: "Adam Freeman",
    rating: [4.2],
    reviews: [{ good: 14, excellent: 12 }],
  },
];

let t = map(
  filter(apressBooks, book => book.rating[0] >= 4.5),
  book => {
    return {
      title: book.title,
      author: book.author,
    };
  },
);

//console.log(t);

let goodBooks = book => book.rating[0] >= 4.5;
let titleAndAuthor = book => ({ title: book.title, author: book.author });

let queryGoodBook = partial(filter, undefined, goodBooks);
let mapTitleAndAuthor = partial(map, undefined, titleAndAuthor);
const getGoodBooks = compose2(mapTitleAndAuthor, queryGoodBook);

console.log(getGoodBooks(apressBooks));
