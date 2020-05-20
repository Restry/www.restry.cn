import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
// import Obfuscate from "react-obfuscate";
// import { FaEnvelopeO, FaTwitter, FaGithub } from "react-icons/lib/fa/";
import Helmet from "react-helmet";
import Icon from "../components/Icon";

export default props => {
  return (
    <div className="c-content-box">
      <Helmet title="联系" />

      <HeadlineWithFocus>
        You can get in touch <span>anytime through</span>
      </HeadlineWithFocus>
      <ul className="c-contact-list">
        <li className="c-contact-list__item">
          <Icon name="dmail" />
          <a href="mailto:michael.keepgoing@gmail.com">
          michael.keepgoing@gmail.com
          </a>
        </li>
        <li className="c-contact-list__item">
          <Icon name="wechat" />
          <a
            href="https://twitter.com/vol_mike"
            target="_blank"
            rel="noopener noreferrer"
          >
            @restry
          </a>
        </li>
        <li className="c-contact-list__item">
          <Icon name="signin_line" />
          <a
            href="https://github.com/restry"
            target="_blank"
            rel="noopener noreferrer"
          >
            restry
          </a>
        </li>
      </ul>
      <h2
        className={`
        js-action-button-anchor
        c-content-box__subheadline 
        c-content-box__subheadline--with-button
      `}
      >
        Do not forget
      </h2>
    </div>
  );
};
