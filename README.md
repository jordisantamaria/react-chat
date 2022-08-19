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
