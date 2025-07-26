# Node Morgoth

> Still under development... Do not use it in production-grade project(s) until the version reaches 1.0.0

<p>
  <a href="https://www.npmjs.com/package/node-morgoth" aria-label="Downloads">
    <img src="https://img.shields.io/npm/dm/node-morgoth.svg?label=DOWNLOADS&style=flat&color=red&logo=npm" alt="Downloads" />
  </a>
  <a href="https://www.npmjs.com/package/node-morgoth" aria-label="Version">
    <img src="https://img.shields.io/npm/v/node-morgoth.svg?label=NPM&style=flat&color=teal&logo=npm" alt="Latest Version" />
  </a>
  <a href="https://bundlephobia.com/result?p=node-morgothj" aria-label="Bundle size">
    <img src="https://img.shields.io/bundlephobia/minzip/node-morgoth?style=flat&color=purple&label=SIZE&logo=nodedotjs" alt="Bundle Size" />
  </a>
  <a href="https://www.npmjs.com/package/node-morgoth" aria-label="License">
    <img src="https://img.shields.io/npm/l/node-morgoth.svg?label=LICENSE&style=flat&color=orange&logo=open-source-initiative" alt="License" />
  </a>
</p>

## node-morgoth

> **Forge dark and powerful utilities for Node.js.**  
> A mythic toolkit for Node.js craftsmen: file & folder manipulation, security helpers (JWT, bcrypt), and more — all forged in the depths of Morgoth’s forge.

### ✨ Why `node-morgoth`?

In Tolkien’s lore, **Morgoth** was the first dark lord, a master forger who shaped the very fabric of the world (and many of its darkest tools).  
`node-morgoth` brings that same spirit of creation and control to your `Node.js` project(s):

<!-- ✅ **File & Folder Manipulation** – move, copy, delete, and forge structures.   -->
<!-- ✅ **Security Utilities** – JWT signing/verification, bcrypt hashing.   -->
<!-- ✅ **Pluggable & Extensible** – more utilities to come. -->

---

## 📦 Install

Choose your preferred package manager:

```shell
npm i node-morgoth
```

```shell
pnpm add node-morgoth
```

```shell
yarn add node-morgoth
```

---

## ⚡ Features
<!-- 
* 🔥 **File & Folder Utilities:** Copy, move, delete, read/write.
* 🛡️ **Security Helpers:** JWT and bcrypt-like utilities. -->
* ⚙️ **Crafted for Node.js:** Built with modern ESM and TypeScript.
* 🌑 **More Coming Soon:** Like Morgoth’s endless forges.

---

## 🛠️ Usage Guides

### File Conversion Utilities

#### `fileToBase64`

Convert a file on disk to a Base64 string (async):

```ts
import { fileToBase64 } from 'node-morgoth';

const base64 = await fileToBase64('path/to/file.png');
console.log(base64); // → Base64 string
```

#### `fileToBase64Sync`

Convert a file on disk to a Base64 string (sync):

```ts
import { fileToBase64Sync } from 'node-morgoth';

const base64 = fileToBase64Sync('path/to/file.png');
console.log(base64); // → Base64 string
```

#### `createVirtualFileBase64`

Create a Base64 string from given text content:

```ts
import { createVirtualFileBase64 } from 'node-morgoth';

const base64 = createVirtualFileBase64('Hello Morgoth!');
console.log(base64); // → Base64 string
```

#### `base64ToFile`

Recreate a browser `File` object from a Base64 string:

```ts
import { base64ToFile } from 'node-morgoth';

const file = base64ToFile(base64String, 'example.txt', 'text/plain');
console.log(file); // → File object (browser)
```

#### `textToBase64`

Convert plain text to Base64:

```ts
import { textToBase64 } from 'node-morgoth';

const base64 = textToBase64('Forge the dark tools');
console.log(base64); // → Base64 string
```

#### `base64ToText`

Decode Base64 back to plain text:

```ts
import { base64ToText } from 'node-morgoth';

const text = base64ToText(base64String);
console.log(text); // → original text
```

---

## 🔗 Related Packages

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-toolbox">
    <img src="https://img.shields.io/badge/Utility_Toolbox-nhb--toolbox-teal" alt="nhb-toolbox" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-hooks">
    <img src="https://img.shields.io/badge/React_Hooks-nhb--hooks-blue" alt="nhb-hooks" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-scripts">
    <img src="https://img.shields.io/badge/Development_Scripts-nhb--scripts-red" alt="nhb-scripts" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-express">
    <img src="https://img.shields.io/badge/Express_Server_Scaffolder-nhb--express-orange" alt="nhb-express" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-anagram-generator">
    <img src="https://img.shields.io/badge/Anagram_Generator-nhb--anagram--generator-teal" alt="nhb-anagram-generator" />
  </a>
</div>

---

## License

This project is licensed under the [MIT License](LICENSE) with the following additional requirement:

**Additional Requirement:**

> Any fork, derivative work, or redistribution of this project must include clear attribution to [**Nazmul Hassan**](https://github.com/nazmul-nhb) in both the source code and any publicly available documentation.

You are free to use, modify, and distribute this project under the terms of the MIT License, provided that appropriate credit is given.
