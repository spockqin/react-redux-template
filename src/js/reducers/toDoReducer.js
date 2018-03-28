export default function reducer(state=[], action) {
	switch (action.type) {
		case 'ADD_TODO': {
			return state.concat([action.payload]);
		}
		default: {
			return state
		}
	}
}