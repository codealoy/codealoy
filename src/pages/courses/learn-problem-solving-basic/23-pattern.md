---
pageTitle: n x n বক্স প্রিন্ট - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: n x n বক্স প্রিন্ট
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

n x n বক্স প্রিন্ট

**ইনপুট**:

```
*****
*****
*****
*****
*****
```

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

---

---
