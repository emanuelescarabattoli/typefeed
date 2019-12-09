import React from "react";
import { connect } from "react-redux";

import Form from "./components/Form/index";

export const AddSource = (
  {
    formValues,
  }: any,
) => {

  const onClickAddSource = () => {
    const sourcesData = localStorage.getItem("sources");
    if (sourcesData) {
      const parsedSourcesData = JSON.parse(sourcesData);
      parsedSourcesData.push({ title: formValues.title, url: formValues.url });
      localStorage.setItem("sources", JSON.stringify(parsedSourcesData));
    } else {
      localStorage.setItem("sources", JSON.stringify(
        [{ title: formValues.title, url: formValues.url }],
      ));
    }
  };

  return (
    <Form
      onClickAddSource={onClickAddSource}
    />
  );
};

export const mapStateToProps = (state: any) => {
  return {
    formValues:
      state.form.addSource &&
      state.form.addSource.values,
  };
};

export const mapDispatchToProps = (): any => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSource);
