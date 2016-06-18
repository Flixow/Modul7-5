import React from 'react';

export default class Timer extends React.Component {
	constructor() {
		super();
		this.state = { 
			secondsElapsed: 0,
			action: 'stop' 
		}
		this.tick = this.tick.bind(this)
		this.reset = this.reset.bind(this)
		this.toggle = this.toggle.bind(this)
	}	

	tick() {
		this.setState({secondsElapsed: this.state.secondsElapsed + 1});
	}

	componentDidMount() {
		this.interval = setInterval(this.tick, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.secondsElapsed % 1 === 0;
	}

	reset() {
		this.setState({secondsElapsed: 0});
	}

	toggle(e) {
		if ( this.state.action === 'stop') {
			clearInterval(this.interval);
			this.setState({action: 'start'});
		} else if ( this.state.action === 'start' ) {
			this.interval = setInterval(this.tick, 1000);
			this.setState({action: 'stop'});
		}
	}

	render(){
		let txt = this.props.txt;
		return (
			<div>
				{this.state.secondsElapsed}
				<button onClick={this.reset}>Reset</button>
				<button onClick={this.toggle}>{this.state.action}</button>
			</div>
		)		
	}
	
}