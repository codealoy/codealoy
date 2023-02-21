---
pageTitle: একটি স্ট্রিং মধ্যে স্বরবর্ণ গণনা - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: একটি স্ট্রিং মধ্যে স্বরবর্ণ গণনা
description: আমদের একটি স্ট্রিং 'str' দেওয়া হবে। আমদের কাজ হল 'str'-এ স্বরবর্ণের সংখ্যা খুঁজে বের করা এবং এটি প্রিন্ট করতে হবে।
---

## প্রোগ্রামিং সমস্যা

আমদের একটি স্ট্রিং 'str' দেওয়া হবে। আমদের কাজ হল 'str'-এ স্বরবর্ণের সংখ্যা খুঁজে বের করা এবং এটি প্রিন্ট করতে হবে।

### ইনপুট আউটপুট

```json
ইনপুটঃ loop
আউটপুটঃ 2

ইনপুটঃ fly
আউটপুটঃ 0

```

## সমস্যার বিস্তারিত ব্যাখ্যা:

আমদের একটি স্ট্রিং দেওয়া হবে। আমদের এমন একটি প্রোগ্রাম লেখতে হবে যা ঐ স্ট্রিং মোট কতটি স্বরবর্ণ আছে তা বের করতে হবে।

স্বরবর্ণ বলতে A, E, I, O, U, এই পাঁচটি বর্ণকে বোঝায়।

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

### আনুষাঙ্গিক রিসোর্সসমুহ

#### Blogs:

- [Program to count vowels in a string (Iterative and Recursive)](https://www.geeksforgeeks.org/program-count-vowels-string-iterative-recursive/)
- [Counting number of vowels in a string with JavaScript](https://stackoverflow.com/questions/29450399/counting-number-of-vowels-in-a-string-with-javascript)
- [Counts the number of vowels within a string](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-7.php)

#### Videos:

- [Write A Function That Will Count Vowels in a String](https://www.youtube.com/watch?v=zvaUUDQec18)
- [Counting Number of Vowels in a String with JavaScript](https://www.youtube.com/watch?v=QXQ7bKvUWcQ)

---
