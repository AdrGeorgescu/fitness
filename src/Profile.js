import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class Profile extends Component {
  render() {
    return (
      <div>
        My profile
        <Button bsStyle="danger">Take this action</Button>
      </div>
    );
  }
}
