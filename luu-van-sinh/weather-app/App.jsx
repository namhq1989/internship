import React from 'react';
import City from './city-item.js';
import {Affix,Carousel} from 'antd';
const cities = ["Da Nang", "Ho Chi Minh", "Ha Noi"]

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city: [
        {
          id: 1583992,
          name: 'Da Nang'
        },
        {
          id: 1580578,
          name: 'Ho Chi Minh'
        },
        {
          id: 1581130,
          name: 'Ha Noi'
        }
      ],
      nowShowing: 'Da Nang',
      daytime: this.checkDaytime()
    }
  }
  
  onChange = (num) => {
    let city = cities[num]
    this.setState({nowShowing: city})
  }
  checkDaytime = () => {
    let d = new Date()
    let daytime = (d.getHours() > 6 && d.getHours() < 18) ? true : false
    return daytime
  }

  componentDidMount = () => {
    setInterval(()=>{
      let daytime = this.checkDaytime()
      this.setState({daytime: daytime})
    },1000*60*10)
  }
 
  render() {
    const background = (this.state.daytime) ? "container light-background" : "container dark-background"
    return (
      <div className={background}>
        <br/>
        <div className="header">
          <Affix>
            <h3>{this.state.nowShowing}</h3>
          </Affix>
        </div>
        <Carousel afterChange={this.onChange}>
          {this.state.city.map((item,index)=>{
            return <City city={item} key={index}/>
          })}
        </Carousel>
        <br/>
      </div>
    );
  }
}
export default App;