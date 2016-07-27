import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
    }
    render() {
        return (<div>
        			<h6>{this.title}</h6>
        		</div>);
    }
}

export default Title;
