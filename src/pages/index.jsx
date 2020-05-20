import React from "react";

import HeadlineWithFocus from "../components/HeadlineWithFocus";

const Index = props => {
  return (
    <div className="c-content-box">
      <h2>Hi, Restry</h2>
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
      采用自顶向下，逐步求精的程序设计方法 \
      使用三种基本控制结构构造程序 \
      支持各种代码高亮 \
      支持多语言显示 \
      </h2>
    </div>
  );
};

export default Index;
