import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './component/DataProvider/DataProvider';
import {initalState, reducer} from './Utility/reducer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initalState}>
        <App />
    </DataProvider>
    
  </React.StrictMode>
);


