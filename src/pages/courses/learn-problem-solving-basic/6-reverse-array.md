---
pageTitle: বিপরীত অ্যারে - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: একটি অ্যারেকে বিপরীত অ্যারেতে রূপান্তর
description: আমদের একটি অ্যারে দেওয়া হবে। আমদের এমন একটি প্রোগ্রাম লেখতে হবে যা প্রদও অ্যারেটির বিপরীত অ্যারে রিটার্ন করে।
---

## প্রোগ্রামিং সমস্যা

আমদের একটি অ্যারে দেওয়া হবে। আমদের এমন একটি প্রোগ্রাম লেখতে হবে যা প্রদও অ্যারেটির বিপরীত অ্যারে রিটার্ন করে।

### ইনপুট আউটপুট

```json
ইনপুটঃ [1, 2, 3, 4, 5]
আউটপুটঃ [5, 4, 3, 2, 1]

ইনপুটঃ [1, 3, 2, 1]
আউটপুটঃ [1, 2, 3, 1]
```

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি অ্যারে (array) দেওয়া হবে। ওই অ্যারের সব উপাদান গুলোকে উপাদানগুলিকে বিপরীত করাতে হবে। এখন যদি আমরা ইনপুট হিসাবে `[1,3,2,1]` অ্যারে নেয়। তাহলে অউটপুট হবে `[1, 2, 3, 1]`।

- এই প্রোগ্রামের অউটপুট ইনপুট অ্যারেটির বিপরীত অ্যারে

## সমাধান (1)

```js
function reverseElements(array) {
  const reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    const valueAtIndex = array[i];

    reversedArray.push(valueAtIndex);
  }
  return reversedArray;
}
```

### টাইম কমপ্লেক্সিটি (1)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখনে একটি লুপ ব্যবহার করেছি।

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
function reverseElements(array) {
  const reversed = [...array].reverse();

  return reversed;
}
```

### টাইম কমপ্লেক্সিটি (2)

> O(n)

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ

#### Blogs:

- [Write a program to reverse an array or string](https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/)
- [JavaScript Array reverse()](https://www.w3schools.com/jsref/jsref_reverse.asp)
- [How can I reverse an array in JavaScript without using libraries?](https://stackoverflow.com/questions/10168034/how-can-i-reverse-an-array-in-javascript-without-using-libraries)

#### Videos:

- [6 ways to Reverse Array in JavaScript](https://www.youtube.com/watch?v=0TylewLMA5A)
- [How to Reverse a String in JavaScript Without Using the Reverse Array Method](https://www.youtube.com/watch?v=GqlaV-n5dP0)

---
