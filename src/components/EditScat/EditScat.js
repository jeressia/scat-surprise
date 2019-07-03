import React, { Component } from 'react';

class EditScat extends Component {
  render() {
    const editId = this.props.match.params.id;

    return (
      <div>
        <h1>Edit Scat</h1>
        <h2> The editId is {editId}</h2>
      </div>
    );
  }
}

export default EditScat;
