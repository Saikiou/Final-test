const findOppositeNumber = (n, inputNumber) => {
  return (n / 2 + inputNumber) % n;
};
const merge2string = (str1, str2) => {
  let result = Array.from(
    str1.length > str2.length ? str1 : str2,
    (_, i) => (str1[i] || "") + (str2[i] || "")
  ).join("");
  return result;
};
console.log(findOppositeNumber(10, 2));
console.log(merge2string("abc", "123"));
