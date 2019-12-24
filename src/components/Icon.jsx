import React from 'react';

const Icon = ({name}) => {
  return (<svg className="icon" aria-hidden="true">
    <use xlink href={`#icon-icon_${name}`}></use>
    </svg>);
};

export default Icon;