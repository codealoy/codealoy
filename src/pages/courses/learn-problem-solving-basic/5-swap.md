---
pageTitle: দুটি সংখ্যা অদলবদল - প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি
title: দুটি      সংখ্যা         অদলবদল
description: Learn to determine uniqueness of all characters in a string.
---

## প্রোগ্রামিং সমস্যা

দুটি সংখ্যা দেওয়া হয়েছে, প্রদত্ত সংখ্যাগুলি অদলবদল করার জন্য একটি প্রোগ্রাম লিখুন।

**ইনপুট**: x = 10, y = 20;

**আউটপুট**: x = 20, y = 10

## সমস্যার বিস্তারিত ব্যাখ্যা:

নে কর, তোমার কাছে তোমার প্রিয় রঙের লাল বাক্স এবং তোমার বন্ধুর কাছে একটি নীল বাক্স আছে। তোমার বাক্সে আপেল এবং তোমার বন্ধুর বাক্সে চকলেট আছে। এখন তোমরা বাক্স পরিবর্তন না করে আপেল এবং চকলেটের অদর বদল করতে চাও। তাহলে তোমরা কিভাবে তোমাদের প্রিয় রঙের বাক্স পরিবর্তন না করে তোমার লাল বাক্সে চকলেট তোমার বন্ধুর নীল বাক্সে আপেল নিতে পারো?

উপরের ঘটনা এবং আমাদের প্রোগ্রামিং সমস্যা মধ্যে বেশ মিল রয়েছে। যদি আমরা তোমার যে লাল বাক্সকে x ভেরিয়েবল এবং তোমার বন্ধুর নীল বাক্সকে y ভেরিয়েবল হিসাবে চিন্তা করি। তাহলে আপেল x ভেরিয়েবলের মান 10 এবং চকলেট y ভেরিয়েবলের মান 20 হিসেবে চিন্তা করতে হবে। আমাদের এমন একটি প্রোগ্রাম লিখতে হবে যেখানে x ভেরিয়েবলের মান y ভ্যারিয়েবলার মানের সমান এবং y ভেরিয়েবল এর মান x ভ্যারিয়েবলার মানের সমান। আমাদের প্রোগ্রাম শেষে আউটপুট হিসেবে x = 20 এবং y = 10 পাব।

যদি সমস্যা থেকে আমরা কিছু ধাপে ভাগ করি, তাহলে আমরা দেখব

- আমাদের ইনপুট হিসেবে দুটি সংখ্যা দেয়া থাকবে। উদাহরণ অনুযায়ী, আমাদের ইনপুট x = 10 এবং y = 20।
- এখন আমাদের একটা প্রোগ্রাম লিখতে হবে যেখানে ইনপুটের মান গুলো অদল বদল হয়। মানে আমাদের আউটপুট হবে x = 20 এবং y = 10।

এখন আমাদের অনেকের মনে প্রশ্ন আসতে পারে, x=y এবং y=x করলে আমাদের সমস্যার সমাধান হয়ে যাবে। কিন্তু আসলেই কি এটা সমাধান?

চলো আবার আমরা, তোমার এবং তোমার বন্ধুর গল্পে ফিরে যায়। তোমার প্রিয় লাল বাক্সটি আপেলে পরিপূর্ণ এবং তোমার বন্ধুর নীল বাক্সে চকলেট পরিপূর্ণ । এখন তুমি চাইলেও তোমার লাল বাক্সে চকলেট নিতে পারবে না কারণ তোমার বাক্সে সেই পরিমাণ জায়গায় নেই। আবার তোমার বাক্সের সব আপেল ফেলে দিয়ে চকলেট নিলে তোমার বন্ধুকে দেওয়ার মতো কিছুই থাকবে না। তোমার বন্ধুর ক্ষেত্রে বিষয়টা একই।

তারপরও চলো এই চিন্তাটিকে কোডে রূপান্তরিত করে দেখি আসলে এর আউটপুট কি হয়,

```js
function swap(x, y) {
  x = y;
  y = x;

  console.log('x= ' + x + ' y= ' + y);
}
swap(10, 20);
```

এই প্রোগ্রামের আউটপুট হবে x= 20 y= 20। এই প্রোগ্রামে আমরা x মানটি হারিয়ে ফেলেছি। তাই x এবং y মান ইনপুট এর y এর মানের সমান আসছে । এখানে, তোমার বাক্সে তোমার বন্ধুর সব চকলেট নিলে আবার তোমার বাক্সের চকলেট তোমার বন্ধুকে দিয়ে দিলে। এটা আমাদের কাঙ্খিত ফলাফল নয়।

চলো আমরা তাহলে অন্য কোন সমাধান চিন্তা করি।

{% CodeEditor template="test-runner-js" boilerplateCategory="course"  boilerplate="learn-problem-solving-basic:2-is-unique" /%}

## সমাধান (১)

এখন একটু চিন্তা করি আমরা, তোমার এবং তোমার বন্ধুর দুজনের বাক্স পরিপূর্ণ। তাই তোমরা আপেল এবং চকলেটের অদল বদল করতে পারছ না।

তার মানে কমপক্ষে যে কোন একজনের বাক্স খালি করতে হবে, তাহলে অন্য জনের বাক্সের জিনিস সেই বাক্সে নেওয়া যাবে। এক্ষেত্রে তোমাদের অন্য একটি খালি বাক্স সংগ্রহ করতে হবে। সেই বাক্সে তোমার লাল বাক্সের আপেল দিয়ে তোমার বাক্সেটি খালি করা যেতে পারে। এখন তোমার লাল বক্সে তোমার বন্ধুর চকলেট নিতে কোন অসুবিধা হবে না। তোমার বন্ধু খালি বাক্স থেকে আপেল খুব সহজেই তার নীল বাক্সে নিতে পারবে। তাহলে তোমরা তোমাদের প্রিয় রংয়ের বাক্স এবং পছন্দমত জিনিস নিয়ে বাড়ি ফিরতে পারবে।

আমাদের প্রোগ্রামিং সমস্যা সমাধানটিও আমরা ঠিক একই ভাবে করতে পারি। এই প্রোগ্রামিং সমস্যা সমাধানের ধাপগুলো চিন্তা করি,

- আমার অন্য একটি ভেরিয়েবল নেব, যার নাম দেবো temp
- x এর মান temp রাখবো
- y এর মান x এ রাখবো
- temp মান y এ রাখবো

![My animated logo]("problem-solving-img/5-swap-1.png")

```js
function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }

  return true;
}
```

### How it Works (1)

Sagittis orci a scelerisque purus semper eget duis. Sed faucibus turpis in eu mi bibendum. Orci sagittis eu volutpat odio facilisis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.

Nisi lacus sed viverra tellus in. Enim lobortis scelerisque fermentum dui faucibus in. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nulla facilisi cras fermentum odio. Sed egestas egestas fringilla phasellus.

Eget sit amet tellus cras adipiscing enim eu. Morbi tristique senectus et netus. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Augue mauris augue neque gravida in fermentum et. Justo laoreet sit amet cursus sit amet dictum sit amet. Donec enim diam vulputate ut pharetra sit amet aliquam id. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Parturient montes nascetur ridiculus mus. At imperdiet dui accumsan sit amet nulla facilisi. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Interdum posuere lorem ipsum dolor sit. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Sed nisi lacus sed viverra.

### Time Complexity (1)

Sagittis orci a scelerisque purus semper eget duis. Sed faucibus turpis in eu mi bibendum. Orci sagittis eu volutpat odio facilisis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Nisi lacus sed viverra tellus in.

Enim lobortis scelerisque fermentum dui faucibus in. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nulla facilisi cras fermentum odio. Sed egestas egestas fringilla phasellus.

Eget sit amet tellus cras adipiscing enim eu. Morbi tristique senectus et netus. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Augue mauris augue neque gravida in fermentum et. Justo laoreet sit amet cursus sit amet dictum sit amet. Donec enim diam vulputate ut pharetra sit amet aliquam id. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Parturient montes nascetur ridiculus mus:

> O(n^2)

### Space Complexity (1)

Quam quisque id diam vel quam. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Nunc sed velit dignissim sodales ut eu sem integer vitae. Nascetur ridiculus mus mauris vitae ultricies leo. Malesuada fames ac turpis egestas integer eget aliquet:

> O(1)

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Consectetur adipiscing elit.

---

## Solution (2)

Here’s the brute-force, simplest solution.

```js
function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }

  return true;
}
```

### How it Works (2)

Sagittis orci a scelerisque purus semper eget duis. Sed faucibus turpis in eu mi bibendum. Orci sagittis eu volutpat odio facilisis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.

Nisi lacus sed viverra tellus in. Enim lobortis scelerisque fermentum dui faucibus in. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nulla facilisi cras fermentum odio. Sed egestas egestas fringilla phasellus.

Eget sit amet tellus cras adipiscing enim eu. Morbi tristique senectus et netus. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Augue mauris augue neque gravida in fermentum et. Justo laoreet sit amet cursus sit amet dictum sit amet. Donec enim diam vulputate ut pharetra sit amet aliquam id. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Parturient montes nascetur ridiculus mus. At imperdiet dui accumsan sit amet nulla facilisi. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Interdum posuere lorem ipsum dolor sit. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Sed nisi lacus sed viverra.

### Time Complexity (2)

Sagittis orci a scelerisque purus semper eget duis. Sed faucibus turpis in eu mi bibendum. Orci sagittis eu volutpat odio facilisis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Nisi lacus sed viverra tellus in.

Enim lobortis scelerisque fermentum dui faucibus in. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nulla facilisi cras fermentum odio. Sed egestas egestas fringilla phasellus.

Eget sit amet tellus cras adipiscing enim eu. Morbi tristique senectus et netus. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Augue mauris augue neque gravida in fermentum et. Justo laoreet sit amet cursus sit amet dictum sit amet. Donec enim diam vulputate ut pharetra sit amet aliquam id. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Parturient montes nascetur ridiculus mus:

> O(n^2)

### Space Complexity (2)

Quam quisque id diam vel quam. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Nunc sed velit dignissim sodales ut eu sem integer vitae. Nascetur ridiculus mus mauris vitae ultricies leo. Malesuada fames ac turpis egestas integer eget aliquet:

> O(1)

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Consectetur adipiscing elit.

---

## Solution (3)

Here’s the brute-force, simplest solution.

```js
function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }

  return true;
}
```

### How it Works (3)

Sagittis orci a scelerisque purus semper eget duis. Sed faucibus turpis in eu mi bibendum. Orci sagittis eu volutpat odio facilisis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.

Nisi lacus sed viverra tellus in. Enim lobortis scelerisque fermentum dui faucibus in. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nulla facilisi cras fermentum odio. Sed egestas egestas fringilla phasellus.

Eget sit amet tellus cras adipiscing enim eu. Morbi tristique senectus et netus. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Augue mauris augue neque gravida in fermentum et. Justo laoreet sit amet cursus sit amet dictum sit amet. Donec enim diam vulputate ut pharetra sit amet aliquam id. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Parturient montes nascetur ridiculus mus. At imperdiet dui accumsan sit amet nulla facilisi. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper. Interdum posuere lorem ipsum dolor sit. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Sed nisi lacus sed viverra.

### Time Complexity (3)

Sagittis orci a scelerisque purus semper eget duis. Sed faucibus turpis in eu mi bibendum. Orci sagittis eu volutpat odio facilisis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Nisi lacus sed viverra tellus in.

Enim lobortis scelerisque fermentum dui faucibus in. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nulla facilisi cras fermentum odio. Sed egestas egestas fringilla phasellus.

Eget sit amet tellus cras adipiscing enim eu. Morbi tristique senectus et netus. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Augue mauris augue neque gravida in fermentum et. Justo laoreet sit amet cursus sit amet dictum sit amet. Donec enim diam vulputate ut pharetra sit amet aliquam id. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Parturient montes nascetur ridiculus mus:

> O(n^2)

### Space Complexity (3)

Quam quisque id diam vel quam. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Nunc sed velit dignissim sodales ut eu sem integer vitae. Nascetur ridiculus mus mauris vitae ultricies leo. Malesuada fames ac turpis egestas integer eget aliquet:

> O(1)

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Consectetur adipiscing elit.

---

## Conclusion

### Brute Force Solutions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Quam quisque id diam vel quam.

Nulla facilisi cras fermentum odio. Sed egestas egestas fringilla phasellus.

Eget sit amet tellus cras adipiscing enim eu. Morbi tristique senectus et netus. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Augue mauris augue neque gravida in fermentum et. Justo laoreet sit amet cursus sit amet dictum sit amet.

### Ideal Solutions

Nascetur ridiculus mus mauris vitae ultricies leo. Malesuada fames ac turpis egestas integer eget aliquet. Nunc sed velit dignissim sodales ut eu sem integer. Sagittis orci a scelerisque purus semper eget duis.

Sed faucibus turpis in eu mi bibendum. Orci sagittis eu volutpat odio facilisis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Nisi lacus sed viverra tellus in. Enim lobortis scelerisque fermentum dui faucibus in.

### Extending our Code

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Quam quisque id diam vel quam. Ut morbi tincidunt augue interdum velit euismod in pellentesque.

Nunc sed velit dignissim sodales ut eu sem integer vitae. Nascetur ridiculus mus mauris vitae ultricies leo. Malesuada fames ac turpis egestas integer eget aliquet. Nunc sed velit dignissim sodales ut eu sem integer. Sagittis orci a scelerisque purus semper eget duis. Sed faucibus turpis in eu mi bibendum. Orci sagittis eu volutpat odio facilisis.

### Takeaways

Quam quisque id diam vel quam. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Nunc sed velit dignissim sodales ut eu sem integer vitae. Nascetur ridiculus mus mauris vitae ultricies leo. Malesuada fames ac turpis egestas integer eget aliquet. Nunc sed velit dignissim sodales ut eu sem integer. Sagittis orci a scelerisque purus semper eget duis. Sed faucibus turpis in eu mi bibendum. Orci sagittis eu volutpat odio facilisis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.

Nisi lacus sed viverra tellus in. Enim lobortis scelerisque fermentum dui faucibus in. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nulla facilisi cras fermentum odio. Sed egestas egestas fringilla phasellus.
