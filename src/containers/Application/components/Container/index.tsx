import * as React from "react";
import { Link, withRouter } from "react-router-dom";

import * as style from "./style.scss";

interface Props {
  children: JSX.Element;
}

const Container = (props: Props): JSX.Element => (
  <div className={style.wrapper}>
    <div className={style.toolbar}>
      <ul>
        <li>
          <Link to="Home"><i className="fas fa-th-list"></i></Link>
        </li>
        <li>
          <Link to="Home"><i className="fas fa-plus"></i></Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="Home"><i className="fas fa-cog"></i></Link>
        </li>
      </ul>
    </div>
    <div className={style.content}>
      {props.children}
    </div>
  </div>
);

export default withRouter(Container);
