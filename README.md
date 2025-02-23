<img src="public/home_page.PNG" />

## Usage

This project uses FastAPI, a lightweight and high-performance Python framework, for the backend.

### Install Dependencies

```bash
npm install
```

### Change Vite Default Port to 3000

To ensure the frontend runs on port 3000, update your vite.config.js file:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

### Run Vite Frontend

React will run on http://localhost:3000

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
