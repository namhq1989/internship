import React from 'react';
import TodoItems from './ToDoItems';
class List extends React.Component{
    constructor(props){
        super(props);
    }
    removeTodo(id){
        console.log("list to do id ",id);
        this.props.removeTodo(this.props.id);
    }
    render () {
        return (
            <section className="main">
					<ul className="todo-list">
                        {
                            this.props.list.map((todo, index) => <TodoItems todo={todo} id={index} key={index} removeTodo={this.removeTodo.bind(this)}/>)
                        }
					</ul>
			</section>
        );
    }
}
export default List;