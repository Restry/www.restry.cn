import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";
import { useParams } from 'react-router-dom';

export default () => {

  let params = useParams();
  console.log(`params:`, params);
  return (
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
}