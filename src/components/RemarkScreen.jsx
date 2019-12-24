import React from 'react';
import {Link} from 'react-router-dom';
// import Obfuscate from 'react-obfuscate';
// import { FaPaperPlaneO, FaWrench } from 'react-icons/lib/fa';
import Icon from './Icon';

const ForHomePageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>I'm restry</b><br /> that you're interested in my stuff.
    </p>
    <p>
      There's something I want you to remember while you're going over the website.
    </p>
    <p>
      At present, I'm open to <b>part time remote job</b> offers.
    </p>
    <p>
      If you realize that I would be a good fit, drop me 
      a message at <b> Michael.keepgoing@gmail.com' </b>.
    </p>
    <p>
      Thank you. Now, you're free to go further.
    </p>
  </div>
);

const ForContactPageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Hi there</b><br /> Before you leave
    </p>
    <p>
      I want you to remember that at present, I am open to <b>part time remote job</b> offers.
    </p>
    <p>
      If you feel that you want me on your team, drop me 
      a message at <b> </b>.
    </p>
    <p>
      
    </p>
    <p>
      Thank you<br />
      <b>Restry</b>
    </p>
  </div>
);

const RemarkScreen = (props) => { 
  const links = [ 
    { path: 'toolbox', icon: ()=><Icon name="nomemo" /> }, 
    //{ path: 'playground', icon: FaPaperPlaneO }
  ];

  return (
    <div className={`c-remark-screen ${props.isActive && 'c-remark-screen--is-active'}`}>
      {props.locationPathName === '/' ? ForHomePageContent : ForContactPageContent}
      {props.locationPathName === '/' &&
        <div className="c-remark-screen__links">
          {
            links.map((link) => (        
              <Link 
                key={link.path}
                className="c-remark-screen__link" 
                to={`/${link.path}/`}
                onClick={props.onClick}
                tabIndex={props.isActive ? '1' : '-1'}
              >
                <link.icon /> {link.path}
              </Link>)
            ) 
          }
        </div>
      }

      <div className="c-remark-screen__bg"></div>
    </div>
  )
};

export default RemarkScreen;
