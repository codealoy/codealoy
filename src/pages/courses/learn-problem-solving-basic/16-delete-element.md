---
pageTitle: সাজানো অ্যারে থেকে সদৃশ সরান - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: সাজানো অ্যারে থেকে সদৃশ সরান
description: একটি অ্যারের এলেমেন্ট গুলোর মধ্যে একই সংখ্যা দুইবার আছে এমন এলেমেন্ট গুলো বাদ দিতে হবে ।
---

## প্রোগ্রামিং সমস্যা

একটি অ্যারের এলেমেন্ট গুলোর মধ্যে একই সংখ্যা দুইবার আছে এমন এলেমেন্ট গুলো বাদ দিতে হবে ।

### ইনপুট আউটপুট

```json
ইনপুটঃ [2, 2, 2, 2, 2]
আউটপুটঃ [2]

ইনপুটঃ [1, 2, 2, 3, 4, 4, 4, 5, 5]`
আউটপুটঃ [1, 2, 3, 4, 5]

```

## সমস্যার বিস্তারিত ব্যাখ্যা:

ইনপুট হিসাবে একটি অ্যারে দেওয়া আছে। এমন একটি প্রোগ্রাম লেখতে হবে যেন কোন একই উপদান অ্যারেতে না থাকে।

- আউটপুট এমন একটা অ্যারে যেন কোন উপাদান দুইবার না থাকে

## সমাধান (1)

```js
function removeDuplicates(arr) {
  var unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
```

### টাইম কমপ্লেক্সিটি (1)

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
function removeDuplicates(arr) {
  var unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
```

### টাইম কমপ্লেক্সিটি (2)

> O(n)

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

---

## সমাধান (3)

```js
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

```js
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
```

### আনুষাঙ্গিক রিসোর্সসমুহ

#### Blogs:

- [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- [Remove duplicates from sorted array](https://www.geeksforgeeks.org/remove-duplicates-sorted-array/)
- [Remove Duplicates from Sorted Array](https://favtutor.com/blogs/remove-duplicates-from-sorted-array)

#### Videos:

- [Remove Duplicates from Sorted Array](https://www.youtube.com/watch?v=VtX4oVMXaMM)
- [Remove Duplicates from Sorted Array](https://www.youtube.com/watch?v=czmqWvTeR-Y)

---
