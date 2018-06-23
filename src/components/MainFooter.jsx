import React from "react";
import Link from "gatsby-link";

const MainFooter = () => (
  <div className="c-main-footer">
    <p className="c-main-footer__note">
      Build with{" "}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>{" "}
      and{" "}
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React
      </a>. Hosted on{" "}
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
