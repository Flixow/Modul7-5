import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';

import Tasks from './Tasks'
import Timer from './Timer'

export default class TasksList extends React.Component {

	constructor() {
		super();
		this.state = { 
			todos: [
				{ id: 1, value:'Be awesome', done: false },
				{ id: 2, value:'Learn React', done: true },
				{ id: 3, value:'Use JSX in my CodePens', done: true }
			],
			numeric: null 
		}
		this.addTask = this.addTask.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.delTask = this.delTask.bind(this)
	}

	componentDidMount() {
		this.numberHelper();
		console.log(this.props.params.id);
	}

	addTask(e) {
		e.preventDefault();
		if ( !this.state.inputValue ) return false;

		var todos = this.state.todos;

		todos.push({
			id: this.refs.time.state.secondsElapsed,
			value: this.state.inputValue,
		});

		this.setState({
		  todos: todos,
		  inputValue: ''
		});

		this.numberHelper();
		return false;
	}

	handleChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}

	delTask(index) {
		this.state.todos.splice(index, 1);

		this.setState({
			todos: this.state.todos
		});

		this.numberHelper();
	}
	numberHelper() {
		var lastNumber;
		if ( (this.state.todos.length+1) > 9 && (this.state.todos.length+1) < 20) {
			lastNumber = 0;
		} else {			
			lastNumber = (this.state.todos.length+1) % 10;
		} 
		switch (lastNumber) {
			case 1:
				this.setState({numeric: 'st'});
				break;
			case 2:
				this.setState({numeric: 'nd'});
				break;
			case 3:
				this.setState({numeric: 'rd'});
				break;
			default:
				this.setState({numeric: 'th'});
		}
	}

	render() {
		var todos = this.state.todos.map(function(todo) {
			return (
				<Tasks
				key={todo.id}
				id={todo.id}
				value={todo.value}
				delTask={this.delTask} /> 
			);
		}.bind(this));

		return (
			<Col sm={6}>				
					<Link to="taskslist/hello-world">						
						<h1>My Todo List ({this.state.todos.length})</h1>
					</Link>
					{this.props.delList ?
					<Button bsStyle="danger" onClick={this.props.delList} >Delete List</Button> : ''}
					<ListGroup>
						{todos}
					</ListGroup>			
					<Form inline onSubmit={this.addTask}>
						<FormControl type='text' value={this.state.inputValue || ''}
					    	onChange={this.handleChange}
					    	placeholder='What do you need to do?' /> 
					    <Button bsStyle="success" type="submit">{'Add ' + (this.state.todos.length+1) + this.state.numeric + ' Task'}</Button>
					</Form>
					<Timer ref='time' />
		    </Col>
		);
	}
}