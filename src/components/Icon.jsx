import React from 'react';

const Icon = ({name}) => {
  return (<svg className="icon" aria-hidden="true">
    <use xlink="true" href={`#icon-icon_${name}`}></use>
    </svg>);
};

export default Icon;