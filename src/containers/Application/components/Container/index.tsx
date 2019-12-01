import * as React from "react";

import * as style from "./style.scssas";

interface Props {
  children: JSX.Element;
}

const Container = (props: Props): JSX.Element => (
  <div className={style.wrapper}>
    <div className={style.sidebar}>

    </div>
    <div className={style.content}>
      {props.children}
    </div>
  </div>
);

export default Container;