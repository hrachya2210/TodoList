import React, {Component} from 'react';
import ListRender from './ListRender';

class ToDoList extends Component {
    constructor () {
        super ()
        this.state = {
            maxid: 3,
            newTodoText: '',
            list: [
                {   
                    id: 1,
                    title: "todo1",
                    important: false,
                    done: false,
                },
                {
                    id: 2,
                    title: "todo2",
                    important: true,
                    done: false,
                },
                {
                    id: 3,
                    title: "todo3",
                    important: false,
                    done: false,
                }
            ]
        }
    }

    

    createNewTodoItem = () => {
        const {newTodoText} = this.state;
        return {
            id: this.state.maxid +1,
            text: newTodoText,
            important: false,
            done: false
        }
    }

    newTodoStateChange = (event) => {
        this.setState (
            {
                newTodoText: event.target.value
            }
        )
        
    }
    createNewTodoList = (event) => {
        event.preventDefault();
        const newTodoItem = this.createNewTodoItem();
        const {list} = this.state;
        const newList = [...list, newTodoItem];
        console.log (newList);
        this.setState (({list,newTodoText})=>{
                return {
                    list: newList,
                    newTodoText: "",
                    maxid: this.state.maxid+1
                }
                
            }
        )
        console.log(this.state.list);
    }

    

    renderTodoList = (toDoItems) => {
        return  toDoItems.map ((item)=>{
        
            return (<ListRender key={item.id} todoItem={item} />);
        })
    }
    
   

    render () {
        return (
            <div> 
                {/* {this.renderTodoList(this.state.list)} */}
                { this.renderTodoList(this.state.list) }
                
               
                <form onSubmit={this.createNewTodoList}>
                    <input onChange={this.newTodoStateChange} type="text" placeholder="new todo" value={this.state.newTodoText} ></input>
                    <button >add</button>
                </form>
                
            </div>
            
        )
    }
}

export default ToDoList;