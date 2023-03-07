---
pageTitle: n x n বক্স প্রিন্ট - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: n x n বক্স প্রিন্ট
description: আমদের ইনপুট হিসাবে একটি \* এর প্যাটান দেওয়া থাকবে।n x n বক্স প্রিন্ট
---

## প্রোগ্রামিং সমস্যা

n x n বক্স প্রিন্ট করতে হবে।

**ইনপুট**:

```
*****
*****
*****
*****
*****
```

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের ইনপুট হিসাবে একটি \* এর প্যাটান দেওয়া থাকবে।

- এই প্রোগ্রামের অউটপুট হিসাবে ইনপুট প্যাটান আবিকল প্রিন্ট করতে হবে।

## সমাধান (1)

```js
const patternStar = () => {
  let n = 5;
  let string = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      string += '*';
    }

    string += '\n';
  }
  return string;
};
```

### টাইম কমপ্লেক্সিটি (1)

> O(n^2)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

### আনুষাঙ্গিক রিসোর্সসমুহ

#### Blogs:

- [Star Pattern in javascript](https://www.tutorialstonight.com/js/javascript-star-pattern)
- [Star pattern program in JavaScript](https://www.etutorialspoint.com/index.php/678-star-pattern-program-in-javascript)

#### Videos:

- [Printing Patterns in Javascript](https://www.youtube.com/watch?v=Phderdi6VqU)
- [JavaScript Star Pattern](https://www.youtube.com/watch?v=O7E1WXuKh1U)

---
