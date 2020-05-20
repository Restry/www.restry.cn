import React from "react";

import HeadlineWithFocus from "../components/HeadlineWithFocus";

const Index = props => {
  return (
    <div className="c-content-box">
      <h2>Hi, it's Restry</h2>
      <HeadlineWithFocus
        modifierClassNames={`
          c-headline-focus 
          c-headline-focus--super-big 
        `}
      >
      程序设计助手小工具-介绍
      </HeadlineWithFocus>
      <h2
        className={`
          js-action-button-anchor
          c-content-box__subheadline 
          c-content-box__subheadline--with-button
        `}
      >
        I build web interfaces, and I'm also very interested in artificial intelligence and I’m now learning about Ng's video
      </h2>
    </div>
  );
};

export default Index;
