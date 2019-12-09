import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ipcRenderer } from "electron";

import List from "./components/List/index";
import { listFeeds, listFeedsReset } from "../../actions/index";

export const extractImageFromFeed = (feed: any) => {
  if(feed.enclosure) {
    return feed.enclosure.url;
  }
  const imageStart = feed["content:encoded"] && feed["content:encoded"].indexOf("<img");
  if (imageStart !== -1 && imageStart !== undefined) {
    const hrefStart = feed["content:encoded"].indexOf("src=\"", imageStart);
    const hrefEnd = feed["content:encoded"].indexOf("\"", hrefStart + 5);
    const image = feed["content:encoded"].substring(hrefStart + 5, hrefEnd);
    return image;
  }
  return "";
};

export const adaptFeeds = (feeds: any) => {
  if(!feeds) {
    return [];
  }
  return feeds.map((feed: any) => (
    {
      image: extractImageFromFeed(feed),
      title: feed.title,
      subtitle: feed.contentSnippet,
      link: feed.link,
      content: feed["content:encoded"],
    }
  ));
};

export const Home = (
  {
    listFeeds,
    listFeedsReset,
    isFetching,
    errorMessage,
    feeds,
  }: any,
) => {

  const [sources, setSources] = useState([]);

  useEffect(() => {
    const sourcesData = localStorage.getItem("sources");
    if(sourcesData) {
      const parsedSourcesData = JSON.parse(sourcesData);
      setSources(parsedSourcesData);
      listFeeds(parsedSourcesData[0].url);
    }
    return () => {
      listFeedsReset();
    };
  }, []);

  const onClickVisit = (link: string) => {
    ipcRenderer.send("open-link", link);
  };

  const onClickChangeSource = (source: any) => {
    listFeeds(source.url);
  };

  return (
    <List
      sources={sources}
      isFetching={isFetching}
      errorMessage={errorMessage}
      feeds={feeds}
      onClickVisit={onClickVisit}
      onClickChangeSource={onClickChangeSource}
    />
  );
};

export const mapStateToProps = (state: any) => {
  return {
    isFetching: state.listFeeds.isFetching,
    errorMessage: state.listFeeds.errorMessage,
    feeds: adaptFeeds(state.listFeeds.data.items),
  };
};

export const mapDispatchToProps = (dispatch: Function): any => {
  return {
    listFeeds: (url: string) => dispatch(listFeeds(url)),
    listFeedsReset: () => dispatch(listFeedsReset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
