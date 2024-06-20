import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/VIte/',  // ตรงนี้ต้องตรงกับชื่อที่คุณตั้งไว้ใน GitHub Pages
  plugins: [react()],
});
