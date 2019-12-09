import * as React from "react";

import * as style from "./style.scss";

const List = (
  {
    isFetching,
    errorMessage,
    feeds,
    onClickVisit,
    sources,
    onClickChangeSource,
  }: any,
): JSX.Element => (
  <div className={style.wrapper}>
    <div className={style.sidebar}>
      {sources.map((source: any) => (
        <div className={style.sources} key={source.url}>
          <button onClick={() => onClickChangeSource(source)}>{source.title}</button>
        </div>
      ))}
    </div>
    <div className={style.items}>
      {isFetching && <>Wait...</>}
      {errorMessage && <>{errorMessage}</>}
      {feeds.map((feed: any, index: number) => (
        <div key={index} className={style.item}>
          <div className={style.itemContent}>
            <div>
              <div className={style.itemImage}>
                {feed.image && <img src={feed.image} alt={feed.title} /> || <i className="fas fa-image" />}
              </div>
            </div>
            <div>
              <span className={style.itemTitle}>{feed.title}</span>
              <span className={style.itemSubtitle}>{feed.subtitle}</span>
              <button onClick={() => onClickVisit(feed.link)} className={style.itemLink}>
                  Visit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default List;
