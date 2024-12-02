import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {


  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">NEOGYM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="  navbar-collapse" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">WHY US</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  TRAINERS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-disabled="true">CONTACT</a>
              </li>
            </ul>
            <form className="d-flex" role="search">




            </form>
          </div>
        </div>
      </nav>


      <img className='hero' src='/hero-bg.jpg'>
      </img>



      <div id="carouselExampleControlsNoTouching" className="carousel-slide" data-bs-touch="false">
        <div className="carousel-inner">
          <div className="carousel-item active">

            <h3 className='fit'>
              FITNESS
            </h3>

            <h2 className='train'>TRAINING</h2>

            <h1 className='neo'>
              N E O G Y M
            </h1>

            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut

            </p>
            <p className='lorem1'> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <p className='lorem2'> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>

            <p className='velit'> voluptate velit esse .</p>




          </div>
          <div className="carousel-item">

            <h4 className='fit'>
              fitness
            </h4>


          </div>
          <div className="carousel-item">
            <h4>
              fitness
            </h4>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>


        <button className='cont' >CONTACT US</button>
      </div>


      <div className='imag-box'>

        <div className='why'>
          <h2 className='why1'>WHY CHOOSE US</h2>
        </div>

        <div className='qualite'>
          <div className='qualite1'>
            <img className='u-1' src='u-1.png'></img>
            <h5 className='qua'>QUALITY
            </h5>


            <h5 className='equ'>EQUIPMENT</h5>
            <p className='ips'>ipsum dolor sit amet,  </p>
            <p className='con'>consectetur adipiscing</p>
            <p className='elit'>elit, sed do eiusmod</p>
            <p className='tem'>tempor</p>
          </div>
          <div className='qualite1'>
            <img className='u-2' src='u-2.png'></img>

            <h5 className='qua'> NUTRITION
            </h5>



            <p className='ips2'>ipsum dolor sit amet,  </p>
            <p className='con2'>consectetur adipiscing</p>
            <p className='elit2'>elit, sed do eiusmod</p>
            <p className='tem2'>tempor</p>
          </div>
          <div className='qualite1'>
            <img className='u-3' src='u-3.png'></img>

            <h5 className='qua'>QUALITY
            </h5>


            <h5 className='equ'>EQUIPMENT</h5>
            <p className='ips'>ipsum dolor sit amet,  </p>
            <p className='con'>consectetur adipiscing</p>
            <p className='elit'>elit, sed do eiusmod</p>
            <p className='tem'>tempor</p>



          </div>
          <div className='qualite1'>
            <img className='u-4' src='u-4.png'></img>


            <h5 className='qua'> NUTRITION
            </h5>



            <p className='ips2'>ipsum dolor sit amet,  </p>
            <p className='con2'>consectetur adipiscing</p>
            <p className='elit2'>elit, sed do eiusmod</p>
            <p className='tem2'>tempor</p>






          </div>
        </div>

      </div>


      <div className='img-box2'>

        <h2 className='pp1'>HEALTHY MIND, HEALTHY BODY
        </h2>

        <p className='pp2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br></br>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in<br></br> reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br></br> aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum

        </p>

        <button className='read'>READ MORE</button>


      </div>



      <div className='img-box3'>
        <div> <h2 className='pp3'>Our Gym Trainers
        </h2></div>


        <div className='img-box4'>
          <div className='img1'>
            <div className='box1'>
              <div className='box2'>
                <img className='face' src='facebook-logo.png'></img>

              </div>
              <div className='box2'>
                <img className='insta' src='instagram-logo.png'></img>
              </div>
              <div className='box2'>
                <img className='twitter' src='twitter.png'></img>
              </div>

            </div>




          </div>

          <div className='img2'>
            <div className='box1'>
              <div className='box2'>
                <img className='face' src='facebook-logo.png'></img>

              </div>
              <div className='box2'>
                <img className='insta' src='instagram-logo.png'></img>
              </div>
              <div className='box2'>
                <img className='twitter' src='twitter.png'></img>
              </div>

            </div>





          </div>


          <div className='img3'>
            <div className='box1'>
              <div className='box2'>
                <img className='face' src='facebook-logo.png'></img>

              </div>
              <div className='box2'>
                <img className='insta' src='instagram-logo.png'></img>
              </div>
              <div className='box2'>
                <img className='twitter' src='twitter.png'></img>
              </div>

            </div>
          </div>





        </div>

      </div>






    </>
  )
}

export default App
