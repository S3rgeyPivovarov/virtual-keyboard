const keyArray = [
  { key: "`", altKey: "~", ruKey: "ё", ruAltKey: "Ё" },
  { key: "1", altKey: "!", ruKey: "1", ruAltKey: "!" },
  { key: "2", altKey: "@", ruKey: "2", ruAltKey: '"' },
  { key: "3", altKey: "#", ruKey: "3", ruAltKey: "№" },
  { key: "4", altKey: "$", ruKey: "4", ruAltKey: ";" },
  { key: "5", altKey: "%", ruKey: "5", ruAltKey: "%" },
  { key: "6", altKey: "^", ruKey: "6", ruAltKey: ":" },
  { key: "7", altKey: "&", ruKey: "7", ruAltKey: "?" },
  { key: "8", altKey: "*", ruKey: "8", ruAltKey: "*" },
  { key: "9", altKey: "(", ruKey: "9", ruAltKey: "(" },
  { key: "0", altKey: ")", ruKey: "0", ruAltKey: ")" },
  { key: "-", altKey: "_", ruKey: "-", ruAltKey: "_" },
  { key: "=", altKey: "+", ruKey: "+", ruAltKey: "" },
  { key: "Backspace", altKey: "", ruKey: "Backspace", ruAltKey: "" },
  { key: "Tab", altKey: "", ruKey: "Tab", ruAltKey: "" },
  { key: "Q", altKey: "", ruKey: "Й", ruAltKey: "" },
  { key: "W", altKey: "", ruKey: "Ц", ruAltKey: "" },
  { key: "E", altKey: "", ruKey: "У", ruAltKey: "" },
  { key: "R", altKey: "", ruKey: "К", ruAltKey: "" },
  { key: "T", altKey: "", ruKey: "Е", ruAltKey: "" },
  { key: "Y", altKey: "", ruKey: "Н", ruAltKey: "" },
  { key: "U", altKey: "", ruKey: "Г", ruAltKey: "" },
  { key: "I", altKey: "", ruKey: "Ш", ruAltKey: "" },
  { key: "O", altKey: "", ruKey: "Щ", ruAltKey: "" },
  { key: "P", altKey: "", ruKey: "З", ruAltKey: "" },
  { key: "[", altKey: "{", ruKey: "Х", ruAltKey: "" },
  { key: "]", altKey: "}", ruKey: "Ъ", ruAltKey: "" },
  { key: "\\", altKey: "|", ruKey: "\\", ruAltKey: "/" },
  { key: "Caps Lock", altKey: "", ruKey: "Caps Lock", ruAltKey: "" },
  { key: "A", altKey: "", ruKey: "Ф", ruAltKey: "" },
  { key: "S", altKey: "", ruKey: "Ы", ruAltKey: "" },
  { key: "D", altKey: "", ruKey: "В", ruAltKey: "" },
  { key: "F", altKey: "", ruKey: "А", ruAltKey: "" },
  { key: "G", altKey: "", ruKey: "П", ruAltKey: "" },
  { key: "H", altKey: "", ruKey: "Р", ruAltKey: "" },
  { key: "J", altKey: "", ruKey: "О", ruAltKey: "" },
  { key: "K", altKey: "", ruKey: "Л", ruAltKey: "" },
  { key: "L", altKey: "", ruKey: "Д", ruAltKey: "" },
  { key: ";", altKey: ":", ruKey: "Ж", ruAltKey: "" },
  { key: "'", altKey: '"', ruKey: "Э", ruAltKey: "" },
  { key: "Enter", altKey: "", ruKey: "Enter", ruAltKey: "" },
  { key: "Shift", altKey: "", ruKey: "Shift", ruAltKey: "" },
  { key: "Z", altKey: "", ruKey: "Я", ruAltKey: "" },
  { key: "X", altKey: "", ruKey: "Ч", ruAltKey: "" },
  { key: "C", altKey: "", ruKey: "С", ruAltKey: "" },
  { key: "V", altKey: "", ruKey: "М", ruAltKey: "" },
  { key: "B", altKey: "", ruKey: "И", ruAltKey: "" },
  { key: "N", altKey: "", ruKey: "Т", ruAltKey: "" },
  { key: "M", altKey: "", ruKey: "Ь", ruAltKey: "" },
  { key: "\\<", altKey: "\\>", ruKey: "Б", ruAltKey: "" },
  { key: "\\.", altKey: "\\>", ruKey: "Ю", ruAltKey: "" },
  { key: "\\/", altKey: "\\?", ruKey: ".", ruAltKey: "," },
  { key: "Shift", altKey: "", ruKey: "Shift", ruAltKey: "" },
  { key: "Ctrl", altKey: "", ruKey: "Ctrl", ruAltKey: "" },
  { key: "Fn", altKey: "", ruKey: "Fn", ruAltKey: "" },
  { key: "Windows", altKey: "", ruKey: "Windows", ruAltKey: "" },
  { key: "Alt", altKey: "", ruKey: "Alt", ruAltKey: "" },
  { key: "Spacebar", altKey: "", ruKey: "Spacebar", ruAltKey: "" },
  { key: "Alt", altKey: "", ruKey: "Alt", ruAltKey: "" },
  { key: "Ctrl", altKey: "", ruKey: "Ctrl", ruAltKey: "" },
  { key: "Left Arrow", altKey: "", ruKey: "Left Arrow", ruAltKey: "" },
  { key: "Up Arrow", altKey: "", ruKey: "Up Arrow", ruAltKey: "" },
  { key: "Down Arrow", altKey: "", ruKey: "Down Arrow", ruAltKey: "" },
  { key: "Right Arrow", altKey: "", ruKey: "Right Arrow", ruAltKey: "" },
];

const body = document.querySelector("#body");

body.innerHTML = "<div class='box' id='box'>" + "hellow" + "</div>";

const box = document.querySelector("#box");

box.innerHTML =
  "<div class='textarea' id='textarea'></div> <div class='keyboard' id='keyboard'></div>";

const textarea = document.querySelector("#textarea");

const keyboard = document.querySelector("#keyboard");

keyArray.forEach((element) => {
  keyboard.innerHTML += "<div class='button'>" + element.key + "</div>";
});
