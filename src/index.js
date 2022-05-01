import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { SearchModalProvider } from './Provider/context-modal';
import { InfoUserProvider } from './Provider/ContextUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchModalProvider>
      <InfoUserProvider>
        <App />
      </InfoUserProvider>
    </SearchModalProvider>
  </React.StrictMode>
);
