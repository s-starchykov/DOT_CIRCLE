import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import App from './App';
import './services/i18n';

// Wrap App component with a Provider to provide store access
render(<Provider store={store}><App/></Provider>, document.getElementById('root'));