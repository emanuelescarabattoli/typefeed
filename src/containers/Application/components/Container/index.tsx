import * as React from "react";
import { Link, withRouter } from "react-router-dom";

import * as style from "./style.scss";
import { RouteComponentProps } from "react-router";

export type ReactNode =
  React.ReactChild |
  React.ReactFragment |
  React.ReactPortal |
  boolean |
  null |
  undefined;

interface Props extends RouteComponentProps {
  children: ReactNode;
}

const Container = (props: Props): JSX.Element => (
  <div className={style.wrapper}>
    <div className={style.toolbar}>
      <ul>
        <li>
          <Link to="/"><i className="fas fa-th-list" /></Link>
        </li>
        <li>
          <Link to="/add-source"><i className="fas fa-plus" /></Link>
        </li>
      </ul>
    </div>
    <div className={style.content}>
      {props.children}
    </div>
  </div>
);

export default withRouter(Container);
