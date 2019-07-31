import {LOAD_AUTHORS, START, SUCCESS, FAIL} from '../constants'

export const author = (authors = [], action) => {
	const {type, response} = action;
	
	switch (type) {
		case LOAD_AUTHORS+SUCCESS :  
			return authors = response.map(function(elem) {
				return Object.assign({}, elem);
			});
	}
	return authors;
}
