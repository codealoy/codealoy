---
pageTitle: অ্যারের সংমিশ্রণ - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: অ্যারের সংমিশ্রণ
description: আমদের ইনপুট হিসাবে একটি অ্যারে (array) দেওয়া হবে। ওই অ্যারের সব উপাদান গুলোকে অনুলিপি (copy) করে অ্যারে ভেতর রাখতে হবে।
---

## প্রোগ্রামিং সমস্যা

N উপাদানগুলির একটি অ্যারে দেওয়া, কাজটি হল এটিকে দুবার সংযুক্ত করা, অর্থাৎ প্রদত্ত অ্যারের অনুলিপিটি নিজের সাথে যুক্ত করে 2\*N আকারের একটি অ্যারে তৈরি করা।

### ইনপুট আউটপুট

```json
ইনপুটঃ [1,2,1]
আউটপুটঃ [1,2,1,1,2,1]

ইনপুটঃ [1,3,2,1]
আউটপুটঃ [1,3,2,1,1,3,2,1]
```

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি অ্যারে (array) দেওয়া হবে। ওই অ্যারের সব উপাদান গুলোকে অনুলিপি (copy) করে অ্যারে ভেতর রাখতে হবে। এখন যদি আমরা ইনপুট হিসাবে [1,3,2,1] অ্যারে নেয়। তাহলে অউটপুট হবে [1,3,2,1,1,3,2,1]।

- এই প্রোগ্রাম একটি অ্যারের প্রতিটি উপাদানকে (element) কে ক্রম আনুসারে কপি করে ঐ অ্যারের মধ্যে নিয়ে (push) নতুন একটি অ্যারে রিটার্ন করবে।

## সমাধান (1)

```js
const getConcatenation = (array) => {
  let ans = [...array, ...array];
  return ans;
};
```

### টাইম কমপ্লেক্সিটি (1)

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
const getConcatenation = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = array[i];
    result[i + array.length] = array[i];
  }
  return result;
};
```

### টাইম কমপ্লেক্সিটি (2)

একটু লক্ষ্য করলে আমরা দেখতে পাব, আমরা এখনে একটি লুপ ব্যবহার করেছি।

> O(n)

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ (4)

#### Blogs:

- [Concatenation of Array](https://leetcode.com/problems/concatenation-of-array/)
- [JavaScript Array concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp)
- [3 Ways to Merge Arrays in JavaScript](https://dmitripavlutin.com/javascript-merge-arrays/)

#### Videos:

- [Array concat() method](https://www.youtube.com/watch?v=aUqpld_h1j8)
- [Concatenation of Array](https://www.youtube.com/watch?v=tcFx0t3p6as)
- [JavaScript Array Concat & Join](https://www.youtube.com/watch?v=0O5XeSCe5QM)

---
