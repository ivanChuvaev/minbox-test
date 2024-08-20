import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'normalize.css';
import '@/assets/styles/globals.scss'

createRoot(document.getElementById('root')!).render(<App />);
