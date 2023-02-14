---
pageTitle: প্যালিনড্রোম নম্বর - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: প্যালিনড্রোম নম্বর
description: একটি পূর্ণসংখ্যা x দেওয়া আছে, x একটি প্যালিনড্রোম হলে সত্য এবং অন্যথায় মিথ্যা ফেরত দিতে হবে।
---

## প্রোগ্রামিং সমস্যা

একটি পূর্ণসংখ্যা x দেওয়া আছে, x একটি প্যালিনড্রোম হলে সত্য এবং অন্যথায় মিথ্যা ফেরত দিতে হবে।

### ইনপুট আউটপুট

```json
ইনপুটঃ x = 121
আউটপুটঃ true

ইনপুটঃ -121
আউটপুটঃ false

```

## সমস্যার বিস্তারিত ব্যাখ্যা:

একটি পূর্ণসংখ্যা `x` দেওয়া আছে, `x` সংখ্যাটি প্যালিনড্রোম কিনা তা বের করতে হবে।

প্যালিনড্রোম হল এমন কিছু বিশেষ শব্দ আর সংখ্যা যার আরম্ভ বা শেষ দুদিক থেকেই পড়লে শব্দের উচ্চারণ আর অর্থের কোন বদল হয় না; বা সংখ্যার মান একই থাকে (সংখ্যার ক্ষেত্রে)।

- `x` সংখ্যাটি প্যালিনড্রোম হলে আউটপুট হবেঃ `true`
- `x` সংখ্যাটি প্যালিনড্রোম না হলে আউটপুট হবেঃ `false`

## সমাধান (1)

```js
const isPalindrome = (x) => {
  if (x >= 0) {
    const n = x.toString().split('').reverse().join('');
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

var isPalindrome = (x) => {
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
