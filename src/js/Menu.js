import React from 'react';
import { Button } from 'react-bootstrap';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (<div>
        		<Button>Reload</Button>
        		<Button>Help</Button>
        </div>
        );
    }
}

export default Menu;
