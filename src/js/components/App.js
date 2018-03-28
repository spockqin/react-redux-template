import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToDo } from '../actions/toDoActions';
import { addFriend } from '../actions/friendActions';

@connect((store) => {
	return {
		toDos: store.toDos,
		friends: store.friends
	};
})
export default class App extends Component {
	componentWillMount() {
		this.props.dispatch(addToDo());
		this.props.dispatch(addFriend());
		this.props.dispatch(addFriend());
	}

	render () {
		return <div>
			<p>To-dos are {this.props.toDos}</p>
			<p>Friends are {this.props.friends}</p>
		</div>
	}
}