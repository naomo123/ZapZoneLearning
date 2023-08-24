import React from 'react';
import '../../styles/Button.css';

const Button = ({ onClick, isCollapsed }) => {

  return (
    <button className={`collapsible-button${isCollapsed ? ' collapsed' : ''}`} onClick={onClick}>
      {isCollapsed ? (
        
       <svg className='icon-v' xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
       <path d="M0.861828 8.06206L7.22583 1.69806C7.41336 1.51059 7.66766 1.40527 7.93283 1.40527C8.19799 1.40527 8.4523 1.51059 8.63983 1.69806L15.0038 8.06206" stroke="black" strokeLinecap="round"/>
     </svg>
      ) : (
        <svg className='icon-v' xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
          <path d="M15.0038 1.40527L8.63983 7.76927C8.54695 7.86225 8.43667 7.93601 8.31527 7.98633C8.19387 8.03666 8.06374 8.06256 7.93233 8.06256C7.80091 8.06256 7.67079 8.03666 7.54939 7.98633C7.42799 7.93601 7.3177 7.86225 7.22483 7.76927L0.861828 1.40527" stroke="black" strokeLinecap="round"/>
        </svg>
      )}
    </button>
  );
};

export default Button;
