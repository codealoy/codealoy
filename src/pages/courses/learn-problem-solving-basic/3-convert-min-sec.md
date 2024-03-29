---
pageTitle: মিনিটকে সেকেন্ডে রূপান্তর - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: মিনিটকে সেকেন্ডে রূপান্তর, লিপ ইয়ার, একটি অ্যারেতে প্রথম উপাদানটি ফেরত, সংখ্যাটি মৌলিক সংখ্যা কি না নির্ণয়
description: মিনিটকে সেকেন্ডে রূপান্তর, লিপ ইয়ার, একটি অ্যারেতে প্রথম উপাদানটি ফেরত, সংখ্যাটি মৌলিক সংখ্যা কি না নির্ণয়
---

## প্রোগ্রামিং সমস্যা

## মিনিটকে সেকেন্ডে রূপান্তর (1)

আমাদের ইনপুট হিসাবে মিনিট দেওয়া হবে, এমন একটি প্রোগ্রাম লেখতে হবে যা ইনপুটের মিনিটকে সেকেন্ডে রূপান্তরিত করবে।

### ইনপুট আউটপুট

```json
ইনপুটঃ 5
আউটপুটঃ 300

ইনপুটঃ 2
আউটপুটঃ 120
```

### সমস্যার বিস্তারিত ব্যাখ্যা (1)

আমদের ইনপুট হিসাবে মিনিট দেওয়া থাকবে। আমাদের মিনিটকে সেকেন্ডে রূপান্তর করতে হবে।

১ মিনিট = ৬০ সেকেন্ড। মিনিটকে সেকেন্ডে রূপান্তরিত করতে হলে মিনিটকে ৬০ দিয়ে গুন করতে হবে।

## সমাধান (1)

```js
function convertToSeconds(minutes) {
  const result = minutes * 60;
  return result;
}
```

### টাইম কমপ্লেক্সিটি (1)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখনে কোন লুপ ব্যবহার করি নি। এই সমাধানে শুধু মান অ্যাসাইন করেছি।

> O(1)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ (1)

#### Blogs:

- [JavaScript Algorithm: Convert Minutes into Seconds](https://levelup.gitconnected.com/javascript-algorithm-convert-minutes-into-seconds-4d4a0d750b6c)
- [Convert Seconds to Minutes and Seconds in JavaScript](https://bobbyhadz.com/blog/javascript-convert-seconds-to-minutes-and-seconds)

#### Videos:

- [Convert Minutes to Seconds ](https://www.youtube.com/watch?v=PGS7-6FEjrk)
- [JavaScript Program to Check a Number for Even or Odd](https://www.youtube.com/watch?v=NmIbmXTDbUc)

---

## সংখ্যাটি মৌলিক সংখ্যা কি না (2)

আমদের একটি সংখ্যা দেওয়া হবে। আমদের কাজ হল সংখ্যাটি মৌলিক সংখ্যা কি না তা পরীক্ষা করা।

### ইনপুট আউটপুট

```json
ইনপুটঃ 5
আউটপুটঃ Prime number

ইনপুটঃ 4
আউটপুটঃ Not Prime number
```

### সমস্যার বিস্তারিত ব্যাখ্যা (2)

আমদের ইনপুট হিসাবে একটি সংখ্যা `number` দেওয়া হবে। আমদের একটি প্রোগ্রাম লিখতে হবে যা রিটার্ন করবে `number` মৌলিক সংখ্যা কি না।

মৌলিক সংখ্যা বলতে যে সংখ্যাকে ১ এবং ঐ সংখ্যা ছাড়া অন্য কোন সংখ্যা দিয়ে ভাগ করা যায় না।

- `number` টি মৌলিক সংখ্যা হলে রিটার্ন করবে: `yes`
- `number` টি মৌলিক সংখ্যা না হলে রিটার্ন করবে: `no`

### সমাধান (1)

```js
function isPrime(number) {
  if (number <= 1) {
    return 'no';
  }

  for (let i = 2; i < number; i++) {
    if (n % i === 0) {
      return 'no';
    }
  }

  return 'yes';
}
```

### টাইম কমপ্লেক্সিটি (1)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখানে একটি লুপ ব্যবহার করেছি।

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

### সমাধান (2)

```js
let isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return 'no';
    }
  }

  return 'yes';
};
```

### টাইম কমপ্লেক্সিটি (2)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখানে একটি লুপ ব্যবহার করেছি, যা আমাদের ইনপুটের স্কোয়ার রুট (square root) পর্যন্ত চলবে।

> O(sqrt(n))

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ (2)

#### Blogs:

- [JavaScript: Check a number is prime or not](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php)
- [Javascript Program for Prime Numbers](https://bobbyhadz.com/blog/javascript-convert-seconds-to-minutes-and-seconds)

#### Videos:

- [Convert Minutes to Seconds ](https://www.youtube.com/watch?v=PGS7-6FEjrk)
- [JavaScript Program to Check a Number for Even or Odd](https://www.youtube.com/watch?v=NmIbmXTDbUc)

---

## লিপ ইয়ার (3)

একটি প্রদত্ত বছর অধিবর্ষ কিনা তা পরীক্ষা করার জন্য একটি প্রোগ্রাম লেখতে হবে।

### ইনপুট আউটপুট

```json
ইনপুটঃ 5
আউটপুটঃ 300

ইনপুটঃ 2
আউটপুটঃ 120
```

### সমস্যার বিস্তারিত ব্যাখ্যা (3)

আমদের ইনপুট হিসাবে একটি বছর দেওয়া হবে। একটি প্রদত্ত বছর অধিবর্ষ (Leap Year) কিনা তা পরীক্ষা করতে হবে।

অধিবর্ষ (Leap Year) হল সেই বছর যেখানে সবচেয়ে ছোট মাস, ফেব্রুয়ারির শেষে একটি অতিরিক্ত দিন যোগ করা হয়।

- প্রদত্ত বছরটি অধিবর্ষ (Leap Year) হলে রিটার্ন করবে: `true`
- প্রদত্ত বছরটি অধিবর্ষ (Leap Year) না হলে রিটার্ন করবে: `false`

### সমাধান (1)

```js
function leapyear(year) {
  if (year % 400 == 0) {
    return true;
  }

  if (year % 100 == 0) {
    return false;
  }

  if (year % 4 == 0) {
    return true;
  }
  return false;
}
```

```js
function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
```

### টাইম কমপ্লেক্সিটি (1)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখনে কোন লুপ ব্যবহার করি নি।

> O(1)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ (3)

#### Blogs:

- [JavaScript Program to Check Leap Year](https://www.programiz.com/javascript/examples/check-leap-year)
- [JavaScript: Check whether a given year is a leap year](https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php)

#### Videos:

- [Leap year Problem Solution using JavaScript](https://www.youtube.com/watch?v=xGC5DaY_TSE)
- [Leap Year Calculation in JavaScript](https://www.youtube.com/watch?v=r7FsTifBgSE)

---

## একটি অ্যারেতে প্রথম উপাদানটি ফেরত (4)

একটি প্রোগ্রাম লেখতে হবে যা একটি অ্যারের প্রথম উপাদান প্রদান করে।

### ইনপুট আউটপুট

```json
ইনপুটঃ ['a', 'b', 'c', 'd']
আউটপুটঃ a

ইনপুটঃ ['d','b', 'a','c']
আউটপুটঃ d
```

### সমস্যার বিস্তারিত ব্যাখ্যা (4)

আমদের ইনপুট হিসাবে একটি অ্যারে (array) দেওয়া থাকবে। আমদের এমন একটি ফাংশন লেখতে হবে যা অ্যারের প্রথম উপাদানটির মান (zero index value) ফেরত দেয়।

### সমাধান (1)

```js
const findFirstElement = (arr) => {
  const first = arr[0];
  return first;
};
```

```js
const findFirstElement = (arr) => {
  const first = arr.at(0);
  return first;
};
```

### টাইম কমপ্লেক্সিটি (1)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখনে কোন লুপ ব্যবহার করি নি।

> O(1)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

### সমাধান (2)

```js
const findFirstElement = (arr) => {
  const first = arr.shift();
  return first;
};
```

### টাইম কমপ্লেক্সিটি (2)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখনে কোন লুপ ব্যবহার করি নি।

> O(1)

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ (4)

#### Blogs:

- [Return the First Element in an Array](https://edabit.com/challenge/QaApgtePE6QrCZ64o)
- [JavaScript: Get the first element of an array](https://www.w3resource.com/javascript-exercises/javascript-array-exercise-3.php)

#### Videos:

- [Javascript Problem: First element in an Array](https://www.youtube.com/watch?v=jpT1bOZ8tk4)
- [Find First & Last Element in Array in JavaScript](https://www.youtube.com/watch?v=dqkvTSbujCE)
