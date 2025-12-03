# Historical Timeline · Interactive “Historical Dates” Widget

> An interactive timeline widget with a circular layout, animated years, and a horizontal event slider.

[![React](https://img.shields.io/badge/React-18+-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4+-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node](https://img.shields.io/badge/Node.js-16+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

___
## Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/is-hiro/history-timeline.git
```

```bash
cd history-timeline
```
#### npm 
```bash
npm install
```
```bash
npm run start
```

#### or yarn
```bash
yarn
```
```bash
yarn start
```

---

## Overview

**Historical Timeline** is an interactive UI widget for visualizing historical periods and events:

- circular time scale split into segments (periods/epochs);
- animated rotation of the circle when a segment is selected;
- animated year / range display in the center;
- horizontal slider with detailed events for the active segment.

The widget is suitable for landing pages, educational platforms, and promo sections inside modern SPA applications.

---

## Features

- **Circular segmented timeline** – each segment represents a period with its own events.
- **Animated rotation** – the circle smoothly rotates to bring the active segment into focus.
- **Animated years** – main years in the center are animated using `React CountUp`.
- **Event slider** – detailed events for the selected period are shown in a horizontal slider (Swiper).
- **Device-aware behavior** – small layout/behavior tweaks for desktop vs mobile.
- **Smooth motion** – transitions and micro-animations implemented via `Motion`.

---

## Tech Stack

- **React**
- **TypeScript**
- **SCSS Modules** – locally scoped styles
- **Swiper** – horizontal slider for events
- **Motion** – animations for circle, markers and labels
- **React CountUp** – animated counters for years
- **React Device Detect** – device-specific adjustments (desktop / mobile)

---

## Requirements

- **Node.js** ≥ 16
- **npm** ≥ 8 (or **yarn** / **pnpm**)

Check installed versions:

```bash
node -v
npm -v
