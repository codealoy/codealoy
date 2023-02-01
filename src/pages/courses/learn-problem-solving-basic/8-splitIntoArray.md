---
pageTitle: সংখ্যাগুলিকে সংখ্যায় ভাগ - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: সংখ্যাগুলিকে সংখ্যায় ভাগ
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

আমদের একটি সংখ্যা দেওয়া হবে। আমদের কাজ হল সংখ্যাকে পৃথক সংখ্যায় ভাগ করা।

**ইনপুট**: `12`

**আউটপুট**: `1 2`

**ইনপুট**: `26`

**আউটপুট**: `2 6`

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি সংখ্যা দেওয়া হবে। ওই সংখ্যাকে আলাদা করে প্রিন্ট করতে হবে। এখন যদি আমরা ইনপুট হিসাবে `12` নেয়। তাহলে অউটপুট হবে `1 2`।

## সমাধান (1)

```js
function splitIntoArray(str) {
  const arr = String(number)
    .split('')
    .map((str) => Number(str));
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

---
