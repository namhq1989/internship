import React from 'react';
import {Row, Col} from 'antd';

class DayItem extends React.Component {
  getTemp = temp =>{
    return Math.round(temp - 273.15) 
  }
  timeStampToDate = (num) => {
    const d = new Date(num * 1000)
    let month = d.getMonth() + 1
    let date = d.getDate()
    return month + "/" + date
  }
  timeStampToDay = (num) => {
    const d = new Date(num * 1000)
    let dayList = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let day = d.getDay()
    return dayList[day]
  }
  render(){
    const dayWeather = this.props.dayWeather
    const icon = "http://openweathermap.org/img/w/"+ dayWeather.weather[0].icon +".png"
    return(
      <Row style={{marginBottom: '10px'}}>
        <Col span={5}>
          <strong style={{display: 'block'}}>{this.timeStampToDay(dayWeather.dt)}</strong>
          <span>{this.timeStampToDate(dayWeather.dt)}</span>
        </Col>
        <Col span={3}>
          <p><i className="wi wi-humidity"></i></p>
          {dayWeather.humidity}  %
        </Col>
        <Col span={4}>
          <img src={icon} />
        </Col>
        <Col span={8} >{dayWeather.weather[0].description}</Col>
        <Col span={4}>{this.getTemp(dayWeather.temp.min)}&deg; / 
          <span className="text-yellow">{this.getTemp(dayWeather.temp.max)}&deg;</span>
        </Col>
      </Row>
    );
  }
}
export default DayItem;