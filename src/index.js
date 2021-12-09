import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { SearchResultProvider } from './context/searchContext';
import "./index.css"

ReactDOM.render(
    <SearchResultProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </SearchResultProvider>
,document.getElementById("root"))