---
pageTitle: দুটি শব্দের তুলনা, ধনাত্মক, ঋণাত্মক, জোড়, বিজোড় সংখা নির্নয় - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: দুটি শব্দের তুলনা, ধনাত্মক, ঋণাত্মক, জোড়, বিজোড় সংখা নির্নয়
description: দুটি শব্দের তুলনা, ধনাত্মক, ঋণাত্মক, জোড়, বিজোড় সংখা নির্নয়
---

## প্রোগ্রামিং সমস্যাসমুহ

## দুটি শব্দের তুলনা (1)

দুটি শব্দ দেওয়া আছে স্ট্রিং (string) আকারে, শব্দ দুটি সমান কিনা তা আমাদের পরীক্ষা করতে হবে।

### ইনপুট আউটপুট

```json
ইনপুট: "cake", "cake"
আউটপুট: "yes"

ইনপুট: "god", "dog"
আউটপুট: "no"
```

### সমস্যার বিস্তারিত ব্যাখ্যা (1)

আমদের ইনপুট হিসাবে দুটি শব্দ (স্ট্রিং) দেওয়া থাকবে। আমদের একটি প্রোগ্রাম লিখতে হবে যা দুটি শব্দকে (স্ট্রিং) তুলনা করবে।

- এখন শব্দ (স্ট্রিং) দুটি একই হলে আমাদের প্রোগ্রাম রিটার্ন করবে: `yes`
- আর শব্দ (স্ট্রিং) দুটি ভিন্ন হলে রিটার্ন করবে: `no`

### নিজে সমাধান করি

প্রথমে আমরা সমস্যাটির সমাধান নিজে করার চেষ্টা করি নীচের কোড এডিটরে।

### সমাধান (1)

```js
function compareStrings(string1, string2) {
  if (string1 === string2) {
    return 'Yes';
  } else {
    return 'No';
  }
}
```

{% CodeEditor title="সমাধান (1)" template="test-runner-js" boilerplateCategory="course" boilerplate="learn-problem-solving-basic:2-two-string-solution-1"/%}

### টাইম কমপ্লেক্সিটি (1)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখনে কোন লুপ ব্যবহার করি নি। এই সমাধানে শুধু মান অ্যাসাইন করেছি।

> O(1)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ (1)

#### Blogs:

- [Compare Strings](https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/compare-strings-1-1cb66e03/)
- [Comparing two strings ](https://www.geeksforgeeks.org/comparing-two-strings-cpp/)

#### Videos:

- [Javascript == vs ===](https://www.youtube.com/watch?v=a0S1iG3TgP0)

---

## ধনাত্মক ঋণাত্মক সংখ্যা নির্নয় (2)

একটি সংখা দেওয়া আছে। এখন সংখ্যাটি ধনাত্মক, ঋণাত্মক বা শূন্য কিনা তা পরীক্ষা করতে হবে।

### ইনপুট আউটপুট

```json
ইনপুট: "5"
আউটপুট: "positive"

ইনপুট: "-3"
আউটপুট: "negative"

ইনপুট: "0"
আউটপুট: "zero"
```

### সমস্যার বিস্তারিত ব্যাখ্যা (2)

আমদের ইনপুট হিসাবে একটি সংখা `number` দেওয়া হবে। আমদের একটি প্রোগ্রাম লিখতে হবে যা সংখ্যাটি তুলনা করে নীচের শর্ত অনুযায়ী আউটপুট রিটার্ন করবে:

- `number` যদি ধনাত্মক (positive) বা শূন্য থেকে বড় হয়, তাহলে রিটার্ন করবে: `positive`
- অথবা `number` যদি ধনাত্মক (positive) বা শূন্য থেকে ছোট হয়, তাহলে রিটার্ন করবে: `negative`
- অথবা `number` যদি শূন্য (zero) হয়, তাহলে রিটার্ন করবে: `zero`

### সমাধান (1)

```js
function checkNumber(number) {
  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
```

### টাইম কমপ্লেক্সিটি (1)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখনে কোন লুপ ব্যবহার করি নি। এই সমাধানে শুধু মান অ্যাসাইন করেছি।

> O(1)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ (2)

#### Blogs:

- [Javascript Math.sign() Function](https://www.geeksforgeeks.org/javascript-math-sign-function/)
- [Check if Value is Negative or Positive Number in JavaScript ](https://bobbyhadz.com/blog/javascript-check-if-value-is-negative-number)
- [Given number is Negative or Positive in JavaScript](https://www.encodedna.com/javascript/how-to-check-if-a-number-positive-or-negative-in-javascript.htm)

---

## বিজোড় জোড় নির্নয় (3)

প্রদত্ত সংখ্যাটি বিজোড় বা জোড় কিনা তা পরীক্ষা করুন

### ইনপুট আউটপুট

```json
ইনপুট: "4"

আউটপুট: "even"

ইনপুট: "1"

আউটপুট: "odd"
```

### সমস্যার বিস্তারিত ব্যাখ্যা (3)

আমদের ইনপুট হিসাবে একটি নাম্বার `number` দেওয়া হবে। আমদের একটি প্রোগ্রাম লিখতে হবে যা রিটার্ন করবে `number` জোড় (even) নাকি বিজোড় (odd)।

### সমাধান (1)

```js
function checkOddEven(number) {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
```

```js
function checkOddEven(number) {
  const result = number % 2 == 0 ? 'even' : 'odd';

  return result;
}
```

### টাইম কমপ্লেক্সিটি (1)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখনে কোন লুপ ব্যবহার করি নি। এই সমাধানে শুধু মান অ্যাসাইন করেছি।

> O(1)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ (3)

#### Blogs:

- [How to determine if a number is odd or even in JavaScript?](https://www.tutorialspoint.com/How-to-determine-if-a-number-is-odd-or-even-in-JavaScript)
- [Testing whether a value is odd or even](https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even)

#### Videos:

- [JavaScript Program to Check a Number for Even or Odd](https://www.youtube.com/watch?v=NmIbmXTDbUc)
