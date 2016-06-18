import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Learning from './components/Learning';
import Timer from './components/Timer';
import Posts from './components/Posts';
import TasksList from './components/TasksList';
import TasksLists from './components/TasksLists';
import Home from './components/Home';
import Syncano from './components/syncano';


const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home}>
			<IndexRoute component={Learning}></IndexRoute>
			<Route path='taskslist(/:id)' component={TasksList}></Route>
			<Route path='taskslists' component={TasksLists}></Route>
			<Route path='posts' component={Posts}></Route>
			<Route path='timer' component={Timer}></Route>
			<Route path='syncano' component={Syncano}></Route>
		</Route>
	</Router>, 
app);