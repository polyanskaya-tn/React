import React, {Component} from 'react'

class AddEvents extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      cat_items: [],
	      category: '',
	      title: '',
	      info: '',
	      author_items: [],
	      author: [], 
	      date: '',
	    };

	    this.eventSubmit = this.eventSubmit.bind(this);
	    this.changeCategory = this.changeCategory.bind(this);
	    this.changeAuthor = this.changeAuthor.bind(this);
	    this.changeTitle = this.changeTitle.bind(this);
	    this.changeInfo = this.changeInfo.bind(this);
	}

	componentDidMount() {
		var this_obj = this;

		fetch("/api/category")
      	.then(res => res.json())
      	.then(data => {
      		this_obj.setState({
            	cat_items: data
          	});  
      	});
		fetch("/api/author")
      	.then(res => res.json())
      	.then(data => {
      		this_obj.setState({
            	author_items: data
          	});  
      	});
	}

	eventSubmit(event) {
		event.preventDefault();
	    var params = 'title=' + encodeURIComponent(this.state.title)+
	        '&info=' + encodeURIComponent(this.state.info)+
	        '&category=' + encodeURIComponent(this.state.category)+
	        '&date=' + encodeURIComponent(this.state.date)+
	        '&authors=' + encodeURIComponent(this.state.author);

		fetch("/api/event", {
        	method: 'POST',
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	          'Accept': 'application/json, text/javascript, */*'
	        },
    	    body: params,
      	});
	}

	changeTitle(ev) {
	    this.setState({
	      title: ev.target.value
	    }); 
	}

	changeInfo(ev) {
	    this.setState({
	      info: ev.target.value
	    }); 
	}

	changeCategory(ev) {
	    this.setState({
	      category: ev.target.value
		}); 
	}

	changeAuthor(ev) {
		const select = ev.target;
		var arr = [];
		for (var i = 0; i < select.options.length; i++) {
			var option = select.options[i];
			if (option.selected) {
				arr[arr.length] = option.value;
			}
		}
		this.setState({
	    	author: arr
		}); 
	}
	
	render() {
		const categories=this.state.cat_items.map( (item) => {
			return <option key={item._id} value={item._id}>{item.category}</option>
		});
		const authors=this.state.author_items.map( (item) => {
			return <option key={item._id} value={item._id}>{item.surname} {item.name}</option>
		});

		return (
			<div>
			<form onSubmit={this.eventSubmit}>

	            <div>Заголовок</div>
	            <input name="title" type="text" 
	            value={this.state.title} onChange={this.changeTitle} />

	            <div>Сообщение</div>
	            <textarea rows="4" cols="45" name="info" 
	            onChange={this.changeInfo} value={this.state.info}></textarea>

				<div>Категория</div>
				<select value={this.state.category} onChange={this.changeCategory}>
		            {categories}
		        </select>	

				<div>Авторы</div>
				<select size="5" multiple value={this.state.author} onChange={this.changeAuthor}>
		            {authors}
		        </select>	

		        <input type="submit" value='Добавить' />
	    	    </form>
			</div>
		)
	}
}

export default AddEvents;