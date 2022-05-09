import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../bll/store';
import {RoutesPass} from './routes/Routes';
import {Header} from './header/Header';

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <RoutesPass/>
                    <Header/>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

