---
pageTitle: ফিবোনাচি সিরিজ - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: ফিবোনাচি সিরিজ
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

আমাদের একটি ধনাত্মক পূর্ণসংখ্যা 'n' দেওয়া হবে। আমাদের কাজ হল ফিবোনাচি সিরিজের প্রথম 'n' পদগুলি প্রিন্ট করা।

**ইনপুট**: `4`

**আউটপুট**: `[0 1 1 2]`

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি সংখ্যা দেওয়া হবে। এই সংখ্যাটির ফিবোনাচি সিরিজ বের করতে হবে।

## সমাধান (1)

```js
function fibonacci(num) {
  var answer = [];
  var x = 0;
  var y = 1;
  var z;

  answer.push(x);
  answer.push(y);

  var i = 2;
  while (i < num) {
    z = x + y;
    x = y;
    y = z;

    answer.push(z);
    i = i + 1;
  }
  return answer;
}
```

### টাইম কমপ্লেক্সিটি (1)

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
function fibonacci(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
```

### টাইম কমপ্লেক্সিটি (1)

> O(x<sup>2</sup>)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---
