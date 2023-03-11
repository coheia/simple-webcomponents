# **Simple Web Components**
![typescript3](https://user-images.githubusercontent.com/81380764/219517131-550e9838-d239-4cf2-96ee-a3f98bb3b373.svg)      ![sass-13](https://user-images.githubusercontent.com/81380764/219517128-8ad988cb-8e32-49be-810c-744d3075c463.svg)      ![webcomponents-icon](https://user-images.githubusercontent.com/81380764/219517133-0ac9c66c-6183-422c-8950-c8ecf5f24120.svg)      ![storybook-15](https://user-images.githubusercontent.com/81380764/219517390-fa1be042-d15a-412b-9bb6-6ee517ac0713.svg)    ![lit-13](https://user-images.githubusercontent.com/81380764/219517123-97f6fde9-414c-4313-92da-b90a2d8c9481.svg)

Proof of concept of a structure to automate the processes of development, documentation and distribution of webcomponents, designed to serve a Desgin System, or a UI Library which follows the principles of [Component Driven UI](https://www.componentdriven.org/), being built from the bottom up.

[Live demo](https://simple-webcomponents.vercel.app/)

## **Getting Started**

```console
git clone git@github.com:coheia/simple-webcomponents.git
cd simple-webcomponents
npm install
npm run dev
```

In a separated terminal run:
```console
npm run storybook
```

This will launch the development server at **http://localhost:3002**, where you can view the Storybook and begin [developing your own web components](https://github.com/coheia/simple-webcomponents/blob/vite-config/src/docs/How%20to%20create%20a%20new%20component.mdx).

Note that prior knowledge of TypeScript, Sass, Lit, and Storybook is recommended. Refer to their respective documentation for more information on these technologies:
*   [typescript](https://typescriptlang.org)
*   [sass](https://sass-lang.com/)
*   [lit](https://lit.dev/)
*   [storybook](https://storybook.js.org/)

## Simple Icons

Simple Icons is a tool that converts SVG files into custom web components with options such as custom size and fill color. It generates LitElement components with a filename prefix `swc-i-` and an `Iconography.mdx` file that displays all the generated icons.

[How it works](https://simple-webcomponents.vercel.app/?path=/docs/iconography-how-it-works--docs)

## Roadmap

**Alpha** components are in-development and may have many frequent breaking  
changes.

**Beta** components are mostly polished and ready for use.

**Stable** components are reviewed, documented, and API complete.

*   🔴 Not started
*   🟡 In progress
*   🟢 Complete

### Components

| Component | Alpha | Beta | Stable |
| --- | --- | --- | --- |
| Amount    | 🟡 | 🔴 | 🔴 |
| Button    | 🟡 | 🔴 | 🔴 |
| Input     | 🔴 | 🔴 | 🔴 |
| Textarea  | 🔴 | 🔴 | 🔴 |
