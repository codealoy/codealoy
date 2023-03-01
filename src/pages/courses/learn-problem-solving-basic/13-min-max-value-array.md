---
pageTitle: অ্যারের সবচেয়ে বড় এবং ক্ষুদ্রতম উপাদান - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: অ্যারের সবচেয়ে বড় এবং ক্ষুদ্রতম উপাদান
description: আমাদের একটি অ্যারের মধ্যে সবচেয়ে বড় এবং ক্ষুদ্রতম উপাদান খুঁজে বের করতে হবে।
---

## প্রোগ্রামিং সমস্যা

আমাদের একটি অ্যারের মধ্যে সবচেয়ে বড় এবং ক্ষুদ্রতম উপাদান খুঁজে বের করতে হবে।

### ইনপুট আউটপুট

```json
ইনপুটঃ [5 8 10 3 2 6]
আউটপুটঃ [10, 2]

ইনপুটঃ [6 100 56 74 2 99 44]
আউটপুটঃ [100, 6]

```

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি অ্যারে দেওয়া হবে। এই অ্যারে মধ্যে সবচেয়ে বড় এবং সবচেয়ে ছোট মানের উপাদান বের করতে হবে।

## সমাধান (1)

```js
const findMaxMin = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
};
```

### টাইম কমপ্লেক্সিটি (1)

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
const minMax = (arr) => {
  let arr1 = [];
  arr1.push(Math.min(...arr));
  arr1.push(Math.max(...arr));
  return arr1;
};
```

### আনুষাঙ্গিক রিসোর্সসমুহ

#### Blogs:

- [How to get largest and smallest number in an Array?](https://www.geeksforgeeks.org/how-to-get-largest-and-smallest-number-in-an-array/)
- [Find the smallest and largest value in an array with JavaScript](https://stackoverflow.com/questions/38256170/find-the-smallest-and-largest-value-in-an-array-with-javascript)
- [How to get the highest and lowest number from an array in JavaScript?](https://dev.to/melvin2016/how-to-get-the-highest-and-lowest-number-from-an-array-in-javascript-21ml)

#### Videos:

- [Finding the Minimum or Maximum Value in an Array : JavaScript](https://www.youtube.com/watch?v=tPCOYESqQiY)
- [Find the Largest & Smallest Elem in an Array in JavaScript](https://www.youtube.com/watch?v=zahHrBdwRKY)
- [Find the largest number in an array](https://www.youtube.com/watch?v=fOFSmCjvcFY)

---
