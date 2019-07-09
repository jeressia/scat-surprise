import React from 'react';

import './SingleScat.scss';
import scatData from '../../helpers/data/scatData';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error('unable to get single scat', err));
  }

  deleteScat = () => {
    const scatId = this.props.match.params.id;
    scatData.deleteScats(scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to delete', err));
  }

  render() {
    const { scat } = this.state;
    return (
      <div className="ScatCard col-4 m-2">
        <h1>{scat.sampleName}</h1>
        <h3>{scat.location}</h3>
        <button href="#" className="btn btn-danger" onClick={this.deleteScat}>Delete</button>
      </div>
    );
  }
}

export default SingleScat;
