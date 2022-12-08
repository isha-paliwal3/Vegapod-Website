import React from 'react';
import './Meter.css';
function Meter(props) {
    return (
        <div>
            <div className="container">
<div className="row">
  <div className="col-md-3 col-sm-6">
    <div className="progress blue">
      <span className="progress-left">
        <span className="progress-bar" />
      </span>
      <span className="progress-right">
        <span className="progress-bar" />
      </span>
      <div className="progress-value">{props.value}</div>
    </div>
  </div>

</div>
</div>
        </div>
    );
}


export default Meter;