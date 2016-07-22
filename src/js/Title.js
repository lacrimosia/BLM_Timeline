import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
    }
    render() {
        return (<div>
        			<h3>{this.title}</h3>
        		</div>);
    }
}

export default Title;
