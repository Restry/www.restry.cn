import React from "react";
import {Link} from "react-router-dom";

const MainFooter = () => (
  <div className="c-main-footer">
    <p className="c-main-footer__note">
      Build with{" "}
     
      and{" "}
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React
      </a>. 
      <a href="https://beian.miit.gov.cn/">
      京ICP备20022013号-1
      </a>
      Hosted on{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>. The code is open source and available at{" "}
      <a
        href="https://github.com/restry/www.restry.cn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
        , fork from greglobinski :)
      </a>.
    </p>
  </div>
);

export default MainFooter;
