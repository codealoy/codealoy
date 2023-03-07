---
pageTitle: একটি সংখ্যার গুণনীয়ক - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: একটি সংখ্যার গুণনীয়ক
description: একটি পূর্ণসংখ্যা x দেওয়া আছে, x একটি প্যালিনড্রোম হলে সত্য এবং অন্যথায় মিথ্যা ফেরত দিতে হবে।
---

## প্রোগ্রামিং সমস্যা

আমাদের দুটি সংখ্যা 'N' এবং 'X' দেওয়া হবে। আমাদের কাজ হল 'X' 'N' এর একটি ফ্যাক্টর কিনা তা পরীক্ষা করা।

### ইনপুট আউটপুট

```json
ইনপুটঃ  10 2
আউটপুটঃ  yes

ইনপুটঃ 10 3
আউটপুটঃ  no


```

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমাদের দুটি সংখ্যা `n` এবং `x` দেওয়া হবে। আমদের এমন একটি প্রোগ্রাম লেখতে হবে যা রিটান করবে `n` সংখ্যাটি `x` এর গুণনীয়ক কি না।

`n` কে `x` দিয়ে ভাগ করে ভাগফল শূন্য হলে তাকে গুণনীয়ক বলা হয়।

- `n` সংখ্যাটি `x` এর গুণনীয়ক হলে আউটপুট হবেঃ `yes`
- `n` সংখ্যাটি `x` এর গুণনীয়ক না হলে আউটপুট হবেঃ `no`

## সমাধান (1)

```js
const isPowerOfTwo = (n) => {
  if (n == 0) {
    return 'yes';
  }
  while (n != 1) {
    if (n % 2 != 0) {
      return 'yes';
    }
    n = n / 2;
  }
  return 'no';
};
```

### টাইম কমপ্লেক্সিটি (1)

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ

#### Blogs:

- [JavaScript Program to Find the Factors of a Number](https://www.programiz.com/javascript/examples/factors-number)
- [Compute the factors of a positive integer](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-13.php)
- [Find factors of a number in JS](https://stackoverflow.com/questions/22130043/trying-to-find-factors-of-a-number-in-js)

#### Videos:

- [Factorialize a Number in JavaScript](https://www.youtube.com/watch?v=GILypEIcMQM)
- [JavaScript Program to Find the Factorial of a Number ](https://www.youtube.com/watch?v=oYc8EpNIiZA)

---
