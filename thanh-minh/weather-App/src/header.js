import React from 'react';
import {Icon} from 'antd';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className ='header'>
              {/*<Icon type="sync" style={{color: 'white'}}/>*/}
                 <h2>{this.props.city}</h2> 
            </div>
        );
    }
}
export default Header;