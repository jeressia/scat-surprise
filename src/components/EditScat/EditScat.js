import React, { Component } from 'react';

import scatData from '../../helpers/data/scatData';

import './EditScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: 'ass',
  animal: '',
  uid: '',
};

class EditScat extends Component {
  state = {
    newScat: defaultScat,
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ newScat: scatPromise.data }))
      .catch(err => console.error('uh-oh, edit', err));
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.newScat };
    tempScat[name] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newScat };
    const scatId = this.props.match.params.id;
    scatData.putScat(saveMe, scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  sampleNameChange = e => this.formFieldStringState('sampleName', e);

  colorChange = e => this.formFieldStringState('color', e);

  weightChange = e => this.formFieldStringState('weight', e);

  locationChange = e => this.formFieldStringState('location', e);

  animalChange = e => this.formFieldStringState('animal', e);

  render() {
    const { newScat } = this.state;
    return (
      <div>
        <h1>Edit Scat</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="sampleName">Sample Name</label>
            <input
            type="text"
            className="form-control"
            id="sampleName"
            placeholder="Sample 11"
            value = {newScat.sampleName}
            onChange= {this.sampleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
            type="text"
            className="form-control"
            id="color"
            placeholder="Brown"
            value = {newScat.color}
            onChange= {this.colorChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Weight</label>
            <input
            type="text"
            className="form-control"
            id="weight"
            placeholder="5lbs"
            value = {newScat.weight}
            onChange= {this.weightChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Animal</label>
            <input
            type="text"
            className="form-control"
            id="animal"
            placeholder="Dog"
            value = {newScat.animal}
            onChange= {this.animalChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Location</label>
            <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Mississippi"
            value = {newScat.location}
            onChange= {this.locationChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Update Scat</button>
        </form>
      </div>
    );
  }
}

export default EditScat;
