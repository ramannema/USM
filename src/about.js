import React from 'react'
import Footer from './Footer'
import Header from './header'
import "./about.css"
const About = () => {
  return (
    <div>
<div>
    <Header/>

  <div className="container my-5">
    <div className="row">
      <div className="col-md-6 text-center">
      <img src={require('./stock.png')} className="img" style={{boxShadow: '0 0 15px #eee'}} alt />
      </div>
      <div className="col-md-6 pt-3">
        <small className="text-uppercase" style={{color: '#9B5DE5'}}>About us</small>
        <h1 className="h2 mb-4" style={{fontWeight: 600}}>About Our <span style={{color: '#9B5DE5'}} className="font-weight-bold">Product</span></h1>
        <p className="text-secondary" style={{lineHeight: 2}}>This is a unified security master where one can see the securities and all the details about it in real time searching them by any attribute has a clear mission to ensure that all individuals have access to competent and affordable financial advice, products and services delivered by a growing network of independent financial advisors and independent financial services firms!</p>
        <br></br> 
          <br></br><br></br>
        <a href="#" style={{backgroundColor: '#9B5DE5', width: 240}} className="btn px-4 py-3 text-white d-flex align-items-center justify-content-between">
        
          <span>Unified Security Master</span>

        </a>
      </div>
    </div>
  </div>
  {/* Credit: Componentity.com */}
  <a href="https://componentity.com" target="_blank" className="block">
      </a>
  
  <Footer/>
</div>

    </div>
  )
}

export default About