import React from 'react';
class ToDoInput extends React.Component{
    constructor (props) {
        super(props);
        this.handleNewTodoKeyDown=this.handleNewTodoKeyDown.bind(this);
    }
    handleNewTodoKeyDown(e){
        if (e.keyCode === 13){
            if ( this.refs.text.value.trim().length > 0){
                console.log(this.refs.text.value);
                this.props.addTodo(this.refs.text.value.trim())
                this.refs.text.value="";  
            }
        }
    }
    render() {
        return (
            <input className="new-toDo" placeholder="what needs to be done?" ref="text"
             onKeyDown={this.handleNewTodoKeyDown}
             />
        );
    }
}
export default ToDoInput;