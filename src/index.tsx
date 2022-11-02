import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Country from "./components/Country";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index={true} element={<Layout/>}/>
                    <Route path="country" element={<Country/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
