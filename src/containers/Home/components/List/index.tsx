import * as React from "react";

const Home = (
  {
    isFetching,
    errorMessage,
    feeds,
  }: any,
): JSX.Element => (
  <>
    {feeds.map((feed: any) => (
      <>
        {feed.title}
      </>
    ))}
  </>
);

export default Home;
