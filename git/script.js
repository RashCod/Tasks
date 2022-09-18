function nameShuffler(str) {
  return str.split(" ").reverse("").join(" ");
}

function isIsogram(str) {
  let arr = str.toUpperCase().split("");
  return new Set(arr).size == arr.length;
}

function findShort(s) {
  let res = s.split(" ").reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });
  return res.length;
}

function accum(s) {
  let res = s
    .split("")
    .map((elem, i) => elem.repeat(i + 1))
    .map((elem) => elem.slice(0, 1).toUpperCase() + elem.slice(1).toLowerCase())
    .join("-");
  return res;
}

function doubleChar(str) {
  return str
    .split("")
    .map((elem) => elem.repeat(2))
    .join("");
}

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
    if (arr[i] === 0) {
      return 0;
    }
  }
  return sum;
}

function invert(array) {
  return array.map((elem) => (elem >= 0 ? elem * -1 : Math.abs(elem)));
}

function abbrevName(name) {
  return name.match(/[A-Z]/g).join(".");
}

const maskify = (cc) => {
  let arr = cc.slice(0, cc.length - 4);
  return cc.replace(arr, "#".repeat(cc.length - 4));
};

function findMultiples(integer, limit) {
  let arr = [];
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
  }
  return arr;
}

function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}

function removeExclamationMarks(s) {
  return s.replace(/!/gi, "");
}

function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}

function squareDigits(num) {
  return +String(num)
    .split("")
    .map((elem) => elem * elem)
    .join("");
}
console.log(squareDigits(3212)); //9414);

function vaporcode(string) {
  let array = String(string.toUpperCase().split(""));
  return array.replace(/[^a-zа-яё0-9\s]/gi, " ").replace(/\s+/g, "  ");
}
console.log(vaporcode("Lets go to the movies")); //"L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S")

function modifyMultiply(str, loc, num) {
  let res = str.split(" ");
  let ress = res[loc] + "-";
  let result = ress.repeat(num).slice(0, -1);
  return result;
}
console.log(modifyMultiply("This is a string", 3, 5)); //"string-string-string-string-string"

function fakeBin(x) {
  return x
    .split("")
    .map((elem) => (elem < 5 ? 0 : 1))
    .join("");
}
console.log(fakeBin("45385593107843568"));

function countBy(x, n) {
  let z = [];
  for (let i = x; i <= n; i++) {
    z.push(x * i);
  }

  return z;
}

console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10])
console.log(countBy(2, 5));

function divisibleBy(numbers, divisor) {
  let result = [];
  for (let elem of numbers) {
    if (elem % divisor === 0) {
      result.push(elem);
    }
  }
  return result;
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

function between(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}
console.log(between(1, 4)); // [1, 2, 3, 4]

function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

console.log(solution("camelCasing")); //'camel Casing',)

var summation = function (num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    if (i <= num) {
      result += i;
    }
  }
  return result;
};

console.log(summation(8)); // 36));

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abcde", "cde")); //, true)

function XO(str) {
  let x = [];
  let o = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "x") {
      x.push(str[i]);
    } else if (str[i].toLowerCase() == "o") {
      o.push(str[i]);
    }
  }
  if (x.length === o.length) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("xo")); //true);
console.log(XO("xxOo")); //true);
console.log(XO("xxxm")); //false);
console.log(XO("Oo")); //false);
console.log(XO("ooom")); //false);

function points(games) {
  let result = 0;
  games.map(function (elem) {
    let x = elem[0];
    let y = elem[2];
    if (x > y) {
      result += 3;
    } else if (x == y) {
      result += 1;
    } else {
      result += 0;
    }
  });
  return result;
}
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);

function getAverage(marks) {
  let sum = marks.reduce((acum, elem) => acum + elem, 0);
  return Math.floor(sum / marks.length);
}

console.log(getAverage([1, 2, 3, 4, 5])); //3);)

function twiceAsOld(papa, sin) {
  return sin * 2 - papa;
}
console.log(twiceAsOld(55, 30)); // 5);

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1234, 5678, 9012], 14690)); //target = 14690)
console.log(twoSum([1, 2, 3], 4)); // returns [0, 2] or [2, 0])

function reverseWords(str) {
  let arr = str.split(" ");
  return arr.reverse().join(" ");
}

console.log(reverseWords("hello world!")); //"world! hello")

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, el) => el + acc, 0);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); //21))

function first(arr, n) {
  return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
}

var arr = ["a", "b", "c", "d", "e"];
console.log(first(arr)); //=> ['a'];
console.log(first(arr, 2)); //=> ['a', 'b']
console.log(first(arr, 3)); //=> ['a', 'b', 'c'];
console.log(first(arr, 0)); //=> [];

function oddCount(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      res.push(i);
    }
  }
  return res.length;
}

console.log(oddCount(15)); // 7)

const ArrowFunc = function (arr) {
  return arr.map((el) => String.fromCharCode(el)).join("");
};

console.log(ArrowFunc([84, 101, 115, 116])); //, 'Test', 'Convert those numbers to letters')

function addLength(str) {
  return str.split(" ").map((elem) => elem + " " + elem.length);
}

console.log(addLength("apple ban")); //["apple 5", "ban 3"]

function monkeyCount(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    res.push(i);
  }
  return res;
}

console.log(monkeyCount(5)); // [1, 2, 3, 4, 5]);

function highAndLow(numbers) {
  let num = numbers.split(" ").map((el) => +el);
  let result = Math.max(...num) + " " + Math.min(...num);
  return result + "";
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9");

const transport = ["Bus", "Car", "Bicycle", "Airplane"];

const isElementInArray = (inputArray, searchElement) => {
  return inputArray.includes(searchElement);
};
console.log(isElementInArray(transport, "Bus"));
console.log(isElementInArray(transport, "Phone"));
console.log(isElementInArray(transport, "Airplane"));

const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [2, 1, 3];
const d = [1, 2, 3, 4];

const areArraysEquals = (firstArray, SecondArray) => {
  return (
    firstArray.length == SecondArray.length &&
    firstArray.every((el, index) => SecondArray[index] == el)
  );
};

console.log(areArraysEquals(a, b));
console.log(areArraysEquals(a, c));
console.log(areArraysEquals(a, d));

const tags = [
  ["javascript", "es6"],
  ["css", "flexbox"],
  ["html", "web-browser"],
];

const fruits = [
  { title: "Orange", quantity: 10 },
  { title: "Banana", quantity: 5 },
  { title: "Apple", quantity: 25 },
];

const primitiveTypesArray = [25, "x", true, undefined, null];

const isElementInArray = (searchElement, inputArray) => {
  const jsonConverteble = JSON.stringify(inputArray);
  return jsonConverteble.includes(JSON.stringify(searchElement));
};

// const isElementInArray = (searchElement, inputArray) => {
//     if(typeof searchElement !== 'object'){
//         return inputArray.includes(searchElement)
//     }
//    return inputArray.map((elem) => JSON.stringify(elem)).includes(JSON.stringify(searchElement))
// }

console.log(isElementInArray(["css", "flexbox"], tags));
console.log(isElementInArray(["flexbox", "css"], tags));
console.log(isElementInArray({ title: "Apple", quantity: 25 }, fruits));
console.log(isElementInArray({ title: "Banana" }, fruits));
console.log(isElementInArray(25, primitiveTypesArray));

const factorial = (n) => {
  return n ? n * factorial(n - 1) : 1;
};

console.log(factorial(5));

function arrayDiff(a, b) {
  return a.reduce((ac, el) => (!b.includes(el) ? ac.concat(el) : ac), []);
}

console.log(arrayDiff([1, 2, 2], [1]));

var maxSequence = function (arr) {
  let currentSum = 0;
  let maxSum = 0;

  if (arr.length === 0) {
    return 0;
  }

  arr.forEach((element) => {
    currentSum = Math.max(element, currentSum + element);
    maxSum = Math.max(maxSum, currentSum);
  });
  return maxSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6);

function removeSmallest(numbers) {
  let min = Math.min(...numbers);
  let index = numbers.indexOf(min);
  return numbers.filter((el, ind) => ind !== index);
}

console.log(removeSmallest([1, 2, 3, 4, 5])); // [2, 3, 4, 5],
console.log(removeSmallest([1, 2, 3, 4, 1])); // [2,3,4]

function squareOrSquareRoot(array) {
  return array.map((el) => {
    let sqrt = Math.sqrt(el);
    if (sqrt % 1 == 0) {
      return sqrt;
    } else {
      return Math.pow(el, 2);
    }
  });
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // 2,9,3,49,4,1

function contamination(text, char) {
  if (text == "" || char == "") {
    return "";
  }
  return char.repeat(text.length);
}

console.log(contamination("abc", "z")); // "zzz")
console.log(contamination("", "z"), "");
console.log(contamination("abc", ""), "");
console.log(contamination("_3ebzgh4", "&")); // "&&&&&&&&")
console.log(contamination("//case", " ")); // "      ")

function predictAge(...age8) {
  let one = [...age8]
    .map((el, index) => {
      return el * el;
    })
    .reduce((acc, el) => acc + el);
  return Math.floor(Math.sqrt(one) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); //86);

function vaporcode(string) {
  return string.toUpperCase().split(" ").join("").split("").join`  `;
}

console.log(vaporcode("Lets go to the movies")); //"L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S")

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== 1) {
      return arr[i];
    }
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 10]));

function pattern(n) {
  let res = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      res += i;
    }
    res += "\n";
  }
  return res.slice(0, -1);
}

console.log(pattern(1)); //,"1");
console.log(pattern(5)); //"1\n22");
// console.log(pattern(5)); //"1\n22\n333\n4444\n55555");

function stringy(size) {
  let result = "";
  for (let i = 1; i <= size / 2; i++) {
    result += "10";
  }
  if (size % 2 !== 0) {
    return (result += "1");
  }
  return result;
}

console.log(stringy(6)); // '101010'

console.log(stringy(31)); // '1010101010101010101010101010101'

function greet(lang) {
  const obj = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  return obj[lang] || "Welcome";
}

console.log(greet("english"));
console.log(greet("french"));
console.log(greet(""));

function houseNumbersSum(inputArray) {
  let result = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
      result += inputArray[i];
    }
    if (inputArray[i] === 0) {
      break;
    }
  }
  return result;
}
