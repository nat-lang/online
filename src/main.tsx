import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Editor from './routes/editor';
import "./index.css";
import './worker';
import './nat/nat.contribution';
import Login from './routes/login';
import Header from './components/header';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/:file?/*" element={<Editor />} />
    </Routes>
  </BrowserRouter>
);
