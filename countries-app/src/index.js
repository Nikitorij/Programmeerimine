import React from 'react';
import ReactDOM from 'react-dom/client';  // Обратите внимание на .client в импорте
import './index.css';
import App from './App';

// Создаем корневой элемент с помощью createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
