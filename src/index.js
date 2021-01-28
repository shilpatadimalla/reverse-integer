import "./styles.css";

document.getElementById("app").innerHTML = `${reverseInt(-1234567890)}`;

function reverseInt(num) {
  if (num === 0 || num === -(2 ** 31) || num === 2 ** 31) return 0;

  //len will be 1 less than actual lenth of the number.
  let len = parseInt(Math.log10(Math.abs(num)), 10);
  const isNegative = num < 0 ? true : false;

  if (num < 10 && num > -10) return num;

  let final = 0;
  let remainingNum = Math.abs(num);
  while (remainingNum > 0) {
    let digit = remainingNum % 10;
    final = final + digit * 10 ** len;
    len--;
    remainingNum = parseInt(remainingNum / 10, 10);
  }
  return isNegative && final ? -final : final;
}
console.log(reverseInt(-6));
