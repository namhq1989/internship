import React from 'react';
class Gallery extends React.Component {
    render(){
      return (
        <div className="col-sm-3">
          <img src={require('./images/'+this.props.image)} className="rounded-circle" alt={this.props.text} width="40" height="40"/>
          <p className="title-img">{this.props.text}</p>
         </div>
      );
    }
  }
export default Gallery;  