import React, {Component} from 'react';

class ToDoItem extends Component {
    render () {
        const {todoItem} = this.props;
        // const {text} = this.props;
        // console.log(this.props);
        // console.log(text);
        return (
            <div>
                <h1>{todoItem.title}</h1>
            </div>
        )
    }
}
export default ToDoItem;