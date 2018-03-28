import axios from 'axios';

export function addFriend() {
	return function(dispatch) {
		axios.get("http://rest.learncode.academy/api/johnbob/friends")
		  .then((response) => {
		  	dispatch({type: "ADD_FRIEND", payload: response.data})
		  })
		  .catch((err) => {
		  	dispatch({type: "ADD_FRIEND_REJECTED", payload: err})
		  }) 
	}
}