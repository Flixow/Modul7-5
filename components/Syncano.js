import React from 'react';
import { Link } from 'react-router';

import Syncano from 'syncano';

const connection = Syncano({accountKey: "447f794c5923beabd1823b2400e7ea8067257904"});
const {Instance, DataObject, TriggerTrace} = connection;

const book = {
  title: "The Nightingale", 
  isbn: "0312577222",
  instanceName: "small-bush-8425",
  className: "books"
};

const query = {
  instanceName: "small-bush-8425",
  className: "books"
};

export default class SyncanoCmp extends React.Component {

	constructor() {
		super();

		connection.DataObject
			.please()
			.list({instanceName: "small-bush-8425", className: "books"})
			.pageSize(5)
			.then((res) => {
				console.log('first page', res);
				return res.next();
			}).then((res) => {
				console.log('second page', res);
				return res.prev();
			}).then((res) => {
				console.log('previous / first page', res);
			});

		// DataObject.please().list(query).pageSize(5).then((objects, response) => { 
		// 	console.log('objects', objects);
		// 	console.log('response', response);
	 //  });

	}

	consoleCallback(res) {
		console.log(res);
	}

	render() {
		// console.log(this);
		// const objects = this.items.map(function(item) {
		// 	return (
		// 		obj 
		// 	);
		// }.bind(this));

		return (
			<div>
				<h1>Syncano Page</h1>
				<ul>
				
				</ul>
			</div>
		)
	}
}