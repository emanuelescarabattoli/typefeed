import * as React from "react";

import * as style from "./style.scss";

interface Props {
  children: JSX.Element;
}

const Container = (props: Props): JSX.Element => (
  <div className={style.wrapper}>
    <div className={style.toolbar}>

    </div>
    <div className={style.sidebar}>

    </div>
    <div className={style.content}>
      {props.children}
    </div>
  </div>
);

export default Container;