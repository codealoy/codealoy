---
pageTitle: একটি সাজানো অ্যারের বর্গক্ষেত্র - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: একটি সাজানো অ্যারের বর্গক্ষেত্র
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

একটি সাজানো অ্যারে সংখ্যা দেওয়া হয়েছে, প্রতিটি সংখ্যার বর্গক্ষেত্রের একটি অ্যারেতে সাজানো ভাবে ফেরত দিতে হবে।

**ইনপুট**: `[-4,-1,0,3,10]`

**আউটপুট**: `[0,1,9,16,100]`

**ইনপুট**: `[-7,-3,2,3,11]`

**আউটপুট**: `[4,9,9,49,121]`

## সমস্যার বিস্তারিত ব্যাখ্যা:

একটি সাজানো অ্যারে সংখ্যা দেওয়া হয়েছে, প্রতিটি সংখ্যার বর্গক্ষেত্রের একটি অ্যারেতে সাজানো ভাবে ফেরত দিতে হবে।

## সমাধান (1)

```js
var sortedSquares = function (nums) {
  return nums.map((val) => val * val).sort((a, b) => a - b);
};
```

### টাইম কমপ্লেক্সিটি (1)

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
const sortedSquares = (nums) => {
  const sorted = new Array(nums.length);

  let start = 0;
  let end = sorted.length - 1;

  for (let insert = end; insert >= 0; insert--) {
    const squaredStart = Math.pow(nums[start], 2);
    const squaredEnd = Math.pow(nums[end], 2);

    if (squaredStart > squaredEnd) {
      sorted[insert] = squaredStart;
      start++;
    } else {
      sorted[insert] = squaredEnd;
      end--;
    }
  }

  return sorted;
};
```

### টাইম কমপ্লেক্সিটি (2)

> O(n)

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

---
