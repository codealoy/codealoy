---
pageTitle: একটি সাজানো অ্যারের বর্গক্ষেত্র - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: একটি সাজানো অ্যারের বর্গক্ষেত্র
description: একটি সাজানো অ্যারে সংখ্যা দেওয়া হয়েছে, প্রতিটি সংখ্যার বর্গক্ষেত্রের একটি অ্যারেতে সাজানো ভাবে ফেরত দিতে হবে।
---

## প্রোগ্রামিং সমস্যা

একটি সাজানো অ্যারে সংখ্যা দেওয়া হয়েছে, প্রতিটি সংখ্যার বর্গক্ষেত্রের একটি অ্যারেতে সাজানো ভাবে ফেরত দিতে হবে।

### ইনপুট আউটপুট

```json
ইনপুটঃ [-4,-1,0,3,10]
আউটপুটঃ [0,1,9,16,100]

ইনপুটঃ [-7,-3,2,3,11]
আউটপুটঃ [4,9,9,49,121]

```

## সমস্যার বিস্তারিত ব্যাখ্যা:

একটি সাজানো অ্যারে সংখ্যা দেওয়া হয়েছে, প্রতিটি সংখ্যার বর্গক্ষেত্রের একটি অ্যারেতে সাজানো ভাবে ফেরত দিতে হবে।

- ইনপুট হিসাবে একটি অ্যারে `nums` দেওয়া হবে
- প্রোগ্রামটির আউটপুট হবে `nums` এর প্রতিটি উপাদানের বর্গক্ষেত্রের একটি অ্যারে

## সমাধান (1)

```js
var sortedSquares = (nums) => {
  const result = nums.map((val) => val * val).sort((a, b) => a - b);
  return result;
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

### আনুষাঙ্গিক রিসোর্সসমুহ

#### Blogs:

- [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
- [Sort array after converting elements to their squares](https://www.geeksforgeeks.org/sort-array-converting-elements-squares/)
- [Squares of a Sorted Array](https://dev.to/cod3pineapple/leetcode-977-squares-of-a-sorted-array-javascript-solution-1o33)

#### Videos:

- [SQUARES OF A SORTED ARRAY](https://www.youtube.com/watch?v=mwDKqAVVr6c)
- [Squares of Sorted Array](https://www.youtube.com/watch?v=fikdT0AI5z4)

---
