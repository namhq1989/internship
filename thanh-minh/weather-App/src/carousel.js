import React from 'react';
import App from './app';
import { Carousel} from 'antd';
class Carousels extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listCity: [
        "Danang", 
        "Hanoi",
        "Hue"
      ]
    };
  }

  render () {
    let bw='';
    const today= new Date();
    let hour = today.getHours();
    if (hour >= 18 || (hour >= 0 && hour <= 5)) {
        bw = 'backgroundNight'; 
    }else{
        bw = 'backgroundMornig'; 
    }
    return (
      <div className='wrapper' id={bw}>
        <Carousel>
           {
            this.state.listCity.map((city, index) =>{
              return (
                <div key={index} >
                  <App city={city}/>
                </div>
              );  
            })
            }
        </Carousel>
    </div>
    );
  }
}
export default Carousels;