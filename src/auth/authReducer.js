import { types } from "../types/types";
/* 
const state = {
    name: 'Kevin :)',
    logged: true
}
 */
const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				...action.payload,
				logged: true,
			};
		case types.logout:
			return {
				logged: false,
			};

		default:
			return state;
	}
};

export default authReducer;
