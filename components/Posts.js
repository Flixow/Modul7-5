import React from 'react';
import { Link } from 'react-router';

export default class Posts extends React.Component {
	render() {
		return (
			<div>
				<h1>Posts Page</h1>
				<Link to="timer">timer</Link>
			</div>
		)
	}
}