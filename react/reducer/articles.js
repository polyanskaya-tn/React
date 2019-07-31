import {LOAD_ARTICLES, START, SUCCESS, FAIL,
    EVENTS_OFFSET,EVENTS_LIMIT} from '../constants'

export const articles = (articles = [], action) => {
	const {type, response} = action;
	
	switch (type) {
		case LOAD_ARTICLES+SUCCESS :  {
			const [ ...articles] = response;
			return articles;			
		}
	}
	return articles;
}

export const loading = (loading = false, action) => {
  const {type} = action;
	switch (type) {
		case LOAD_ARTICLES+START : return true; 
		case LOAD_ARTICLES+SUCCESS : return false;
		case LOAD_ARTICLES+FAIL : return false;
	}
	return loading;
}

export const loaded = (loaded = false, action) => {
  const {type} = action;
	switch (type) {
		case LOAD_ARTICLES+START : return false; 
		case LOAD_ARTICLES+SUCCESS : return true;
		case LOAD_ARTICLES+FAIL : return false;
	}
	return loaded;
}


