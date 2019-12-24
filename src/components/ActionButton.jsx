import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from './Icon';
// import { FaArrowRight, FaClose, FaInfo } from 'react-icons/lib/fa/';

const ActionButton = ({ 
  topPx, 
  rightPx, 
  classes, 
  isActive, 
  isFixed, 
  onClick, 
  buttonRef,
  locationPathName }) => 
{  
  return (
    <button 
      onClick={onClick}
      className={`
        ${classes.block} 
        ${isActive ? classes.isActive : ''} 
        ${isFixed ? classes.isFixed : ''}
      `}
      style={{ top: topPx, right: rightPx }}
      ref={buttonRef}
      aria-label="Remark"
    > 
      {isActive 
        ? (locationPathName === '/' ? <Icon name="next_arrow" /> : <Icon name="warn"/>) 
        : <Icon name="roundclose"/>}
    </button>
  )
} 

ActionButton.propTypes = {
  topPx: PropTypes.string.isRequired,
  rightPx: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired
}  

export default ActionButton;