---
pageTitle: অ্যারেতে একটি উপাদানের অবস্থান - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: অ্যারেতে একটি উপাদানের অবস্থান
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

একটি সাজানো অ্যারে এবং একটি লক্ষ্য মান দেওয়া হয়েছে, লক্ষ্যটি পাওয়া গেলে ইনডেক্স নাম্বারটি ফেরত দিতে হবে। যদি ইনডেক্স নাম্বারটি না থাকে, এমন ইনডেক্স ফেরত দিতে যেখানে এটি ক্রমানুসারে মানটি বসানো যাবে।

**ইনপুট**: `nums = [1,3,5,6] target = 5`

**আউটপুট**: `2`

**ইনপুট**: `nums = [1,3,5,6], target = 2`

**আউটপুট**: `1`

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি সংখ্যা দেওয়া হবে। এই সংখ্যাটির ফিবোনাচি সিরিজ বের করতে হবে।

## সমাধান (1)

```js
const findElement = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
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
