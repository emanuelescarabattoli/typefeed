import * as React from "react";
import { ipcRenderer } from "electron";

import * as style from "./style.scss";

const Home = (
  {
    isFetching,
    errorMessage,
    feeds,
  }: any,
): JSX.Element => (
  <>
    <div className={style.items}>
      {feeds.map((feed: any, index: number) => (
        <div key={index} className={style.item}>
          <span className={style.itemTitle}>{feed.title}</span>
          <div className={style.itemContent}>
            <div className={style.itemContentLeft}>
              <img src={feed.image} alt={feed.title} />
            </div>
            <div className={style.itemContentRight}>
              <div className={style.itemDescription} dangerouslySetInnerHTML={{ __html: feed.content }} />
              <div className={style.itemDescription} dangerouslySetInnerHTML={{ __html: feed["content:encoded"] }} />
              <button onClick={() => ipcRenderer.send("open-link", feed.link)} className={style.itemLink}>Visit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Home;
