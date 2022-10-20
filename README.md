# Welcome to react-chat 👋

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: Jord1Santamaria](https://img.shields.io/twitter/follow/Jord1Santamaria.svg?style=social)](https://twitter.com/Jord1Santamaria)

A simple chat UI written with emotion, nextjs and recoil for practice purpose.

It don't really require recoil, could be done with useState, just to get in touch of how to use the library.

It uses editable div to be customizable for include images in text message and possible styles like bold or link text.

`editabletext.html` is an example of how to use an editable div to generate a text editor with pure html.

### ✨ [Demo]()

## Emotion setup

1. Install emotion

```
yarn add @emotion/react
```

2. Setup _.babelrc_ with emotion and next

```
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}
```

3. tsconfig for avoid type error: include this line

```
  "compilerOptions": {
    "jsxImportSource": "@emotion/react",
  },

```

## Install

```sh
yarn install
```

## Usage

```sh
yarn dev
```

## Author

👤 **Jordi Santamaria**

- Twitter: [@Jord1Santamaria](https://twitter.com/Jord1Santamaria)
- Github: [@jordisantamaria](https://github.com/jordisantamaria)
- LinkedIn: [@jordi-santamaria-portoles-8b14818b](https:/www.linkedin.com/in/jordi-santamaria-portoles-8b14818b/)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
