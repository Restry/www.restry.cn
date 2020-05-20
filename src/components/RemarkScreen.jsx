import React from 'react';
import {Link} from 'react-router-dom';
// import Obfuscate from 'react-obfuscate';
// import { FaPaperPlaneO, FaWrench } from 'react-icons/lib/fa';
import Icon from './Icon';

const ForHomePageContent = (
  <div className="c-remark-screen__message">
     开发中...
  </div>
);

const ForContactPageContent = (
  <div className="c-remark-screen__message">
  开发中...
     
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
