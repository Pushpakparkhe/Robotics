import React from 'react'
import "./Style.css"

function About() {
  let message = 'our team is a hardworking team'
  return (
   <section className="section-white">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="section-title">
            THE TEAM BEHIND ROBOTICS
          </h2>
          <p className="section-subtitle">{message}</p>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="team-item">
            <img src="./images/bandini.jpg" className="team-img1" alt="pic"/>
            <h3>BANDINI KOHARE</h3>
            <div className="team-info">
              <p>TEAM LEADER</p>
              <p>FRONTEND DEVLOPER</p>
              <ul className="team-icon">
                <li><a href="https://github.com/Bandini2001" className="github">
                  <i className="fa-fa-github"></i></a></li>
                  <li><a href="https://github.com/Bandini2001" className="gmail">
                  <i className="fa-fa-gmail"></i></a></li>
                  <li><a href="https://github.com/Bandini2001" className="linkdin">
                  <i className="fa-fa-likdin"></i></a></li>
                  <br></br>
                  <a href="https://github.com/Bandini2001"><img  src="./images/github.png"  className='img'/></a> 
                  
                  
              </ul>
            </div>
          </div>
        </div>


        <div className="col-sm-6 col-md-4">
          <div className="team-item">
            <img src="./images/pushpak.jpg" className="team-img1" alt="pic"/>
            <h3>PUSHPAK PARKHE</h3>
            <div className="team-info">
              <p>TEAM MEMBER</p>
              <p>FRONTEND DEVLOPER</p>
              <ul className="team-icon">
                <li><a href="#" className="github">
                  <i className="fa-fa-github"></i></a></li>
                  <li><a href="#" className="gmail">
                  <i className="fa-fa-gmail"></i></a></li>
                  <li><a href="#" className="linkdin">
                  <i className="fa-fa-likdin"></i></a></li><br></br>
                  <a href="https://github.com/pushpakparkhe"><img  src="./images/github.png"  className='img'/></a> 
              </ul>
            </div>
          </div>
        </div>


        <div className="col-sm-6 col-md-4">
          <div className="team-item">
            <img src="./images/sumesh.jpg" className="team-img1" alt="pic"/>
            <h3>SUMESH CHAURE</h3>
            <div className="team-info">
              <p>TEAM MEMBER</p>
              <p>FRONTEND DEVLOPER</p>
              <ul className="team-icon">
                <li><a href="#" className="github">
                  <i className="fa-fa-github"></i></a></li>
                  <li><a href="#" className="gmail">
                  <i className="fa-fa-gmail"></i></a></li>
                  <li><a href="#" className="linkdin">
                  <i className="fa-fa-likdin"></i></a></li><br></br>
                  <a href="https://github.com/Sumesh99"><img  src="./images/github.png"  className='img'/></a> 
              </ul>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="team-item">
            <img src="./images/gan.jpg" className="team-img1" alt="pic"/>
            <h3>GANESH BOBADE</h3>
            <div className="team-info">
              <p>TEAM MEMBER</p>
              <p>FRONTEND DEVLOPER</p>
              <ul className="team-icon">
                <li><a href="#" className="github">
                  <i className="fa-fa-github"></i></a></li>
                  <li><a href="#" className="gmail">
                  <i className="fa-fa-gmail"></i></a></li>
                  <li><a href="#" className="linkdin">
                  <i className="fa-fa-likdin"></i></a></li><br></br>
                  <a href="https://github.com/bobadeganesh"><img  src="./images/github.png"  className='img'/></a> 
              </ul>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="team-item">
            <img src="./images/payal.jpg" className="team-img" alt="pic"/>
            <h3>PAYAL MESHRAM</h3>
            <div className="team-info">
              <p>TEAM MEMBER</p>
              <p>FRONTEND DEVLOPER</p>
              <ul className="team-icon">
                <li><a href="#" className="github">
                  <i className="fa-fa-github"></i></a></li>
                  <li><a href="#" className="gmail">
                  <i className="fa-fa-gmail"></i></a></li>
                  <li><a href="#" className="linkdin">
                  <i className="fa-fa-likdin"></i></a></li><br></br>
                  <a href="https://github.com/payalm518"><img  src="./images/github.png"  className='img'/></a> 
              </ul>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="team-item">
            <img src="./images/punam.jpg" className="team-img1" alt="pic"/>
            <h3>PUNAM GAHANE</h3>
            <div className="team-info">
              <p>TEAM MEMBER</p>
              <p>FRONTEND DEVLOPER</p>
              <ul className="team-icon">
                <li><a href="#" className="github">
                  <i className="fa-fa-github"></i></a></li>
                  <li><a href="#" className="gmail">
                  <i className="fa-fa-gmail"></i></a></li>
                  <li><a href="#" className="linkdin">
                  <i className="fa-fa-likdin"></i></a></li><br></br>
                  <a href="https://github.com/punamMGahane"><img  src="./images/github.png"  className='img'/></a> 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

   </section>
  )
}

export default About