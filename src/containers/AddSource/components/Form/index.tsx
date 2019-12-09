import * as React from "react";
import { reduxForm, Field } from "redux-form";

import * as style from "./style.scss";

interface Props {
  onClickAddSource: any;
}

const Form = (props: Props): JSX.Element => (
  <div className={style.wrapper}>
    <Field component="input" name="title" />
    <Field component="input" name="url" />
    <button onClick={props.onClickAddSource}>Add</button>
  </div>
);

export default reduxForm<any, any, Props>({ form: "addSource" })(Form);
