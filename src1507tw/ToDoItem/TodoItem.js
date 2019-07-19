import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    handleDoneChange = () => {
        const  { changeType, todoItem } = this.props;
        changeType (todoItem.id, "done");
    }

    handleImportantChange = () => {
        const  { changeType, todoItem } = this.props;
        changeType (todoItem.id, "important");
    }


    render () {
        const {todoItem} = this.props; //?????????????????????
        const {id, title,important, done} = todoItem;
        let classes ='';
        if (important) {
            classes =classes+' important'
        }
        if (done) {
            classes =classes+' done'
        }
        return (
            <div className = "todoRow">
                <span onClick = {this.handleDoneChange} className={classes}>{id}.{title}</span> 
                <button onClick = {this.handleImportantChange}  className="button">Important</button>
            </div>
        )
    }
}
export default TodoItem;