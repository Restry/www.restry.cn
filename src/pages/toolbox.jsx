import React from "react";
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Helmet from 'react-helmet';

import ToolBoxListContainer from '../containers/ToolBoxListContainer';

export default () => (
  <div className="c-content-box">
    <Helmet title="支持的功能" />  

    <HeadlineWithFocus><span>支持的功能 </span> 工具盒</HeadlineWithFocus>
    <ToolBoxListContainer />
   
  </div>
);