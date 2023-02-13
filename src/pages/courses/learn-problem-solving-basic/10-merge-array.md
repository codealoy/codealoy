---
pageTitle: সাজানো অ্যারে মার্জ - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: সাজানো অ্যারে মার্জ করতে হবে
description: আমাদের দুটি সাজানো অ্যারে দেওয়া হয়েছে, আমদের এই দুইটি অ্যারেকে একত্রিত করতে হবে।
---

## প্রোগ্রামিং সমস্যা

আমাদের দুটি সাজানো অ্যারে দেওয়া হয়েছে, আমদের এই দুইটি অ্যারেকে একত্রিত করতে হবে।

### ইনপুট আউটপুট

```json
ইনপুটঃ [3, 9, 10, 18, 23] [5, 12, 15, 20, 21, 25]
আউটপুটঃ [3, 5, 9, 10, 12, 15, 18, 20, 21, 23, 25]

```

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে দুইটি অ্যারে দেওয়া হয়েছে।

- এই প্রোগ্রামের অউটপুট হবে ইনপুট দুইটি অ্যারে সকল উপাদান (elements) নিয়ে ক্রম আনুসারে সাজানো একটি নতুন অ্যারে।

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
function mergeSortedArray = (array1, array2) => {
  var tempArray = [];
  while (array1.length || array2.length) {
    if (typeof array1[0] === 'undefined') {
      tempArray.push(b[0]);
      array2.splice(0, 1);
    } else if (array1[0] > array2[0]) {
      tempArray.push(array2[0]);
      array2.splice(0, 1);
    } else {
      tempArray.push(array1[0]);
      array1.splice(0, 1);
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
function mergeSortedArray = (array1, array2) => {
  let newArray = [...array1, ...array2].sort();
  return newArray;
}
```

### টাইম কমপ্লেক্সিটি (3)

>

---
