import React from 'react';
const $ = require('jquery');
import hotkey from 'react-hotkey';
import NativeListener from 'react-native-listener'; // fixes e.preventDefault Problems
hotkey.activate();
import {Button } from 'react-bootstrap';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.events = this.props.data;
    }
    render() {
        return (<div>
       {
        this.events.map(function (a) {
        	return(
        			<Button key={a.id}><i className="fa fa-circle"></i></Button>
        		);
       }.bind(this))
 }
  </div>
     );
    }
}

export default Nav;
