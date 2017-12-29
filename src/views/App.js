import React, { Component } from 'react'

import Header from './header/header'
import Footer from './footer/footer'
import RouterApp from '../router/app'
import './style.scss'


class App extends Component {
  render() {

    return (
      <div className="root">
        <Header />
        <RouterApp />
        <Footer />
      </div>
    );
  }
};


export default App;