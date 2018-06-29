import React from 'react';
class Page extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showWarnning:true
        };
    this.handleToggleClick=this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState (prevState => ({
            showWarnning: !prevState.showWarnning
        }));
    }
    render () {
        return (
            <div>
                <WarnningBanner warn={this.state.showWarnning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarnning ? 'Hide': 'Show'}
                </button>
            </div>
        );
    }
}

function WarnningBanner (props) {
    if(!props.warn) {
        return null;
    } 
    return (
        <div className="warning" >
            Warning!
        </div>
    );

}
export default Page;