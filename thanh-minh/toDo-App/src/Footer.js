import React from 'react';
class Footer extends React.Component{
    constructor (props) {
        super (props);
    }
    clearCompleted (event) {
        this.props.clearCompleted();
    }
    selectOption (e) {
        this.props.selectOption(e.target.id)
    }
    render () {
        let isButtonClear = {} ;
        let all, active, completed;
        if (this.props.isClear == true){
            isButtonClear.display = 'block';
        }else{
            isButtonClear.display = 'none';
        }

        (this.props.nowShowing == 'all') ? all = "selected" : all = "";
        (this.props.nowShowing == 'active') ? active = "selected" : active = "";
        (this.props.nowShowing == 'completed') ? completed = "selected" : completed = "";
        return (
            <footer className="footer">
                <span className="todo-count"> 
                    <strong>{this.props.count}</strong>
                    <span>  </span>
                    <span>items</span>
                    <span>  </span>
                    <span>left</span>
                </span>

               
                <ul className="filters">
                    <li>
                        <a href="#/" className={all} onClick={this.selectOption.bind(this)}id="all">
                             All
                        </a>
                     </li>
                    <li>
                        <a href="#/active" className={active} onClick={this.selectOption.bind(this)} id="active">
                        Active</a> 
                    </li>
                    <li>
                        <a href="#/completed" className={completed} onClick={this.selectOption.bind(this)} 
                        id="completed">Completed</a>
                    </li>
                </ul>
                <button style={isButtonClear} 
                    className="clear-completed" onClick={this.clearCompleted.bind(this)}>
                    Clear completed
                </button>
            </footer>
        );
    }
}
export default Footer; 