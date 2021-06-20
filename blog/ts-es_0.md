---
title: "TypeScript Discord Bot Tutorial #0"
subtitle: "Making a Discord Bot with TypeScript and Eris-Sharder: Setting Things Up"
---

# Tools

- Node.js
- TypeScript
- Visual Studio Code (or a text editor of your choice)
- Discord

# Installing the Dependencies

Open up your terminal and type

```bash
npm init
```

This initializes your project so you can install external libraries. Next, type

```bash
npm install eris-sharder eris dotenv-safe & npm install @types/eris-sharder @types/node
```

or if you're using Yarn

```bash
yarn add eris-sharder eris dotenv-safe & yarn add -D @types/eris-sharder @types/node
```

to install the necessary libraries. You're now good to go!

```js
console.log("Hello World!");
```
