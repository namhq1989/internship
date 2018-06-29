import React from 'react';
class Header extends React.Component {
  componentDidMount () {
    
  }
    render() {
      return (
        <div className= "top-wrapper" style={{color: 'white'}}>
          <p style={{float:'left'}}>23:12</p>
          <div className="icon-top" style={{float:'right'}}>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <i className="fa fa-signal" aria-hidden="true"></i>
            <i className="fa fa-wifi" aria-hidden="true"></i>
            <i className="fa fa-battery-three-quarters"></i>
          </div>	
        </div>
      );
    }
  }
  export default Header;