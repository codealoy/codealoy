---
pageTitle: বিপরীত স্ট্রিং - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: একটি স্ট্রিং বিপরীত স্ট্রিং এ রূপান্তর
description: আমদের একটি স্ট্রিং (string) দেওয়া হবে। আমদের কাজ হল স্ট্রিংকে বিপরীত করা এবং এটি মুদ্রণ করা।
---

## প্রোগ্রামিং সমস্যা

আমদের একটি স্ট্রিং (string) দেওয়া হবে। আমদের কাজ হল স্ট্রিংকে বিপরীত করা এবং এটি মুদ্রণ করা।

### ইনপুট আউটপুট

```json
ইনপুটঃ flipkart
আউটপুটঃ trakpilf

ইনপুটঃ abcde
আউটপুটঃ edcba
```

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি স্ট্রিং (string) দেওয়া হবে। ওই স্ট্রিংকে বিপরীত দিক থেকে প্রিন্ট করতে হবে। এখন যদি আমরা ইনপুট হিসাবে `flipkart` নেয়। তাহলে অউটপুট হবে `trakpilf`।

- এই প্রোগ্রামের আউটপুট হবে ইনপুট স্ট্রিং এর বিপরীত স্ট্রিং

## সমাধান (1)

```js
function reverseString(string) {
  return string.split('').reverse().join('');
}
reverseString('hello');
```

### টাইম কমপ্লেক্সিটি (1)

যেহেতু এগুলি অন্তর্নির্মিত পদ্ধতি (inbuilt methods), তাই আমরা 100% নিশ্চিত হতে পারি না জাভাস্ক্রিপ্ট কীভাবে তাদের পরিচালনা করছে তা সম্পর্কে । কিন্তু যেহেতু `reverse()` একটি অ্যারের মাধ্যমে ট্রাভার্সিং জড়িত, এটি সম্ভবত O(n) এর সময় জটিলতা রয়েছে।

> O(n)

---

## সমাধান (2)

```js
function reverseString(string) {
  var newString = '';
  for (var i = string.length - 1; i >= 0; i--) newString += string[i];
  return newString;
}
```

### টাইম কমপ্লেক্সিটি (2)

> O(n)

### আনুষাঙ্গিক রিসোর্সসমুহ

#### Blogs:

- [Write a program to reverse an array or string](https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/)
- [How can I reverse an array in JavaScript without using libraries?](https://stackoverflow.com/questions/10168034/how-can-i-reverse-an-array-in-javascript-without-using-libraries)

#### Videos:

- [6 ways to Reverse Array in JavaScript](https://www.youtube.com/watch?v=0TylewLMA5A)
- [How to Reverse a String in JavaScript Without Using the Reverse Array Method](https://www.youtube.com/watch?v=GqlaV-n5dP0)

---
