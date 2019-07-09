import React from 'react';

import './SingleScat.scss';

class SingleScat extends React.Component {
  render() {
    const { scat } = this.props;
    return (
      <div className="SingleScat">
        <div className="card" id={scat.location}>
            <div className="card-body">
                <h5 className="card-title">{scat.location}</h5>
            </div>
        </div>
      </div>
    );
  }
}

export default SingleScat;
