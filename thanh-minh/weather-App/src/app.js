import React from 'react';
import { Card , Row, Col,Icon} from 'antd';
import Future from './future.js';
import axios  from 'axios';
import Header from './header.js';
const API_KEY = "17b3ac29ca8c3bbdc427123e277b022e";
class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentWeather : 
               {
                temperature: '',
                city: '',
                country: '',
                humidity: '',
                description: '',
                visibility: '',
                pressure: '',
                tempMax: '',
                tempMin: '',
                windySpeed: '',
                windDeg: '',
                main: '',
                icon:'03d'
               },

            forecast : [],
            status: false
        };
    }

    getWeather = nameCity => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+nameCity+",vn&appid="+API_KEY)
            .then ((respone) =>{
                const data = respone.data;
                //console.log(data);
                 this.setState(
                    {currentWeather : 
                        {
                            temperature: data.main.temp,
                            city: data.name,
                            country: data.sys.country,
                            humidity: data.main.humidity,
                            description: data.weather[0].description,
                            visibility: data.visibility,
                            pressure: data.main.pressure,
                            tempMax: data.main.temp_min,
                            tempMin: data.main.temp_max,
                            windySpeed: data.wind.speed,
                            windDeg: data.wind.deg,
                            main: data.weather[0].main,
                            icon: data.weather[0].icon
                        }  
                    }    
                )     
            })
            .catch ( (respone) =>{
                console.log(respone);
            });
    }
    
    getForecast = nameCity => {
        axios.get("https://api.openweathermap.org/data/2.5/forecast/daily?q="+nameCity+",vn&cnt=7&appid="+API_KEY)
            .then ((respone) =>{
                const data = respone.data.list;
                //console.log(respone.data.city.name);
               // console.log(data);
                let list= this.state.forecast;
                data.map((day) =>{
                    list.push({
                        icon: day.weather[0].icon,
                        humidity: day.humidity,
                        description: day.weather[0].description,
                        tempMin: day.temp.min,
                        tempMax: day.temp.max,
                        dt:day.dt
                    })
                })
                this.setState({forecast:list});     
            })
            .catch ( (respone) =>{
                console.log(respone);
            });
    }

    changeKtoC = k => {
        return Math.round(k - 273.15);
    }

    degreeDirection = num =>{
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["North", "NNE", "NE", "ENE", "E", "ESE", "SE",
                    "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }
    componentDidMount(){
        this.getWeather(this.props.city);
        this.getForecast(this.props.city);
    }
    
    get7Day = dt => {
        const today = new Date(dt*1000);
        const day = today.getDay();
        let dd = today.getDate();
        let mm = today.getMonth()+1; 
        if(dd<10) {
            dd='0'+dd;
        } 
        if(mm<10) {
            mm='0'+mm;
        } 
        let dayMonth = dd+'/'+mm;
        const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
       return (`${daylist[day]} \n${dayMonth}`);
    }
    getTime = () => {
        const today= new Date();
        const day = today.getDay();
        let dd = today.getDate();
        let mm = today.getMonth()+1; 
        const yyyy = today.getFullYear();
        if(dd<10) {
            dd='0'+dd;
        } 
        if(mm<10) {
            mm='0'+mm;
        } 
        let monthYear = dd+'/'+mm+'/'+yyyy;
        const daylist = ["SUN","MON","TUE","WED ","THU","FRI","SAT"];
        let hour = today.getHours();
        const minute = today.getMinutes();
        const second = today.getSeconds();
        let prepand = (hour >= 12)? " PM ":" AM ";
        hour = (hour >= 12)? hour - 12: hour;
        if (hour === 0 && prepand === ' PM ') { 
         if (minute === 0 && second === 0) { 
            hour=12;
            prepand =' Noon';
         } else{ 
                hour = 12;
                prepand =' PM';
            } 
        } 
        if (hour === 0 && prepand === ' AM ')  { 
            if (minute === 0 && second === 0) { 
                hour = 12;
                prepand = ' Midnight';
            } else { 
                hour = 12;
                prepand =' AM';
            } 
        }
        return (`${daylist[day]} ${monthYear}  ${hour}:${minute} ${prepand}`);
      }
    render (){
        const data = this.state.currentWeather;
        const forecast= this.state.forecast;
        let getTime =this.getTime();
        return (
            <div> 
                <Header city={this.props.city}/>
                <br/>
                <div id="imgdd">
                    <img src ={"http://openweathermap.org/img/w/"+data.icon+".png"} 
                        alt="aaa" width='117px'/>
                </div>
                <Card  bordered={false} className ='cardGrade radient '>
                    <Row>
                        <Col span={12} className="colorTxt">
                            <strong className="numsTemp">{this.changeKtoC(data.temperature)} &deg;
                            </strong><br/>  
                            <Icon type="down-square space" />
                            <span>{this.changeKtoC(data.tempMax)} &deg;</span>
                            <Icon type="up-square" />
                            <span>  {this.changeKtoC(data.tempMin)} &deg; </span>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right',color: 'blanchedalmond'}}><br/>
                        <strong>{data.main}</strong><br/>
                            <Icon type="skin" /><span>40 &deg;</span>
                            <i className=" wi wi-raindrop raindrop"></i>
                            <span>  {data.humidity} &deg;</span><br/>
                            <p>[{getTime}]</p>
                        </Col>
                    </Row>
                </Card>
                <br/>
                <div className ='cardGrade'>
                    <h3 className ="titleDetail">Future</h3>
                    <Card bordered={false} className="styleText backroundCard">
                        {
                            forecast.map((day, index) =>{
                                return  <Future get7Day={this.get7Day(day.dt)} forecastDay={day}
                                        key={index}/>
                            })
                        }
                       
                    </Card>
                </div>
                <br/>

                <div className ='cardGrade'>
                <h3 className ="titleDetail">Windy</h3>
                    <Card  bordered={false} className='backroundCard'>
                        <Row >
                            <Col span={6}>
                            <img src ='../public/images/windmill.png' alt='sunrise1.png' />
                            </Col>
                            <Col span={14} offset={4} className="styleWindtext">
                                <span>Direction: &nbsp; &nbsp;</span>
                                <span>{this.degreeDirection(data.windDeg)}</span><br/><br/>
                                <span>Speed: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <span>{data.windySpeed} &nbsp; Km/hour</span>
                            </Col>
                        </Row>
                    </Card>    
                </div>
                <br/>

                <div className ='cardGrade'>
                    <h3 className ="titleDetail">Details</h3>
                    <Row gutter={16} >
                        <Col span={8}>
                            <Card className="backroundCard"  bordered={false} 
                                style={{borderRadius: '15px'}}>
                                <div className='detail'>
                                    <p>Pressure</p>
                                    <img src='../public/images/pre.png' alt='pre.png' 
                                        className="imgDetail"/>
                                    <p>{data.pressure} HPA</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8} >
                            <Card className="backroundCard" bordered={false} 
                                 style={{borderRadius: '15px'}}>
                                <div className='detail'>
                                    <p>Visibility</p>
                                    <img src='../public/images/vis.png' 
                                        alt='pre.png'className="imgDetail" />
                                    <p>{data.visibility} HPA</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card className="backroundCard" bordered={false}  
                                style={{borderRadius: '15px'}}>
                                 <div  className='detail'>
                                    <p>Humidity</p>
                                    <img src='../public/images/humi.png'
                                         alt='pre.png'className="imgDetail" />
                                    <p>{data.humidity} HPA</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div> 
                <br />
                <br/>
                <br/>
            </div>

        );
    }
}
export default App;