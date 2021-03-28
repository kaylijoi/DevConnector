import React, { Component } from 'react'
import './App.css';
import NavBar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Landing />
        <Footer />
      </div>
    )
  }
}

