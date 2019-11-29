import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Container from "./components/Container";
import Home from "../Home";

const Application = (): JSX.Element => (
    <BrowserRouter>
      <Container>
        <Route exact path="/" component={Home} />
      </Container>
    </BrowserRouter>
);

export default Application;
