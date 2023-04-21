import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { StateProvider } from './StateProvider';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './reducer';
import { GlobalProvider } from './GlobalState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<App />}/>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();

