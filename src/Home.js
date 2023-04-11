import React from 'react'
import './home.css'
import stock from './image/stock.png'
import Footer from './Footer'
import searchPage from './searchPage'
import about from './about'
import Contact from './contact'

export default function Home() {
  return (
    
   <div className='header'>
      
       <div className="topnav">

        <nav class="navbar navbar-expand-md fixed-top top-nav">

          <div class="container">

            <button class="navbar-brand" className='fs' href="#"><strong style={{ color: "#ffffff", fontSize: "32px" }}>Fs</strong></button>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

              <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>

            </button>




            <div class="collapse navbar-collapse" id="navbarSupportedContent">

              <ul class="navbar-nav ml-auto">

                <li class="nav-item active">

                  <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>

                </li>

                <li class="nav-item">

                  <a class="nav-link" href="/search">Search</a>

                </li>

                <li class="nav-item">

                  <a class="nav-link" href="/contact">Contact</a>
                </li>



                <li class="nav-item">

                  <a class="nav-link" href="/about">About</a>

                </li>

                <li class="nav-item">

                  <a class="nav-link" href="#">Help</a>

                </li>



              </ul>

            </div>

          </div>

        </nav>

      </div>


      <h1>Transform your Financial life with one click! </h1>
      <p className='ps'>Be the best trader by using financial samurai</p>
      {/* <button className='bt'>Click</button> */}
      <img src={stock} className="logo" alt="logo" />
      <Footer></Footer>
      <searchPage></searchPage> 
       
    </div>
    



  )
}
