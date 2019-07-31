import React, {Component} from 'react'
import AddEvents from './AddEvents'

class Add extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      category: '',
	      name: '',
	      surname: '',
	    };
	    this.categorySubmit = this.categorySubmit.bind(this);
	    this.changeCategory = this.changeCategory.bind(this);
	    this.authorSubmit = this.authorSubmit.bind(this);
	    this.changeName = this.changeName.bind(this);
	    this.changeSurName = this.changeSurName.bind(this);
	}

	categorySubmit(event) {
		event.preventDefault();
	    var params = 'category=' + encodeURIComponent(this.state.category);
		fetch("/api/category", {
        	method: 'POST',
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	          'Accept': 'application/json, text/javascript, */*'
	        },
    	    body: params,
      	});
	}

	changeCategory(ev) {
	    this.setState({
	      category: ev.target.value
	    }); 
	}

	authorSubmit(event) {
		event.preventDefault();
	    var params = 'name=' + encodeURIComponent(this.state.name) +
	        '&surname=' + encodeURIComponent(this.state.surname);

		fetch("/api/author", {
        	method: 'POST',
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	          'Accept': 'application/json, text/javascript, */*'
	        },
    	    body: params,
      	});
	}

	changeName(ev) {
	    this.setState({
	      name: ev.target.value
	    }); 
	}

	changeSurName(ev) {
	    this.setState({
	      surname: ev.target.value
	    }); 
	}

	render() {
		return (
			<div>
			<div className="row">
			<div className="col-md-4">
				<form onSubmit={this.categorySubmit}>
		            <div>Категория</div>
		            <input name="category" type="text" 
		            value={this.state.category} onChange={this.changeCategory} />
			        <input type="submit" value='Добавить' />
	    	    </form>
	    	 	<form onSubmit={this.authorSubmit}>
		            <div>Имя</div>
		            <input name="name" type="text" 
		            value={this.state.name} onChange={this.changeName} />
		            <div>Фамилия</div>
		            <input name="surname" type="text" 
		            value={this.state.surname} onChange={this.changeSurName} />
			        <input type="submit" value='Добавить' />
	    	    </form>
	    	</div>
	    	<div className="col-md-8">
	    	    <AddEvents />
	    	</div>
	    	</div>
			</div>
		)
	}
}

export default Add;