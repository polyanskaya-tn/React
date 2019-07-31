import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadArticles} from '../AC/index'
import Article from './Article'
import Loader from './Loader'
import {getErrorMessage} from '../reducer/error'
import {EVENTS_OFFSET, EVENTS_LIMIT, DEF_ARTICLES} from '../constants'
import {Link} from 'react-router-dom'

class ArticleList extends Component {

	constructor (props) {
		super(props);
		this.handleUpdateLoad = this.handleUpdateLoad.bind(this);
		this.handleMoreEvents = this.handleMoreEvents.bind(this);
	}

	componentDidMount(){
		const {loading, loaded, loadArticles} = this.props;
		const {category, author, offset, limit} = this.props;
		if (!loading && !loaded)
            loadArticles(category, author, offset, limit);
	}

	render() {
		const {loading, error, articles, limit} = this.props;
		if (loading) 
			return <Loader/>;
		if (error !== '') 
			return (
				<div>
					Error: {error} <br/>
					<a href="#" onClick={this.handleUpdateLoad}>Refresh</a>
				</div>
			);

		const articleElements = articles.map( 
			(article) => <li key={article._id}><Article article={article}/> </li>
		);

		let linkMore = '';
		if (articleElements.length === limit)
			linkMore = (<a href="#" onClick={this.handleMoreEvents}>More</a>);
		if (!articleElements.length)
			linkMore = 'There are no more events';

		return (
			<div>
				<Link to="/add">Добавить</Link>
				<ul>
					{articleElements}
				</ul>
				{linkMore}
			</div>
		)
	}

	handleUpdateLoad() {
		const {category, author,offset, limit, loadArticles} = this.props;
		loadArticles(category, author, offset, limit);
	}

	handleMoreEvents() {
        const {category, author,offset, limit, loadArticles} = this.props;

        loadArticles(
			category,
			author,
			offset + limit, 
			limit
		);
	}

}

export default connect(state =>({
	articles: state.articles,
	loading:  state.loading,
	loaded:   state.loaded,
	category: state.filters.category,
	author: state.filters.author,
    offset: state.filters.offset,
	limit: state.filters.limit,
	error: getErrorMessage(state.error, DEF_ARTICLES)
}), {loadArticles}) (ArticleList);

