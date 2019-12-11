import * as React from "react";
import { reduxForm, Field } from "redux-form";

import * as style from "./style.scss";

export type OnClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

export interface Props {
  onClickAddSource: OnClickHandler;
}

export const Form = (props: Props): JSX.Element => (
  <div className={style.wrapper}>
    <Field component="input" name="title" />
    <Field component="input" name="url" />
    <button onClick={props.onClickAddSource}>Add</button>
  </div>
);

export default reduxForm<any, any, Props>({ form: "addSource" })(Form);
