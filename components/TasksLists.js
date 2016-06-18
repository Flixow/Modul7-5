import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';

import TasksList from './TasksList';

export default class TasksLists extends React.Component {
	constructor() {
		super();
		this.state = { 
			lists: []
		}
		this.newList = this.newList.bind(this)
		this.delList = this.delList.bind(this)
	}

	newList() {
		var lists = this.state.lists;
		lists.push( <TasksList key={Date.now()} id={Date.now()} delList={this.delList}/> )
		this.setState({ lists: lists });
	}

	delList(index) {
		this.state.lists.splice(index, 1);

		this.setState({
			lists: this.state.lists
		});
	}

	render(){
		return (
			<div>
				<Button bsStyle="primary" onClick={this.newList}>Create new Todo List #{this.state.lists.length+1}</Button>
				<Row>{this.state.lists}</Row>
			</div>
		)		
	}
}