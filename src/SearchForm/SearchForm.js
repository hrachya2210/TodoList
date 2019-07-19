import React, {Component} from 'react';
import './SearchFormStyle.css';

class SearchForm extends Component {
    constructor (){
        super();
        this.state = {
            term: ''
        }
    }

    onSearchTermChange = (event) => {
        event.preventDefault();
        const {changeSearchText} = this.props;
        const term= event.target.value;
        
        this.setState ({ //used only for value in input
            term
        }) ;  
        changeSearchText (term);
        
        
    }

    render () {
        const  { term } = this.state;
        return (
            <form className="SearchForm"> 
                <input onChange={this.onSearchTermChange} type='text' value={term} placeholder = 'Search TODO'></input>
            </form>
            
        )
    }

}

export default SearchForm;