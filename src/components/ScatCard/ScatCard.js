import React from 'react';
import PropTypes from 'prop-types';
import scatShape from '../../helpers/data/propz/scatShape';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatCardShape,
    deleteScat: PropTypes.func.isRequired,
  };

  deleteMe = (e) => {
    e.preventDefault();
    const { deleteScat } = this.props;
    deleteScat(this.props.scat.id);
  }

  render() {
    const { scat } = this.props;
    return (
      <div className="ScatCard col-4 m-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.sampleName}</h5>
            <p className="card-text">{scat.color}</p>
            <button href="#" className="btn btn-danger" onClick={this.deleteMe}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
