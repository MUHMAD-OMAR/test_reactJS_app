import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {ColorContextProvider} from "./components/providers/ColorContextProvider";
import './index.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ColorContextProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </ColorContextProvider>
    </React.StrictMode>
);

reportWebVitals();
