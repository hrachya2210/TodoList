import React, {Component} from 'react';
import TodoItem from '../ToDoItem/TodoItem';
import AddNewTodoForm from '../AddNewTodoForm/AddNewTodoForm'
import SearchForm from '../SearchForm/SearchForm';
import FilterForm from '../FilterForm/FilterForm';

class App extends Component {
    constructor () {
        super() 
        this.maxId= 1;
        this.filterOptionList = [
            {
                filterId:1,
                filterOption: "All"
                
            },
            {
                filterId:2,
                filterOption: "Done"
            },
            {
                filterId:3,
                filterOption: "Important"
            },
            {
                filterId:4,
                filterOption: "Active"
            }
        ];
        this.state = {
            list: [
                this.createTodoItem("Get UP"),
                this.createTodoItem("Wash up"),
                this.createTodoItem("Eat breakfast"),
                this.createTodoItem("Go to work")
            ],
            term: '',
            filterOptionSelected: 'All'
            // filter: 'All', // one  of ['All', 'Done', 'Important', 'Active']
            
        }
    }

    createTodoItem = (title) => {
        return {
            id: this.maxId++,
            title: title,
            important: false,
            done: false
        }
    } 

    addNewList = (newTodoTitle) => {
        const newTodoItem = this.createTodoItem(newTodoTitle);
        this.setState( ({list}) =>{
            const  newTodoList = [...list, newTodoItem];
                return {
                    list: newTodoList
                }
            } 
        )
    }

    changeType = (id, propertyToChange) => {
        
        this.setState (({list})=>{
            const index = list.findIndex ((item) => item.id === id);
            const oldItem = list[index];
            const newItem = {...oldItem, [propertyToChange]: !oldItem[propertyToChange]}; ;
            const newList = [...list.slice(0,index), newItem, ...list.slice(index+1)];
            return {
                list:newList
            }
        })
    }

    changeSearchText = (term) => {
        this.setState ({
            term
        })    
    }

    listFilter (todoList, filter) {
        switch (filter) {
            case 'All':
                return  todoList;
            case 'Done':
                return todoList.filter((todo) => todo.done);
            case 'Active':
                return todoList.filter((todo) => !todo.done); 
            case 'Important': 
                return todoList.filter((todo) => todo.important);
            default: 
                return todoList;
        }
    }

    search = (todoList, term) => {
        if (term.length === 0) {
            return todoList
        } 
        else {
            return todoList.filter((item)=>item.title.indexOf(term) > -1)
        }
    }

    filterOption = (filterOptionSelected) => {
        this.setState({
            filterOptionSelected
        })
    }

    renderTodoList = (toDoItems) => {
        return  toDoItems.map ((item)=>{
            return (<TodoItem changeType= {this.changeType} key={item.id}  todoItem={item} />);
        })
    }
    
    renderFilterButtons = (filterOptionList) => {
        return filterOptionList.map ((filterItem) => {
            return (<FilterForm filterOption={this.filterOption} key={filterItem.filterId} filterOptionName = {filterItem.filterOption} filterOptionSelected={this.state.filterOptionSelected} />)
        })
    }
    
    render (){
        const {list, term, filterOptionSelected} = this.state;
        const visibleItems =this.listFilter(this.search(list, term), filterOptionSelected );
        return (
            <div>
                <h1>TODO List</h1>
                <h5>{this.maxId-1} things in the list and {list.filter((item) => item.done).length} done</h5>
                <SearchForm changeSearchText = {this.changeSearchText} />
                {this.renderFilterButtons (this.filterOptionList)}
                {this.renderTodoList(visibleItems)} 
                <AddNewTodoForm addNewList={this.addNewList} />
            </div>
        )
    } 
} 
export default App;