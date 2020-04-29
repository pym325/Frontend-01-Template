function getNum(val) {
  return val >= '0' && val <= '9' ? val - '0' : val >= 'A' && val <= 'Z' ? val - 'A' + 10 : val - 'a' + 10;
}

function StringToNumber(str, radix) {
  let ans = 0, base = 1.0 / radix, E = 0, i = 0;
  let flag = 0;
  const num = str.split('');
  const isNeg = num[0] === '-';
  for (i = num[0] === '-' ? 1 : 0; i < num.length; ++i) {
    const val = num[i];
    if (val === 'E' || val === 'e') {
      i += 1;
      break;
    }
    if (val == '.') {
      flag = 1;
      continue;
    }
    if (!flag) {
      ans = ans * radix + getNum(val);
    } else {
      ans += base * getNum(val);
      base /=  radix;
    }
  }
  if (i < num.length) {
    const isNegE = num[i] === '-';
    for (i += num[i] === '-'; i < num.length; ++i) {
      E = E * radix + getNum(num[i]);
    }
    for (; E; --E) {
      if (isNegE) {
        ans /= radix;
      } else {
        ans *= radix;
      }
    }
  }
  return isNeg ? -ans: ans;
}

// test case
console.log(StringToNumber('123', 10)); // 123
console.log(StringToNumber('-123', 10)); // -123
console.log(StringToNumber('123.45', 10)); // 123.45
console.log(StringToNumber('123.45E2', 10)); // 12345
console.log(StringToNumber('-123.45E2', 10)); // -12345
console.log(StringToNumber('-123.45E-2', 10)); // -1.2345000000000002


// 10进制整数转其他进制字符串
function NumberToString(num, radix) {
  let ans = "";

  while (num > 0) {
    const remainder = num % radix;
    ans += remainder >= 10 ? String.fromCharCode(remainder - 10 + 'A'.codePointAt(0)): String(remainder);
    num /= radix; 
    num = Math.floor(num);
  }
  return ans.split('').reverse().join('');
}

// test case
console.log(NumberToString(15, 16)); // F
console.log(NumberToString(10, 2)); // 1010