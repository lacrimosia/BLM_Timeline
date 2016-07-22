'use strict';

import React from 'react';
const $ = require('jquery');
import hotkey from 'react-hotkey';
import NativeListener from 'react-native-listener'; // fixes e.preventDefault Problems
hotkey.activate();
import {Col, Image } from 'react-bootstrap';

class StoryMap extends React.Component {
    constructor(props) {
        super(props);
        this.events = this.props.data;
    }

    render() {
        return (<div>
      {
        this.events.map(function (b) { 	
       	  if(b.id % 2 == 0){
       	  	return (
       		<Col md={4} key={b.id}>
       			<Image src={b.media.image.src} responsive />
       			<h1>{b.title}</h1>
       			<h4><i className="fa fa-map-marker"></i> {b.situation.location}</h4>
       			<p>{b.content.text}</p>
       		</Col>
          	);
       	  }
       	  	return (
       		<Col md={4} key={b.id}>
       		<h1>{b.title}</h1>
       			<h4><i className="fa fa-map-marker"></i> {b.situation.location}</h4>
       			<p>{b.content.text}</p>
       			<Image src={b.media.image.src} responsive /> 			
       		</Col>
          	);

		}.bind(this))
    
 }
  </div>
     );
    }
}

export default StoryMap;
