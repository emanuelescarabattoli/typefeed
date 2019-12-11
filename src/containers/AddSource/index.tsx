import React from "react";
import { connect } from "react-redux";

import Form from "./components/Form/index";

export interface Props {
  formValues: FormValues;
}

export interface FormValues {
  title?: string;
  url?: string;
}

export interface State {
  form: From;
}

export interface From {
  addSource: AddSourceForm;
}

export interface AddSourceForm {
  values: FormValues;
}

export const AddSource = (props: Props): JSX.Element => {

  const onClickAddSource = (): void => {
    const sourcesData = localStorage.getItem("sources");
    if (sourcesData) {
      const parsedSourcesData = JSON.parse(sourcesData);
      parsedSourcesData.push({ title: props.formValues.title, url: props.formValues.url });
      localStorage.setItem("sources", JSON.stringify(parsedSourcesData));
    } else {
      localStorage.setItem("sources", JSON.stringify(
        [{ title: props.formValues.title, url: props.formValues.url }],
      ));
    }
  };

  return (
    <Form
      onClickAddSource={onClickAddSource}
    />
  );
};

export const mapStateToProps = (state: State): Props => {
  return {
    formValues:
      state.form.addSource &&
      state.form.addSource.values,
  };
};

export const mapDispatchToProps = (): object => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSource);
