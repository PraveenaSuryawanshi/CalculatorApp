import React from 'react';
import { operators, specialOperators } from '../../utils/constants'
export default ({ onButtonClick, buttonKey}) => {
  let handleClick = (e) => { onButtonClick(e.target.textContent) }
  let classNames = [
    'btn btn-default',
    operators.includes(buttonKey) ? 'btn btn-color' : '',
    specialOperators.includes(buttonKey) ? 'btn btn-default' : '',
    buttonKey === '0' ? 'btn-default': ''
  ];


  return (
    <button
      name={buttonKey}
      className={ classNames.join(' ').trim()}
      onClick={handleClick}
    >
      { buttonKey }
    </button>
  );
}