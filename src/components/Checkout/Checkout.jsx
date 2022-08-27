import React, { Component } from 'react'
import MainContent from './MainContent'
import RightSide from './RightSide'

import './Checkout.css'

export default class Checkout extends Component {
  render() {
    return (
      <div className='container py-5' style={{
        color: 'white',
      }}>
        <div className="row">
          <div className="col-8">
            <h3 className='text-center fw-bold mb-5' style={{
              color: '#ff9800'
            }}>ĐẶT VÉ XEM PHIM</h3>
            <MainContent/>
          </div>
          <div className="col-4">
            <h3>DANH SÁCH GHẾ BẠN CHỌN</h3>
            <RightSide/>
          </div>
        </div>
      </div>
    )
  }
}
