import React from 'react';
import {Row, Col } from 'antd';
class Future extends React.Component {
    constructor (props) {
        super(props);
    }
    changeKtoC = k => {
        return Math.round(k - 273.15);
    }
    render (){
        const forecastDay= this.props.forecastDay;
        const linkimg = "http://openweathermap.org/img/w/"+forecastDay.icon+".png";
        const get7Day= this.props.get7Day;
        return (
            <Row gutter={16}>
                <Col className="gutter-row" span={5}>
                    <div className="gutter-box">
                        <p className="paddingP">{get7Day}</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={5} 
                    style={{textAlign: 'center'}}>
                    <div className="gutter-box">
                        <i className="wi wi-raindrop"></i>
                        <p>{forecastDay.humidity} %</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={3}>
                    <div className="gutter-box">
                            <img src={linkimg} alt='weather'
                             style={{marginLeft: '-18px'}}/>  
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">
                        <p>{forecastDay.description}</p>
                    </div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div className="gutter-box">
                        <p style={{textAlign: 'center'}}>
                            {this.changeKtoC(forecastDay.tempMin)} &deg;
                            / {this.changeKtoC(forecastDay.tempMax)} &deg;
                        </p>
                    </div>
                </Col>
            </Row>
        );
    }
}
export default Future;