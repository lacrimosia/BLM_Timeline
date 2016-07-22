'use strict';

import React from 'react';
import {render} from 'react-dom';
import '../scss/app.scss';
const data = require('../data/data.json');
import StoryMap from './StoryMap';
import Title from './Title';
import Menu from './Menu';
import { Grid, Row, Col } from 'react-bootstrap';

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
            <Row>
                <Col md={8} >
                    <Title title={this.title} />
                </Col>
                <Col md={4}>
                    <Menu />
                </Col>
            </Row>
            <Row>
                <StoryMap data={this.information} />
            </Row>
        </Grid>
        </div>
        );
    }
}

render(<App />, document.getElementById("App"));
export default App;


