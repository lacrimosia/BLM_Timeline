'use strict';

import React from 'react';
import {render} from 'react-dom';
import '../scss/app.scss';
const data = require('../data/data.json');
import StoryMap from './StoryMap';
import Title from './Title';
import Menu from './Menu';
import { Grid, Row, Col } from 'react-bootstrap';
import Nav from './Nav';

class App extends React.Component {
    constructor(props) {
        super(props);
       this.information = data.events; 
       this.title = data.title;
    }

    render() {
        return (
        <div>
        <Grid bsClass="container" fluid={true}>
            <Row className="timeline-header">
                <Col md={10} >
                    <Title title={this.title} />
                </Col>
                <Col md={2}>
                    <Menu />
                </Col>
            </Row>
        </Grid>
        <Grid bsClass="container" fluid={false}>
            <Row>
                <Col md={12} className="window">
                {
                    this.information.map(function (b) {  
                     if(b.id===0){
                        return (
                        <div key={b.id} >
                            <StoryMap title={b.title} accessKey={b.id} location={b.situation.location} text={b.content.text} imageSrc={b.media.image.src} />
                        </div>
                        );
                     }
                  }.bind(this))
                }
                </Col>
                <Col md={12}>
                {
                    this.information.map(function (b) {    
                        return (
                        <Nav accessId={b.id} key={b.id}/> 
                        );
                    }.bind(this))
                }
                </Col>
            </Row>
        </Grid>
        </div>
        );
    }
}

render(<App />, document.getElementById("App"));
export default App;


