import React from 'react';
import { Textfit } from 'react-textfit';
export default (props) => {
return (
    <div className="">
      <Textfit
        max={40}
        throttle={60}
        mode="single"
        className="screen_top"
      >
        { props.expression }
      </Textfit>
      <Textfit
        mode="single"
        className="screen_bottom"
      >
        { props.total }
      </Textfit>
    </div>
  )
}