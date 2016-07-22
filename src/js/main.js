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
        this.information = data.events[0].one; 
        this.title = data.title;
    }


    render() {
        return (
        <div>
        <Grid bsClass="container" fluid={true}>
            <Row>
                <Col md={10} >
                    <Title title={this.title} />
                </Col>
                <Col md={2}>
                    <Menu />
                </Col>
            </Row>
        </Grid>
        <Grid bsClass="container" fluid={true}>
            <Row>
                <Col md={12} >
                    <StoryMap data={this.information} />
                </Col>
            </Row>
        </Grid>
        <Grid bsClass="container" fluid={true}>
            <Row>
              <Col md={12}>
                <Nav data={this.information} />
              </Col>
            </Row>
        </Grid>
        </div>
        );
    }
}

render(<App />, document.getElementById("App"));
export default App;


