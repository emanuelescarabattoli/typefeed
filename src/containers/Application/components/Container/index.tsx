import * as React from "react";

interface Props {
  children: JSX.Element;
}

const Container = (props: Props): JSX.Element => (
  <>
    {props.children}
  </>
);

export default Container;