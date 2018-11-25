import React, { Component } from 'react';
import './style.css';
import OrderList from '../OrderList/index';
import Header from '../Header/index';
export default  class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <OrderList />
      </div>
    );
  }
}


