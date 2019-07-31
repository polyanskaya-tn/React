import React, {Component} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {loadAuthors, changeAuthor, loadArticles} from '../../AC/index'
import {EVENTS_OFFSET} from '../../constants'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

	constructor (props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
	    this.props.loadAuthors();
	}

	render() {
		const {authors, author} = this.props;
		const options=authors.map( 
				(item) => {
					var obj = {};
					obj.label = item.name + ' ' + item.surname;
					obj.value = item._id;
					return obj;
				});
	
		return (
			<div id="select">
				<Select options={options} 
				value={author} onChange={this.handleChange} />
			</div>
		)
	}

	handleChange(selection) {
		const {category, limit, loadArticles, changeAuthor} = this.props;
		changeAuthor(selection.value);

		loadArticles(
			category,
			selection.value,
			EVENTS_OFFSET, 
			limit
		);
	}
}

export default connect(state =>({
	authors: state.author,
	category: state.filters.category,
	author: state.filters.author,
	limit: state.filters.limit
}), {loadAuthors, changeAuthor, loadArticles} ) (SelectFilter);


