import {LOAD_ARTICLES, LOAD_CATEGORIES, 
	SUCCESS, EVENTS_OFFSET,EVENTS_LIMIT,
	CHANGE_CATEGORY, CHANGE_AUTHOR} from '../constants'

function setInitState() {
	return  (
		{
			category: null,
			author: null,
			offset: EVENTS_OFFSET,
			limit: EVENTS_LIMIT
		});
}

export const filters = (filters = setInitState(), action) => {
    const {type, payload, response} = action;

    switch (type) {
		case LOAD_ARTICLES+SUCCESS :
            return filters = Object.assign(filters, 
	            {
	            	offset: payload.offset,
					limit: payload.limit
	            });

        case CHANGE_CATEGORY : 
			return filters = Object.assign(filters, 
				{ category: payload.id} );
		
        case CHANGE_AUTHOR : 
			return filters = Object.assign(filters, 
				{ author: payload.id} );
	}
    return filters;
}

