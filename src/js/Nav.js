import React from 'react';
const $ = require('jquery');
import hotkey from 'react-hotkey';
import NativeListener from 'react-native-listener'; // fixes e.preventDefault Problems
hotkey.activate();
import {Button } from 'react-bootstrap';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    getIndex(index){
        console.log('index',index);
        return index;
    }

    render() {
        return (<div key={this.props.accessId}>
        <Button className="timeline-buttons" onClick={this.getIndex.bind(this, this.props.accessId)}><i className="fa fa-circle"></i></Button>
 	</div>
     );
    }
}

export default Nav;
