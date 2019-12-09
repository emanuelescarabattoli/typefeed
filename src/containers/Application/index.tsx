import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../../store";
import Container from "./components/Container";
import Home from "../Home";
import AddSource from "../AddSource";

const store = configureStore(undefined);

const Application = (): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-source" component={AddSource} />
      </Container>
    </BrowserRouter>
  </Provider>
);

export default Application;
