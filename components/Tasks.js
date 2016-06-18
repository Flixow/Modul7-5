import React from 'react';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';

export default class Tasks extends React.Component {
	render() {
		return (
			<ListGroupItem>
			    <span>{this.props.value} added at: {this.props.id} second </span>
			    <Button bsStyle="danger" bsSize="xsmall" onClick={this.props.delTask}>&times;</Button>
			</ListGroupItem>
		)
	}
}