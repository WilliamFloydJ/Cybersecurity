const characterSet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "{",
  "}",
  "[",
  "]",
  ":",
  `"`,
  ";",
  `'`,
  "<",
  ">",
  "?",
  ",",
  ".",
  "/",
  " ",
];

const encoder = (str, key) => {
  const strArr = str.split("");
  let DecodedStr = "";
  let changingAmt = 0;
  let keyArr = key.split("");
  let keyInd = 0;
  let keyPrevInd = 0;

  strArr.forEach((mainElement) => {
    keyFound = false;
    charFound = false;
    if (DecodedStr.length !== str.length - 1) {
      characterSet.forEach((compElement, Ind) => {
        if (
          compElement.toLowerCase() === keyArr[keyPrevInd].toLowerCase() &&
          keyFound === false
        ) {
          keyInd = Ind + 1;
          keyPrevInd++;

          keyFound = true;
        }
      });
    }

    characterSet.forEach((compElement, NewInd) => {
      if (
        mainElement.toLowerCase() === compElement.toLowerCase() &&
        charFound === false
      ) {
        let DecodedIndex = 0;
        DecodedIndex = NewInd + keyInd + changingAmt;

        while (DecodedIndex > characterSet.length - 1) {
          DecodedIndex -= characterSet.length;
        }

        DecodedStr += characterSet[DecodedIndex];

        charFound = true;
        changingAmt += NewInd + 1;
      }
    });
  });

  return DecodedStr;
};

const encodedMsg = encoder("I love cryptography!", "And I love Coding!!!");
console.log(encodedMsg);

const decoder = (str, key) => {
  const strArr = str.split("");
  let DecodedStr = "";
  let changingAmt = 0;
  let keyArr = key.split("");
  let keyInd = 0;
  let keyPrevInd = 0;

  strArr.forEach((mainElement) => {
    keyFound = false;
    charFound = false;
    if (DecodedStr.length !== str.length - 1) {
      characterSet.forEach((compElement, Ind) => {
        if (
          compElement.toLowerCase() === keyArr[keyPrevInd].toLowerCase() &&
          keyFound === false
        ) {
          keyInd = Ind + 1;
          keyPrevInd++;

          keyFound = true;
        }
      });
    }

    characterSet.forEach((compElement, NewInd) => {
      if (
        mainElement.toLowerCase() === compElement.toLowerCase() &&
        charFound === false
      ) {
        let DecodedIndex = 0;
        DecodedIndex = NewInd - keyInd - changingAmt;

        while (DecodedIndex > characterSet.length + 1) {
          DecodedIndex -= characterSet.length;
        }
        while (DecodedIndex < 0) {
          DecodedIndex += characterSet.length;
        }

        DecodedStr += characterSet[DecodedIndex];

        charFound = true;
        changingAmt += DecodedIndex + 1;
      }
    });
  });

  return DecodedStr;
};

const decodedMsg = decoder(encodedMsg, "And I love Coding!!!");
console.log(decodedMsg);
