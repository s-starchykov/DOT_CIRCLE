import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import App from './App';
import './services/i18n';
import {BrowserRouter} from "react-router-dom";

const baseUrl = process.env.PUBLIC_URL;
// Wrap App component with a Provider to provide store access
render( <BrowserRouter basename={baseUrl}><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('root'));