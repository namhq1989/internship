import React from 'react';

class TodoFooter extends React.Component {
    select(e) {
        this.props.select(e.target.id)        
    }
    render() {
        return (
            <div className="footer">
                <span className="todo-count">
                    <span>{this.props.count}</span>
                    <span> {(this.props.count == 1) ? "item" : "items"} left</span>
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/" className={(this.props.nowShowing=="all")? "selected": ""}
                            onClick={this.select.bind(this)} id="all">
                        All</a>
                    </li>
                    <li>
                        <a href="#/Active" className={(this.props.nowShowing=="active")? 
                            "selected": ""} onClick={this.select.bind(this)} id="active">Active</a>
                    </li>
                    <li>
                        <a href="#/Completed" className={(this.props.nowShowing=="completed")? 
                        "selected": ""} onClick={this.select.bind(this)} id="completed">Completed</a>
                    </li>
                </ul>
                {(this.props.completedCount > 0) ? <button className="clear-completed" 
                onClick={this.props.clearCompleted}>Clear Completed</button> : ""}
                
            </div>
        );
    }
}
export default TodoFooter;
