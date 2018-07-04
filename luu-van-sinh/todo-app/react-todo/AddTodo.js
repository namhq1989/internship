import React from 'react';

class AddTodo extends React.Component {

    handleSubmit(e){
        e.preventDefault()
        let text = this.refs.input.value.trim()
        if(!text) return   
        this.props.handleAdd(text)
        this.refs.input.value = ""
    }

    handleToggleAll(e) {
        var {toggleAll} = this.props
        toggleAll(e.target.checked)       
    }

    render() {
        return (
            <form className="header" onSubmit={this.handleSubmit.bind(this)}>
                <h1>todos</h1>
                { (this.props.count > 0) ? <input className="toggle-all" checked={this.props.isCheckedAll} 
                    type="checkbox" onChange={this.handleToggleAll.bind(this)}/> : ""}
                <input className="new-todo" placeholder="What need to be done?" ref="input"
                    autoFocus="true" />
            </form>
        );
    }
}
export default AddTodo;
