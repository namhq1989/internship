import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editting: false
        }
    }

    removeTodo(){
        var {index, handleRemove} = this.props
        handleRemove(index)
    }

    handleEdit() {
        this.setState({editting:true ,changedText:this.props.item.text})
        setTimeout(()=>{
            ReactDOM.findDOMNode(this.refs.edit).focus()
        },1)
    }

    handleEditDone(e) {
        if(e.keyCode === 13) {
            this.hanleBlur(e)
        }
    }

    handleDone() {
        var {index, handleDone} = this.props
        handleDone(index)
    }

    handleEditChange(e) {
        var text = e.target.value
        this.setState({changedText: text})
    }
     
    hanleBlur(e) {
        this.setState({editting: false})
        var {index, handleEdit, handleRemove} = this.props
        if (!e.target.value.trim()) {
            handleRemove(index)
        } else {
            handleEdit(index, e.target.value)
        }
    }

    render() {
        var viewStyle = {}
        var editStyle = {}
        if(this.state.editting){
            viewStyle = {display: 'none'}
        } else {
            editStyle = {display: 'none'}
        }
        return (
            <div className={this.props.item.done ? "completed" : ""}>
                <div style={viewStyle} className="item-todo" onDoubleClick={this.handleEdit.bind(this)}>
                    <input type="checkbox" className="toggle" checked={this.props.item.done} 
                        onClick={this.handleDone.bind(this)} readOnly/>
                    <span className="checkmark"></span>

                    <span className="title"  >
                        {this.props.item.text}</span>
                        
                    <button className="remove-btn" onClick={this.removeTodo.bind(this)}>x</button>
                </div>
                <input className="edit" type="text" style={editStyle} defaultValue={this.props.item.text}
                    onKeyUp={this.handleEditDone.bind(this)} onBlur={this.hanleBlur.bind(this)}
                    ref="edit"/>
            </div>
        );
    }
}
export default Todo;
