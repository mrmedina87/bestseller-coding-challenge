import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createGlobalStyle } from "styled-components";

import configureStore from './store';
import AddGiftCard from './containers/AddGiftCard';
import ErrorBoundary from './containers/ErrorBoundary';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Work Sans', sans-serif;
    background: #E5E5E5;
  }
`;

const store = configureStore();

const Wrapper = () => (
  <>
    <ErrorBoundary>
      <GlobalStyles />
      <AddGiftCard />
    </ErrorBoundary>
  </>
);

export default Wrapper;

const viewport = document.getElementById("app-wrapper");

viewport ? ReactDOM.render(
  <Provider store={ store } >
    <Wrapper />
  </Provider>
  , viewport) : false;