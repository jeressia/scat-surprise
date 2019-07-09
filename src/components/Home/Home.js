import React, { Component } from 'react';
import firebase from 'firebase/app';

import scatData from '../../helpers/data/scatData';
import ScatCard from '../ScatCard/ScatCard';

class Home extends Component {
  state = {
    scats: [],
  }

  componentDidMount() {
    scatData.getMyScats(firebase.auth().currentUser.uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error('uh-oh, scats', err));
  }

  render() {
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard
      key={scat.id}
      scat={scat}
      />
    ));

    return (
      <div className="Home col">
            <div className="d-flex">
              {makeScatCards}
            </div>
            </div>
    );
  }
}

export default Home;
