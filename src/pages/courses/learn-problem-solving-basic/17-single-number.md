---
pageTitle: একক সংখ্যা  - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: একক সংখ্যা
description: একটি অ্যারের মধ্যে একক সংখ্যা বের করতে হবে।
---

## প্রোগ্রামিং সমস্যা

একটি অ্যারের মধ্যে একক সংখ্যা বের করতে হবে।

**ইনপুট**: `[2,2,1]`

**আউটপুট**: `1`

**ইনপুট**: `[4,1,2,1,2]`

**আউটপুট**: `4`

## ইনপুট আউটপুট

```json
ইনপুটঃ [2,2,1]
আউটপুটঃ 1

ইনপুটঃ [4,1,2,1,2]`
আউটপুটঃ 4

```

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি অ্যারে দেওয়া থাকবে। ওই অ্যারের মধ্যে যে উপাদানটি শুধুমাত্র একবার আছে টা ফেরত দিতে হবে।

## সমাধান (1)

```js
var singleNumber = (nums) => {
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
cosnt singleNumber= (nums) => {
  if (nums.length === 1) return nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
  return null;
}
```

### টাইম কমপ্লেক্সিটি (2)

> O(n)

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

---

# সমাধান (3)

```js
var singleNumber = (nums) => {
  const hashMap = new Map();

  nums.forEach((value) => {
    if (hashMap.has(value)) hashMap.set(value, hashMap.get(value) + 1);
    else hashMap.set(value, 1);
  });

  for (let [key, value] of hashMap) {
    if (value === 1) return key;
  }
};
```

### টাইম কমপ্লেক্সিটি (3)

> O(n)

### স্পেস কমপ্লেক্সিটি (3)

> O(1)
