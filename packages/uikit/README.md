# 🥞 Venos UIkit

[![Version](https://img.shields.io/npm/v/@venosproject/uikit)](https://www.npmjs.com/package/@venosproject/uikit) [![Size](https://img.shields.io/bundlephobia/min/@venosproject/uikit)](https://www.npmjs.com/package/@venosproject/uikit)

Venos UIkit is a set of React components and hooks used to build pages on Venos's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @venosproject/uikit`

**\*Note**: In case you want to use the older version of the Venos UIkit, you should install @venosproject-libs/uikit, instead, but we recommend using the latest version of the UIkit.\*

## Setup

### Theme

Before using Venos UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@venosproject/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@venosproject/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://venosproject.github.io/Venos-uikit/)
