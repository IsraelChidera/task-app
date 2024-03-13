import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { TodoContextProvider } from './components/context/TodoContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodoContextProvider>
  </React.StrictMode>,
)
