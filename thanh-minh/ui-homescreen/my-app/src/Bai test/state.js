import React from 'react';
class Test extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data : ' Intial Data...'
        }
        this.upDateState =this.upDateState.bind(this);
    };

    upDateState(){
        this.setState({data: 'Data updated from the chid component...'})
    }
    render() {
        return (
            <div>
                <Contents myDataProp= {this.state.data} upDateStateProp={this.upDateState} />
            </div>
        );
    }

}
class Contents extends React.Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.upDateStateProp}>CLICK</button>
                <h4>{this.props.myDataProp}</h4>
            </div>
        );
    }
}
export default Test;