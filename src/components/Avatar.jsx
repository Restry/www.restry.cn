import React from 'react';
import logo40 from './../images/logo40.png';
import logo24 from './../images/logo24.png';

const Avatar = (props) => (
  <div className={`c-avatar ${props.modifierClasses}`}>
    <img 
      src={(props.modifierClasses === 'c-avatar--as-author') ? logo24 : logo40} 
      alt="restry.cn"
    />
  </div>
)

export default Avatar;