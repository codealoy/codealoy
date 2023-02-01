---
pageTitle: বিপরীত অ্যারে - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: বিপরীত অ্যারে
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

আমদের একটি অ্যারে দেওয়া হবে। আমদের কাজ হল উপাদানগুলিকে বিপরীত করা এবং এটি মুদ্রণ করা।

**ইনপুট**: `[1, 2, 3, 4, 5]`

**আউটপুট**: `[5, 4, 3, 2, 1]`

**ইনপুট**: `[1, 3, 2, 1]`

**আউটপুট**: `[1, 2, 3, 1]`

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি অ্যারে (array) দেওয়া হবে। ওই অ্যারের সব উপাদান গুলোকে উপাদানগুলিকে বিপরীত করাতে হবে। এখন যদি আমরা ইনপুট হিসাবে `[1,3,2,1]` অ্যারে নেয়। তাহলে অউটপুট হবে `[1, 2, 3, 1]`।

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

---
