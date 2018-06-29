import React from 'react';
class HeaderCard extends React.Component {
    render(){
      return (
        <div className="card-header">
        <div className="img-header" style={{float: 'left'}}>
          <img src={require('./images/'+this.props.image)} alt={this.props.image} />
        </div>
        <div className="title-header">
          <span>{this.props.text}</span>
        </div>
              <div style={{float:'right'}}>
                  <a href="#" className="ellipsis"  ><i className="fa fa-ellipsis-v"  aria-hidden="true" ></i></a>
              </div>
          </div>
      );
    }
  }

export default HeaderCard;