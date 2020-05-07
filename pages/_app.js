// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import React from 'react'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper';
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';

class MyApp extends App {
    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}
export default withRedux(store)(MyApp);