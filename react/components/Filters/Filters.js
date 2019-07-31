import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectFilter from './SelectFilter'
import CategoryList from './CategoryList'
import {changeCategory,changeAuthor,loadArticles} from '../../AC/index'
import {EVENTS_OFFSET, EVENTS_LIMIT} from '../../constants'

class Filters extends Component {

	constructor (props) {
		super(props);
		this.handleReset = this.handleReset.bind(this);
	}

	render() {
		return (
			<div>
				<h4>Categories</h4>
				<CategoryList/>
				<h4>Participant</h4>
				<SelectFilter/>
				<button id="reset" onClick={this.handleReset}>Reset</button>
			</div>
		)
	}

	handleReset() {
		this.props.loadArticles('', '', EVENTS_OFFSET, EVENTS_LIMIT);
		this.props.changeCategory();
		this.props.changeAuthor();
	}
}

export default connect(null, 
	{loadArticles, changeCategory, changeAuthor}) (Filters);