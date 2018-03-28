export default function reducer(state=[], action) {
	switch (action.type) {
		case "ADD_FRIEND": {
			return state.concat(action.payload[13].id);
		}
		case "ADD_FRIEND_REJECTED": {
			return state;
		}
		default: {
			return state;
		}
	}
}