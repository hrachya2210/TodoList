import React, {Component} from 'react';

class AddNewTodoForm extends Component {
    constructor() {
        super ();
        this.state = {
            newTodoTitle: ''
        }
    }

    valueOnChange = (event) => {
        this.setState (
            {
                newTodoTitle: event.target.value
            }
        )
    }

    onFormSubmit = (event) => {
        event.preventDefault ();
        const {newTodoTitle} = this.state;
        const {addNewList} = this.props;
        addNewList (newTodoTitle);
        this.setState (
            {
                newTodoTitle: ""
            }
        )
    }

    render () {
        return (
            <div>
                <form onSubmit = {this.onFormSubmit}> 
                    <input onChange = {this.valueOnChange} type="text" value={this.state.newTodoTitle} placeholder="new TODO"></input>
                    <button>Add</button>
                </form>
            </div>  
        )
    }
}

export default AddNewTodoForm;