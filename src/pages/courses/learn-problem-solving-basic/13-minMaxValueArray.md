---
pageTitle: অ্যারের সবচেয়ে বড় এবং ক্ষুদ্রতম উপাদান - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: অ্যারের সবচেয়ে বড় এবং ক্ষুদ্রতম উপাদান
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

আমাদের একটি অ্যারের মধ্যে সবচেয়ে বড় এবং ক্ষুদ্রতম উপাদান খুঁজে বের করতে হবে।

**ইনপুট**: `5 8 10 3 2 6`

**আউটপুট**: `Max = 10 Min = 2`

**ইনপুট**: `6 100 56 74 2 99 44`

**আউটপুট**: `Max = 100 Min = 2`

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি সংখ্যা দেওয়া হবে। এই সংখ্যাটির ফিবোনাচি সিরিজ বের করতে হবে।

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
  return {
    min,
    max,
  };
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

---
