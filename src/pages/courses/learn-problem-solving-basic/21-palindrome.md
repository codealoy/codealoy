---
pageTitle: প্যালিনড্রোম নম্বর - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: প্যালিনড্রোম নম্বর
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

একটি পূর্ণসংখ্যা x দেওয়া আছে, x একটি প্যালিনড্রোম হলে সত্য এবং অন্যথায় মিথ্যা ফেরত দিতে হবে।

**ইনপুট**: `x = 121`

**আউটপুট**: `true`

**ইনপুট**: `x = -121`

**আউটপুট**: `false`

## সমস্যার বিস্তারিত ব্যাখ্যা:

একটি পূর্ণসংখ্যা x দেওয়া আছে, x একটি প্যালিনড্রোম হলে সত্য এবং অন্যথায় মিথ্যা ফেরত দিতে হবে।

## সমাধান (1)

```js
var isPalindrome = function (x) {
  if (x >= 0) {
    var n = x.toString().split('').reverse().join('');
    console.log(n);
    if (n == x) {
      return true;
    }
  }
  return false;
};
```

### টাইম কমপ্লেক্সিটি (1)

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
const reverse = (x) => {
  let reverse = [];
  let reverseDigit = 0;
  while (x !== 0) {
    let digit = x % 10;
    x = Math.trunc(x / 10);

    reverse.push(digit);
  }
  for (let i = 0; i < reverse.length; i++) {
    let finalDigit = reverse[i] * 10 ** (reverse.length - (i + 1));
    reverseDigit = finalDigit + reverseDigit;
  }
  if (2147483647 < reverseDigit) {
    return 0;
  }
  if (-2147483648 > reverseDigit) {
    return 0;
  }

  return reverseDigit;
};

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  const array = reverse(x);
  console.log(array, x);

  if (array === x) {
    return true;
  } else {
    return false;
  }
};
```

### টাইম কমপ্লেক্সিটি (2)

> O(n)

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

---
