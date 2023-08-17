import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {ColorContextProvider} from "./components/providers/ColorContextProvider";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ColorContextProvider>
          <App/>
      </ColorContextProvider>
  </React.StrictMode>
);

reportWebVitals();
