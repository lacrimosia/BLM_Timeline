'use strict';

import React from 'react';
const $ = require('jquery');
import hotkey from 'react-hotkey';
import NativeListener from 'react-native-listener'; // fixes e.preventDefault Problems
hotkey.activate();
import {Col, Image, Button } from 'react-bootstrap';

class StoryMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div key={this.props.accessKey}>
       		<Col md={12} >
       			<h2>{this.props.title}</h2>
       		</Col>
       		<Col md={6} >
       			<Image src={this.props.imageSrc} responsive /> 				
       		</Col>
       		<Col md={6}>
       			<h3><i className="fa fa-map-marker"></i> {this.props.location}</h3>
       			<p>{this.props.text}</p>
       			<Button bsSize="large"><i className="fa fa-link"></i> More Information</Button> 
       		</Col>
  		</div>
     );
    }
}

export default StoryMap;
