import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import TodoFooter from './TodoFooter';

class TodoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            nowShowing: "all"
        }
        this.todoCounter = 1
    }

    createNewTodo(text) {
        return {
            text: text,
            done: false,
            id: this.todoCounter++
        }
    }

    remove(index) {
        this.state.data.splice(index,1)
        this.setState(this.state)
    }

    add(text) {
        const todoItem = this.createNewTodo(text)
        this.state.data.push(todoItem)
        this.setState(this.state)
    }

    done(index) {
        this.state.data[index].done = !this.state.data[index].done
        this.setState(this.state)
    }

    edit(index,text) {
        this.state.data[index].text = text
        this.setState(this.state)
    }

    clearCompleted() {
        for (let i= this.state.data.length - 1; i >= 0; i--) {
            if(this.state.data[i].done){
                this.state.data.splice(i,1)
            }
        }
        this.setState(this.state)
    }

    toggleAll(status) {
        for (let i=0; i < this.state.data.length; i++) {
            this.state.data[i].done = status
        }
        this.setState(this.state)
    }

    countItemLeft(){
        let count = 0
        let array = this.state.data
        for (let i = 0; i < array.length; i++) {
            if (!array[i].done) {
                count++
            }            
        }
        return count
    }

    countCompleted() {
        let count = 0
        let array = this.state.data
        for (let i = 0; i < array.length; i++) {
            if (array[i].done) {
                count++
            }            
        }
        return count
    }

    isCheckedAll () {
        for (let i = 0; i < this.state.data.length; i++) {
            if (!this.state.data[i].done) {
                return false
            }            
        }
        return true
    }
    
    select(option) {
        this.setState({nowShowing: option})
    }
    render() {
        return ( 
            <div className="todoapp">
                <AddTodo handleAdd={this.add.bind(this)} toggleAll={this.toggleAll.bind(this)}
                    isCheckedAll={this.isCheckedAll()} count={this.state.data.length}/>

                {this.state.data.map((item,i)=> {
                    switch (this.state.nowShowing) {
                        case "all":
                            return <Todo key={item.id} item={item} index={i}
                            handleDone={this.done.bind(this)} handleRemove={this.remove.bind(this)}
                            handleEdit={this.edit.bind(this)}/>
                        case "active":
                            if (!item.done) {
                                return <Todo key={item.id} item={item} index={i}
                                handleDone={this.done.bind(this)} handleRemove={this.remove.bind(this)}
                                handleEdit={this.edit.bind(this)}/>
                            }
                            break
                        case "completed":
                            if (item.done) {
                                return <Todo key={item.id} item={item} index={i}
                                handleDone={this.done.bind(this)} handleRemove={this.remove.bind(this)}
                                handleEdit={this.edit.bind(this)}/>
                            }
                    }
                })}

                {(this.state.data.length > 0 ) ? <TodoFooter count={this.countItemLeft()}
                    completedCount={this.countCompleted()} nowShowing={this.state.nowShowing}
                    clearCompleted={this.clearCompleted.bind(this)} 
                    select={this.select.bind(this)}/> : ""}
            </div>
        );
    }
}
export default TodoList;