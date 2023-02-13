---
pageTitle: অঙ্কের যোগফল - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: অঙ্কের যোগফল
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

আমাদের একটি সংখ্যা দেওয়া হবে। আমাদের কাজ হল অঙ্কের যোগফল খুঁজে বের করা।

**ইনপুট**: `[3, 9, 10, 18, 23] [5, 12, 15, 20, 21, 25]`

**আউটপুট**: `[3, 5, 9, 10, 12, 15, 18, 20, 21, 23, 25]`

**ইনপুট**: `248`

**আউটপুট**: `842`

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি সংখ্যা দেওয়া হবে। এই সংখ্যাটিকে উল্টোদিক থেকে প্রিন্ট করতে হবে। এখন যদি আমরা ইনপুট হিসাবে `451` নেয়। তাহলে অউটপুট হবে `154`।

## সমাধান (1)

```js
const mergeSortedArrays = (arr1, arr2) => {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
};
```

### টাইম কমপ্লেক্সিটি (1)

এই পদ্ধতির টাইম কমপ্লেক্সিটি হল, যেখানে m হল অ্যারে 1-এর উপাদানের সংখ্যা এবং n হল অ্যারে 2-এর উপাদানগুলির সংখ্যা৷

> O(m + n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
function mergeSortedArray(a, b) {
  var tempArray = [];
  while (a.length || b.length) {
    if (typeof a[0] === 'undefined') {
      tempArray.push(b[0]);
      b.splice(0, 1);
    } else if (a[0] > b[0]) {
      tempArray.push(b[0]);
      b.splice(0, 1);
    } else {
      tempArray.push(a[0]);
      a.splice(0, 1);
    }
  }
  return tempArray;
}
```

### টাইম কমপ্লেক্সিটি (2)

>

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

---

## সমাধান (3)

```js
function mergeSortedArray(a, b) {
  let newArray = [...a, ...b].sort();
  return newArray;
}
```

### টাইম কমপ্লেক্সিটি (3)

>

---
