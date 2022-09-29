# React-chat

A simple chat UI written with emotion, nextjs and recoil for practice purpose.

It don't really require recoil, could be done with useState, just to get in touch of how to use the library.

It uses editable div to be customizable for include images in text message and possible styles like bold or link text.

# Emotion setup

1. Install emotion

```
yarn add @emotion/react
```
2. Setup *.babelrc* with emotion and next
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
