import React from 'react';
import ToDoInput from './Input.js';
import TodoItems from './ToDoItems';
import Footer from './Footer';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            data:[],
            nowShowing:'all',
        }
        this.addTodo=this.addTodo.bind(this);
        this.id =0;
    }
    addTodo(text){
        console.log("To do add: ",text);
        this.state.data.push({text:text, done:false, id:this.id++});
        this.setState(this.state)
    }
    removeTodo(id){
        console.log("App to do ID: ",id);
        console.log(this.state.data);
        
        this.state.data.splice(id,1);
        this.setState(this.state)
        console.log(this.state.data);
    }
    editTodo (text, id) {
        console.log("Sua app ", text, id)
        this.state.data[id].text = text;
        this.setState(this.state)
    }
    toggle (id, status) {
        console.log("App Nhan id ", id)
        this.state.data[id].done = status;
        this.setState(this.state)
    }
    toggleAll (event) {
        console.log("Tich chon hets ", event.target.checked)
        if (event.target.checked){
            for (let i = 0; i < this.state.data.length; i += 1 ){
                this.state.data[i].done = true;
            }
        }else{
            for (let i = 0; i < this.state.data.length; i += 1 ){
                this.state.data[i].done = false;
            }
        }
        this.setState(this.state)
    }

    countsItems () {
        let count = this.state.data.length;
        for (let i = 0; i < this.state.data.length; i += 1 ){
            if (this.state.data[i].done) {
                count -=1;
            }
        }
        return count;
    }
    isclearCompleted () {
        for (let i = 0; i < this.state.data.length; i += 1 ){
            if (this.state.data[i].done) {
                return true;
            }
        }
        return false;
    }
    clearCompleted(){
        for (let i = this.state.data.length - 1; i >=0 ; i -= 1 ){
            if (this.state.data[i].done) {
                this.state.data.splice(i,1);
            }
            
        }
        this.setState(this.state)
    }

    selectOption (event) {
       this.setState({nowShowing : event})
    }
    render(){
        let footer;
        let main;
        let count = this.state.data.length;
        let countItems = this.countsItems();
        let clear = this.isclearCompleted();

        if (count > 0) {
           main= <section className="main">
                    <input className="toggle-all" type="checkbox" onChange={this.toggleAll.bind(this)} ></input>
                    <ul className="todo-list">
                        {
                            this.state.data.map((todo, index) => {
                                switch(this.state.nowShowing){
                                    case "all":
                                        return  <TodoItems todo={todo} id={index} key={todo.id} 
                                                    removeTodo={this.removeTodo.bind(this)}
                                                    editTodo={this.editTodo.bind(this)}
                                                    toggle={this.toggle.bind(this)}

                                                />
                                    case "active":
                                        if (!todo.done){
                                            return  <TodoItems todo={todo} id={index} key={todo.id} 
                                                        removeTodo={this.removeTodo.bind(this)}
                                                        editTodo={this.editTodo.bind(this)}
                                                        toggle={this.toggle.bind(this)}
                                                    />
                                        }
                                        break;
                                    case "completed":
                                    if (todo.done){
                                        return  <TodoItems todo={todo} id={index} key={todo.id} 
                                                    removeTodo={this.removeTodo.bind(this)}
                                                    editTodo={this.editTodo.bind(this)}
                                                    toggle={this.toggle.bind(this)}
                                                />
                                    }
                                    default:
                                }
                            }
                            )
                        }
                    </ul>
			    </section>

            footer = <Footer count={countItems} isClear={clear} 
                clearCompleted={this.clearCompleted.bind(this)}
                selectOption={this.selectOption.bind(this)}
                nowShowing={this.state.nowShowing}/>
        }  

        return (
            <div>
                <section className="toDoApp">
                    <header>
                        <h1>toDos</h1>
                        <ToDoInput addTodo={this.addTodo} />
                    </header>
                    {main}
                    {footer}
                </section> 
            </div>
        );
    }
}
export default App;