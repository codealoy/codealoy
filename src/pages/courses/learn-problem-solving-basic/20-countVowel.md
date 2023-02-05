---
pageTitle: একটি স্ট্রিং মধ্যে স্বরবর্ণ গণনা - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: একটি স্ট্রিং মধ্যে স্বরবর্ণ গণনা
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

আমদের একটি স্ট্রিং 'str' দেওয়া হবে। আমদের কাজ হল 'str'-এ স্বরবর্ণের সংখ্যা খুঁজে বের করা এবং এটি প্রিন্ট করতে হবে।

**ইনপুট**: `loop`

**আউটপুট**: `2`

**ইনপুট**: `fly`

**আউটপুট**: `0`

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের একটি স্ট্রিং দেওয়া হবে। আমদের কাজ হল এ স্বরবর্ণের সংখ্যা খুঁজে বের করা এবং এটি প্রিন্ট করতে হবে।

## সমাধান (1)

```js
function countVowel(str) {
  let count = 0;

  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}
```

### টাইম কমপ্লেক্সিটি (1)

> O(n)

### স্পেস কমপ্লেক্সিটি (1)

> O(1)

---

## সমাধান (2)

```js
function getVowels(string) {
  var Vowels = 'aAeEiIoOuU';
  var vowelsCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (Vowels.indexOf(string[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
```

### টাইম কমপ্লেক্সিটি (2)

> O(n)

### স্পেস কমপ্লেক্সিটি (2)

> O(1)

---
