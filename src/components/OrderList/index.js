import React, { Component } from 'react';
import OrderItem from '../OrderItem/index';
export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[]
    }
  }
  componentDidMount() {
    fetch('/mock/order.json').then(res => {
      if(res.ok){
        res.json().then(data => {
          this.setState({
            data
          })
        })
      }
    })
  }
  render() {
    let {data} = this.state;
    return (
      <div>
      {
       data.map((item,index) => {
         return <OrderItem data = {item} key={index} />
        })
      }
      </div>
    )
  }
}
