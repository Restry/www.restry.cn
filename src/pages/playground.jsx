import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";

export default () => (
  <div className="c-content-box">
    <Helmet title="Let's play" />

    <HeadlineWithFocus>
      Playground
      {/*<span>What's that?</span>*/}
    </HeadlineWithFocus>
    <ol>
      <li><a href="https://blog.restry.cn" target="_blank">My Blog</a> </li>
    </ol>
    <p>Coming soon...</p>
  </div>
);
