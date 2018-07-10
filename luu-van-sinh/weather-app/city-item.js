import React from 'react';
import DayItem from './dayitem';
import {Card,Icon, Row, Col} from 'antd';
import axios from 'axios';
const API_KEY = '17b3ac29ca8c3bbdc427123e277b022e';
class City extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      current : {  
        "coord":{  
           "lon":'',
           "lat":''
        },
        "weather":[  
           {  
              "id":'',
              "main":"",
              "description":"",
              "icon":"01d"
           }
        ],
        "base":"stations",
        "main":{  
           "temp":'',
           "pressure":'',
           "humidity":'',
           "temp_min":'',
           "temp_max":''
        },
        "visibility":'',
        "wind":{  
           "speed":'',
           "deg":''
        },
        "clouds":{  
           "all":''
        },
        "dt":'',
        "sys":{  
           "type":'',
           "id":'',
           "message":'',
           "country":"VN",
           "sunrise":'',
           "sunset":''
        },
        "id":'',
        "name":"",
        "cod":''
      },
      daily: {
        "city":{},
        "cod":"",
        "message":"",
        "cnt":1,
        "list":[
          {  
            "dt":1531108800,
            "temp":{  
               "day":304.92,
               "min":300.7,
               "max":304.92,
               "night":300.7,
               "eve":303.71,
               "morn":302.59
            },
            "pressure":997.68,
            "humidity":86,
            "weather":[  
              {  
                "id":500,
                "main":"Rain",
                "description":"light rain",
                "icon":"10d"
              }
            ],
            "speed":2.71,
            "deg":326,
            "clouds":76
         }
        ]
      },
      time: this.getTimeLocal()
    }
  }
  getTemp = temp =>{
    return Math.round(temp - 273.15) 
  }
  degToCompass = num => {
    const val = Math.floor((num / 22.5) + 0.5);
    const arr = ["North", "NNE", "NE", "ENE", "East", "ESE", "SE", "SSE", "South", "SSW", 
        "SW", "WSW", "West", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }
  getTimeLocal = () => {
    var today = new Date()
    var hour = today.getHours()
    var minute = today.getMinutes()
    var yyyy = today.getFullYear()
    var m = today.getMonth() + 1
    var d = today.getDate()
    return yyyy + "/" + m + "/" + d +" " + hour + ":" +minute
  }
  
  getCurrentWeather = id => {
    let url = "http://api.openweathermap.org/data/2.5/weather?id="+ id +"&APPID="+ API_KEY
    axios.get(url)
    .then((response)=>{
      let current = response.data
      this.setState({current: current})
    });
  }
  getForecastWeather = id => {
    let url = "http://api.openweathermap.org/data/2.5/forecast/daily?id="+ id +"&cnt=7&APPID="+ API_KEY
    axios.get(url)
    .then((response)=>{
      let daily = response.data
      this.setState({daily: daily})
    });
  }
  componentDidMount = () =>{
    let cityId = this.props.city.id
    this.getCurrentWeather(cityId)
    this.getForecastWeather(cityId)
    setInterval(()=>{
      this.setState({time: this.getTimeLocal()})
    },1000*30)
    setInterval(()=>{
      this.getCurrentWeather(cityId)
      this.getForecastWeather(cityId)
    },1000*60*30)
  }
  render(){
    const current = this.state.current
    const daily = this.state.daily
    const imgUrl = "http://openweathermap.org/img/w/"+current.weather[0].icon+".png"
    return (
      <div>
        <div className="img-container">
          <img className="image-icon main-icon" src={imgUrl}/>
        </div>
        <Card className="card card-top" bordered={false} >
          <Row>
            <Col span={8}>
              <p className="main-temperature">{this.getTemp(current.main.temp)} &deg; </p>
              <span><Icon type="up" />{this.getTemp(daily.list[0].temp.max)} &deg; </span>
              <span><Icon type="down" />{this.getTemp(daily.list[0].temp.min)} &deg;</span>
            </Col>
            <Col span={8} offset={8}>
              <p className="text-right">{current.weather[0].description}</p>
              <div className="text-right">
                <span><Icon type="skin" /> {this.getTemp(current.main.temp_max)} &deg; </span>
                <span><i className="wi wi-humidity"></i> {current.main.humidity} </span>
              </div>
              <p className="text-right">[ {this.state.time} ]</p>
            </Col>
          </Row>
        </Card>
        
        <div>
          <h4 className="title-card">Future</h4>
          <Card className="card" bordered={false}>
            {daily.list.map((item,index)=>{
              return <DayItem key={index} dayWeather={item}/>
            })}
          </Card>
        </div>
        <div>
          <h4 className="title-card">Wind</h4>
          <Card className="card" bordered={false}>
            <Row>
              <Col span={8} className="border-right">
                <img className="image-icon" src="images/Windmill.png"/>
              </Col>
              <Col span={5} offset={2} className="text-center-vertical">
                <p>Direction</p>
                <p>Speed</p>
              </Col>
              <Col span={7} offset={2} className="text-center-vertical">
                <p> {(current.wind.deg)? this.degToCompass(current.wind.deg): 'none'}</p>
                <p> {Math.round(current.wind.speed*3.6)} Km/hour</p>
              </Col>
            </Row>
          </Card>
        </div>
        <div>
          <h4 className="title-card">Details</h4>
          <Card className="card" bordered={false}>
            <Row gutter={8}>
              <Col span={8}>
                <Card className="text-center sub-card-background">
                  <p>Pressure</p>
                  <img className="image-icon" src="images/pressure.png"/>
                  <p>{current.main.pressure} hpa</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="text-center sub-card-background">
                  <p>Visibility</p>
                  <img className="image-icon" src="images/eye.png"/>
                  <p>{current.visibility/1000} km</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="text-center sub-card-background">
                  <p>Humidity</p>
                  <img className="image-icon" src="images/humidity.png"/>
                  <p>{current.main.humidity} %</p>
                </Card>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
export default City;