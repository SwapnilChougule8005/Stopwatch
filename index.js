import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'
import "./index.css"

const rootDiv = document.getElementById('root');
const root = createRoot(rootDiv);

root.render(<App/>);