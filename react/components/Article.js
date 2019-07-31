import React, {Component} from 'react'

class Article extends Component {

	render() {
		const {article} = this.props;
		const authors = article.authors.map( 
			(item) => {return item.name+' '+item.surname;}
		);
		const author_str = authors.join(', ');

		return (
			<div>
				<p className="header">{article.title} {article.category.category}</p>
				<p>{article.info}</p>
				<div>
					<div className="author">{author_str}</div>
					<div className="pdate">{article.date}</div>
					<div className="clear"></div>
				</div>
			</div>
		)
	}
}

export default Article;
