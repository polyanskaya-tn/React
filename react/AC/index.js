import qs from 'qs'
import {LOAD_ARTICLES, LOAD_CATEGORIES, LOAD_AUTHORS,
CHANGE_CATEGORY, CHANGE_AUTHOR} from '../constants'

export function loadArticles(category, author, offset, limit) {

    const obj = { category, author, offset, limit };
    let req = qs.stringify(obj);
	if (req) req = '?'+req;

	return {
		type: LOAD_ARTICLES,
        payload : {offset, limit},
		callAPI: '/api/event'+req
	}
}

export function loadCategories() {

	return {
		type: LOAD_CATEGORIES,
		callAPI: '/api/category'
	}
}

export function loadAuthors() {

	return {
		type: LOAD_AUTHORS,
		callAPI: '/api/author'
	}
}

export function changeCategory(id) {
	return {
		type: CHANGE_CATEGORY,
		payload : {id}
	}
}

export function changeAuthor(id) {
	return {
		type: CHANGE_AUTHOR,
		payload : {id}
	}
}