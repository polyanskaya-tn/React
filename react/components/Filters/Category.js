import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeCategory,loadArticles} from '../../AC/index'
import {EVENTS_OFFSET} from '../../constants'

class Category extends Component {

	constructor (props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		const {category, selection} = this.props;
		const isSelect = (selection == category._id);
		return (
			<a href="#cat" onClick={this.handleChange} className={isSelect?"selected":""}>
				{category.category} 
			</a>
		)
	}

	handleChange() {
		const {category, author, limit, loadArticles, changeCategory} = this.props;
		changeCategory(category._id);

		loadArticles(category._id,
			author,
			EVENTS_OFFSET, 
			limit
		);
	}
}

export default connect(state =>({
	limit: state.filters.limit,
	selection: state.filters.category,
	author: state.filters.author,
}), {changeCategory,loadArticles}) (Category);
