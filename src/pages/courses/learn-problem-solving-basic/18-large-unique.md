---
pageTitle: একটি অ্যারের মধ্যে বৃহত্তম তিনটি স্বতন্ত্র উপাদান   - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: একটি অ্যারের মধ্যে বৃহত্তম তিনটি স্বতন্ত্র উপাদান
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

একটি অ্যারে দেওয়া হবে, আমদের বৃহত্তম তিনটি উপাদান বের করতে হবে।

**ইনপুট**: `[10, 4, 3, 50, 23, 90]`

**আউটপুট**: `[90, 50, 23]`

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি অ্যারে দেওয়া থাকবে। ওই অ্যারের মধ্যে বৃহত্তম তিনটি উপাদান বের করতে হবে।

## সমাধান (1)

```js
function print3largest(arr) {
  let n = arr.length;
  let first, second, third;

  if (arr_size < 3) {
    document.write(' Invalid Input ');
    return;
  }

  third = first = second = Number.MIN_VALUE;
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) third = arr[i];
  }
}
```

### টাইম কমপ্লেক্সিটি (1)

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
function find3largest(arr) {
  arr.sort((a, b) => a - b);

  let check = 0,
    count = 1;

  for (let i = 1; i <= arr.length; i++) {
    if (count < 4) {
      if (check != arr[arr.length - i]) {
        document.write(arr[arr.length - i] + ' ');
        check = arr[arr.length - i];
        count++;
      }
    } else break;
  }
}
```

### টাইম কমপ্লেক্সিটি (2)

> O(n)

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

---
