import React from 'react';
import HeaderCard from './headerCard.js';
import Gallery from './gallery.js';
import ListCoPhieu from './listCoPhieu.js';

const listCoPhieu = [
  {id: 1, name: 'VINAMILK', price: '1233344444', percent: '1.45%'},
  {id: 2, name: 'VINAMILK', price: '1233344444', percent: '1.45%'},

];
class Content extends React.Component {
 
    render() {
      return (
        <div className="main-wrapper">
          <h3 id="day-month">22 Tháng 6</h3>
            <p id="day-month-year">Th 6 2018.6.22</p>
            <input className="form-control" id="myInput" type="text" placeholder="Search.."/>
          <br/>
  
        <div className="card">
          <HeaderCard image="tintat.png" text="Loi Tat" />
          <div className="card-body">
            <div className="row">
              <Gallery text="Xóa nhớ đệm" image="dondep.png"/>
              <Gallery text="Dọn dẹp" image="trinhdondep.png"/>
              <Gallery text="Gửi Mi Drop" image="midrop.png"/>
              <Gallery text="Thêm event" image="sukien.png"/>
              <Gallery text="Mã quet QR" image="maQr.png"/>
              <Gallery text="Tạo ghi chú" image="taoghichu.png"/>
              <Gallery text="Mục Khác" image="khac.png"/>
            </div>
          </div>
        </div>
        <br/>
  
        <div className="card">
          <HeaderCard image="sukienlich.png" text="Sự kiện lịch" />
          <div className="card-body ">
                  <p className="center text-center">Không có sự kiện trong hôm nay</p>
              </div> 
              <div className="card-footer">
                  <div className="row">
                        <div className="col-sm-6" ><a className="sk-link" href="#">Tất cả sự kiện</a></div>
                        <div className="col-sm-6"><a className="sk-link" href="#">Thêm sự kiện</a></div>
                  </div>		
              </div>
        </div>
        <br/>
  
        <div className="card">
          <HeaderCard image="ghichunhanh.png" text="Ghi Chú Nhanh" />
          <div className="card-body center text-center">
                  Chạm để ghi chú nhanh
              </div> 
        </div>
        <br/>
  
        <div className="card">
          <HeaderCard image="football.png" text="Football Carnival 2018" />
          <div className="card-body">
                  <img src={require('./images/themdoi.png')} className="rounded mx-auto d-block" alt="img-themdoi"/> 
              </div> 
              <div className="card-footer">
                  <p className="center text-center">Thêm đội</p>
               </div>
        </div>
        <br/>
        
        <div className="card">
          <HeaderCard image="cophieu.png" text="Cổ phiếu" />
          <ListCoPhieu name="VINAMILK" price="178000.00" percent="4.71"/>
          <ListCoPhieu name="VINGROUP" price="122900.00" percent="-0.89"/>
        </div>
        <br/>
  
          <div className="card">
              <div className="card-footer center text-center footer">Tùy Chỉnh</div>
          </div>
          <br/>
      </div>
      );
    }
  }

  export default Content;