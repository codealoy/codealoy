---
pageTitle: সাজানো অ্যারে থেকে সদৃশ সরান - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: সাজানো অ্যারে থেকে সদৃশ সরান
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

একটি অ্যারের এলেমেন্ট গুলোর মধ্যে একই সংখ্যা দুইবার আছে এমন এলেমেন্ট গুলো বাদ দিতে হবে ।

**ইনপুট**: `[2, 2, 2, 2, 2]`

**আউটপুট**: `[2]`

**ইনপুট**: `[1, 2, 2, 3, 4, 4, 4, 5, 5]`

**আউটপুট**: `[1, 2, 3, 4, 5]`

## সমস্যার বিস্তারিত ব্যাখ্যা:

একটি অ্যারের এলেমেন্ট গুলোর মধ্যে একই সংখ্যা দুইবার আছে এমন এলেমেন্ট গুলো বাদ দিতে হবে ।

## সমাধান (1)

```js
function removeDuplicates(arr) {
  var unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
```

### টাইম কমপ্লেক্সিটি (1)

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
function removeDuplicates(arr) {
  var unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
```

### টাইম কমপ্লেক্সিটি (2)

> O(n)

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

---

## সমাধান (3)

```js
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

```js
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
```

---
