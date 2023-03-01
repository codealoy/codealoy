---
pageTitle: সংখ্যাগুলিকে পৃথক সংখ্যায় ভাগ - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: সংখ্যাগুলিকে পৃথক সংখ্যায় ভাগ করতে হবে
description: সংখ্যাগুলিকে পৃথক সংখ্যায় ভাগ করতে হবে
---

## প্রোগ্রামিং সমস্যা

আমদের একটি সংখ্যা দেওয়া হবে। আমদের কাজ হল সংখ্যাকে পৃথক সংখ্যায় ভাগ করা।

### ইনপুট আউটপুট

```json
ইনপুটঃ 12
আউটপুটঃ 1 2

ইনপুটঃ 26
আউটপুটঃ 2 6
```

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি সংখ্যা দেওয়া হবে। ওই সংখ্যাকে আলাদা করে প্রিন্ট করতে হবে। এখন যদি আমরা ইনপুট হিসাবে `12` নেয়। তাহলে অউটপুট হবে `1 2`।

- ইনপুট দুইটি ডিজিটের একটি সংখ্যা হবে এবং প্রোগ্রামের অউটপুট হবে আলাদা দুইটি ডিজিট।

## সমাধান (1)

```js
function splitIntoArray(string) {
  const arr = String(number)
    .split('')
    .map((string) => Number(string));
  return arr;
}
```

---

## সমাধান (2)

```js
function splitIntoArray(string) {
  return Array.from(String(num), Number);
}
```

---

## সমাধান (3)

```js
var arr = [];
var str = String(n);
for (var i = 0; i < str.length; i++) {
  arr.push(Number(str[i]));
}
```

### টাইম কমপ্লেক্সিটি (3)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখানে একটি লুপ ব্যবহার করেছি।

> O(n)

### আনুষাঙ্গিক রিসোর্সসমুহ

#### Blogs:

- [JavaScript Number Split into individual digits](https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits)
- [How to split JavaScript Number into individual digits?](https://www.tutorialspoint.com/How-to-split-JavaScript-Number-into-individual-digits)
- [Split a number into individual digits using JavaScript](https://www.geeksforgeeks.org/split-a-number-into-individual-digits-using-javascript/)

#### Videos:

- [Split Method | String Object In JavaScript](https://www.youtube.com/watch?v=couYPD-SYww)
- [Split Method in JavaScript](https://www.youtube.com/watch?v=pw-abDbp_IU)
- [9 ways to convert string into a number in JavaScript | JavaScript Tutorials](https://www.youtube.com/watch?v=GNB92jM8-7o)

---
