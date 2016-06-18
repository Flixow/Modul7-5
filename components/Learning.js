import React from 'react';
import ReactDOM from 'react-dom';

import ReactBootstrap from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';

export default class Learning extends React.Component {
	constructor() {
		super();
		this.state = { 
			txt: 'This is the state txt'
		}
		this.update = this.update.bind(this)
	}

	update(e) {
		this.setState( { txt: e.target.value })
	}

	render(){
		let txt = this.props.txt;

		return (
			<div>
				<h1>Hello React</h1>
				<h2>{txt}</h2>
				<Widget txt={this.state.txt} update={this.update} />
			</div>
		)		
	}
}

Learning.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.object
}

Learning.defaultProps = {
	txt: 'default props txt hereee'
}

const Widget = (props) => {
	return (
		<div>
			<input type="text"
				onChange={props.update} />
			<h3>{props.txt}</h3>
		</div>
	)	
};