---
pageTitle: একক সংখ্যা  - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: একক সংখ্যা
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

একটি অ্যারের মধ্যে একক সংখ্যা বের করতে হবে।

**ইনপুট**: `[2,2,1]`

**আউটপুট**: `1`

**ইনপুট**: `[4,1,2,1,2]`

**আউটপুট**: `4`

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি অ্যারে দেওয়া থাকবে। ওই অ্যারের মধ্যে একক সংখ্যা বের করতে হবে।

## সমাধান (1)

```js
var singleNumber = function (nums) {
  if (nums.length < 2) return nums[0];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
        i++;
      }
    }
    if (count === 0) {
      return nums[i];
    }
  }
  return nums[nums.length - 1];
};
```

### টাইম কমপ্লেক্সিটি (1)

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
const findElement = (nums, target) => {
  let lo = 0,
    hi = nums.length;
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (target > nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};
```

### টাইম কমপ্লেক্সিটি (2)

> O(log n)

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

---
