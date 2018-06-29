import React from 'react';
class ListCoPhieu extends React.Component {
    render() {
      return (
        <div className="row">
            <div className="col-sm-4">
                <p className="title-img center text-center">{this.props.name}</p>
            </div>
            <div className="col-sm-4">
                <p className="title-img center text-center">{this.props.price} VND</p>
            </div>
            <div className="col-sm-4">
                <p className="title-img center text-center">{this.props.percent} %</p>
            </div>
        </div>
      );
    }
  }
export default ListCoPhieu;  