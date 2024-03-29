---
pageTitle: অঙ্কের যোগফল - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: অঙ্কের যোগফল
description: আমাদের একটি সংখ্যা দেওয়া হবে। আমাদের কাজ হল অঙ্কের যোগফল খুঁজে বের করা।
---

## প্রোগ্রামিং সমস্যা

আমাদের একটি সংখ্যা দেওয়া হবে। আমাদের কাজ হল অঙ্কের যোগফল খুঁজে বের করা।

### ইনপুট আউটপুট

```json
ইনপুটঃ 12
আউটপুটঃ 3

ইনপুটঃ 345
আউটপুটঃ 12

```

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি সংখ্যা দেওয়া হবে। এমন একটি প্রোগ্রাম লেখতে হবে যা রিটার্ন করবে ইনপুট এর সংখ্যার প্রতিটি অঙ্কের যোগফল। ইনপুট সংখ্যাটি 345 হলে আউটপুট হবে 12। যা 3, 4 ও 5 এর যোগফল।

## সমাধান (1)

```js
const getSum = (n) => {
  let remainder;
  let sumOfDigits = 0;
  while (n) {
    remainder = n % 10;
    sumOfDigits = sumOfDigits + remainder;
    n = Math.floor(n / 10);
  }
  return sumOfDigits;
};
```

### টাইম কমপ্লেক্সিটি (1)

এই পদ্ধতির টাইম কমপ্লেক্সিটি হল, যেখানে m হল অ্যারে 1-এর উপাদানের সংখ্যা এবং n হল অ্যারে 2-এর উপাদানগুলির সংখ্যা৷

> O(m + n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
const getSum = (n) => {
  const sum = n
    .toString()
    .split('')
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);
  return sum;
};
```

### টাইম কমপ্লেক্সিটি (2)

>

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ

#### Blogs:

- [Program for Sum of the digits of a given number](https://www.geeksforgeeks.org/program-for-sum-of-the-digits-of-a-given-number/)
- [JavaScript Program to Add Digits of a Number](https://www.scaler.com/topics/sum-of-digits-in-javascript/)
- [Sum all the digits of a number Javascript](https://stackoverflow.com/questions/38334652/sum-all-the-digits-of-a-number-javascript)

#### Videos:

- [Sum Of Digits](https://www.youtube.com/watch?v=q0N5Kro96kI)
- [Find Sum of Digits of a Number in JavaScript using While loop](https://www.youtube.com/watch?v=9QdF47ejKLM)

---
