import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../store";
import Container from "./components/Container";
import Home from "../Home";

// Through the store we will share redux state to all component used in the application
const store = configureStore(undefined);

// The application root component is created, the Provider allow to share
// the redux store with all components used in the application
// and the BrowserRouter allow user to navigate through all the pages
const Application = (): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <Route exact path="/" component={Home} />
      </Container>
    </BrowserRouter>
  </Provider>
);

export default Application;
