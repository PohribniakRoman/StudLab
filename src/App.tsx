import * as React from 'react';
import { Router } from './services/Router';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducer } from './services/reducers/combinedReducer';
import { NotificationContainer } from './services/Notification';

const combinedStore = configureStore({reducer:combineReducer});

export const App:React.FC = ():React.ReactElement => {

    return (
    <Provider store={combinedStore}>
        <Router/>
    </Provider>);
}
