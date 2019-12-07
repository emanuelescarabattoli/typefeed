import React, { useEffect } from "react";
import { connect } from "react-redux";

import List from "./components/List/index";
import { listFeeds, listFeedsReset } from "../../actions/index";

// The home component
export const Home = (
  {
    listFeeds,
    listFeedsReset,
    isFetching,
    errorMessage,
    feeds,
  },
) => {

  // On component mount feed are read
  useEffect(() => {
    listFeeds();
    return () => {
      listFeedsReset();
    };
  }, []);

  return (
    <List
      isFetching={isFetching}
      errorMessage={errorMessage}
      feeds={feeds}
    />
  );
};

// Starting from the redux state it gets data related to logged in user
export const mapStateToProps = (state: any) => {
  return {
    // Properties related to feeds list
    isFetching: state.listFeeds.isFetching,
    errorMessage: state.listFeeds.errorMessage,
    feeds: state.listFeeds.data.results,
  };
};

// Maps functions to dispatch actions
export const mapDispatchToProps = (dispatch: Function): any => {
  return {
    listFeeds: (url: string) => dispatch(listFeeds(url)),
    listFeedsReset: () => dispatch(listFeedsReset()),
  };
};

// The component uses the redux store
export default connect(mapStateToProps, mapDispatchToProps)(Home);
