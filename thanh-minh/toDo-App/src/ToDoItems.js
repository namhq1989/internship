import React from 'react';
import ReactDOM from 'react-dom';
class TodoItems extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
        }
    }
    removeTodo(id){
        console.log("idasdf", this.props.id);
        this.props.removeTodo(this.props.id);
    }
    handleEdit (event) {
        this.setState ({isEdit: true, changedText: this.props.todo.text})
        setTimeout(()=>{
            ReactDOM.findDOMNode(this.refs.editfocus).focus();
        },1)
    }
    handleBlur (event) {
        if (this.refs.editfocus.value.trim().length > 0){
            this.props.editTodo(event.target.value,this.props.id )
            
        } else{
            this.props.removeTodo(this.props.id);
        }  
        this.setState ({isEdit: false})
    }
    handleEditKeyDown (event) {
        if (event.keyCode === 13 ){
            if (this.refs.editfocus.value.trim().length > 0){
                console.log("edit change ",this.refs.editfocus.value)
                this.props.editTodo(event.target.value,this.props.id )
            }else{
                this.props.removeTodo(this.props.id);
            }
            this.setState ({isEdit: false})
        }
    }
    handleToggle (event) {
        if (event.target.checked) {
            console.log("Toggle ",event.target.checked,"id ", this.props.id);
            this.props.toggle(this.props.id, event.target.checked)   
        } else {
            this.props.toggle(this.props.id,event.target.checked)
        }
    }

    
    render(){
        let views = {};
        let edit = {};
        let toggles= {};
        let ischecked;
        if (this.state.isEdit) {
            views.display = 'none';
        } else {
            edit.display = 'none';
        }

        if (this.props.todo.done) {
            toggles.textDecoration = 'line-through';
            toggles.opacity = '0.3';
            ischecked = 'checked';
        } else {
            toggles.textDecoration = 'none';
            ischecked = '';
        }
       
        return(
        <li key={this.props.id}>
            <div className="view" style={views}>
                <input checked={ischecked} className="toggle" type="checkbox"
                    onChange={this.handleToggle.bind(this)}>
                </input>
                <label style={toggles} onDoubleClick={this.handleEdit.bind(this)}>
                    {this.props.todo.text}
                </label>
                <button  className="destroy" onClick={this.removeTodo.bind(this)} >X</button>
            </div>
            <input  ref="editfocus" className="edit"style={edit} defaultValue={this.state.changedText} 
                onBlur={this.handleBlur.bind(this)} onKeyDown={this.handleEditKeyDown.bind(this)}
            /> 
        </li>
        );
    }
}
export default TodoItems;