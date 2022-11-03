---
pageTitle: Is Unique - Learn Problem Solving with JavaScript - Basic
title: Is Unique
description: Learn to determine uniqueness of all characters in a string.
---

{% $markdoc.frontmatter.description %} {% .lead %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum.

{% Callout title="Did you know?" type="warning" %}
This is a full-featured boilerplate for a creating a documentation website using Markdoc and Next.js.
{% /Callout %}

## Instructions

Quam quisque id diam vel quam. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Nunc sed velit dignissim sodales ut eu sem integer vitae. Nascetur ridiculus mus mauris vitae ultricies leo. Malesuada fames ac turpis egestas integer eget aliquet. Nunc sed velit dignissim sodales ut eu sem integer. Sagittis orci a scelerisque purus semper eget duis.

**Input**: String

**Output**: Boolean

## Inline code

- `const a = 10;`
- `const a = 10;`
- `const a = 10;`
- `const a = 10;`
- `const a = 10;`

## Examples

```js
isUnique('abcdef'); // -> true
isUnique('89%df#$^a&x'); // -> true
isUnique('abcAdef'); // -> true
isUnique('abcaef'); // -> false
```

Nascetur ridiculus mus mauris vitae ultricies leo. Malesuada fames ac turpis egestas integer eget aliquet. Nunc sed velit dignissim sodales ut eu sem integer. Sagittis orci a scelerisque purus semper eget duis.

```js
function isUnique(str) {
  // Your code here
}
```

{% CodeEditor template="test-runner-js"  boilerplate="test-runner-js" /%}

## Solution (1)

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
