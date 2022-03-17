import React, { Component } from 'react'
import img1 from "../pics2/21.avif"
import img2 from "../pics2/23.avif"
import img3 from "../pics/2.avif"
import img4 from "../pics/15.jpg"
import img5 from "../pics/16.jpg"
import img6 from "../pics/17.jpg"
export class Introduction extends Component {
  render() {
    //It containes carousel which describes about inventor of bitcoin
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{width:"100vw",height:"100vh"}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} style={{width:"100vw",height:"100vh"}}/> 
            <div style={{backgroundColor:"rgba(0,0,0,0.5)",position:"absolute",width:"100vw",height:"100vh",top:'0',left:'0'}}></div>
            <div className="row d-flex align-items-canter justify-content-center text-center"style={{position:"absolute",top:"10%",left:"10%",width:"70%",height:"70%",backgroundColor:"rgb(0,0,0,0)",color:"white",}}>
            <h1>STUART HABER</h1>
            <img src={img4} style={{width:"14rem",height:"13rem",marginTop:"3rem"}}></img>
            <h2 style={{color:'white',fontSize:'1rem'}}>HE IS  ONE OF THE INDIVIDUALS WHO WORKED WITH SATOSHI NAKAMOTO TO INVENT THE BITCOIN BLOCKCHAIN</h2>
        </div>
          </div>
          <div className="carousel-item">
          <img src={img2} style={{width:"100vw",height:"100vh"}}/>
          <div style={{backgroundColor:"rgba(0,0,0,0.5)",position:"absolute",width:"100vw",height:"100vh",top:'0',left:'0'}}></div>
          <div className="row d-flex align-items-canter justify-content-center text-center"style={{position:"absolute",top:"10%",left:"10%",width:"70%",height:"70%",backgroundColor:"rgb(0,0,0,0)",color:"white",}}>
            <h1>W. Scott Stornetta</h1>
            <img src={img5} style={{width:"14rem",height:"13rem",marginTop:"3rem"}}></img>
            <h2 style={{color:'white',fontSize:'1rem'}}>W. SCOTT STORNETTA WAS A VISIONARY AHEAD OF HIS TIME, SO FAR AHEAD THAT IN 1991 HE WAS ALREADY TALKING ABOUT BLOCKCHAIN TECHNOLOGY, WHICH HAS LED HIM TO BE CONSIDERED THE "FATHER OF THE BLOCKCHAIN."</h2>
        </div>
          </div>
          <div className="carousel-item">
          <img src={img3} style={{width:"100vw",height:"100vh"}}/>
          <div style={{backgroundColor:"rgba(0,0,0,0.5)",position:"absolute",width:"100vw",height:"100vh",top:'0',left:'0'}}></div>
          <div className="row d-flex align-items-canter justify-content-center text-center"style={{position:"absolute",top:"10%",left:"10%",width:"70%",height:"70%",backgroundColor:"rgb(0,0,0,0)",color:"white",}}>
            <h1> Nick Szabo</h1>
            <img src={img6} style={{width:"14rem",height:"13rem",marginTop:"3rem"}}></img>
            <h2 style={{color:'white',fontSize:'1rem'}}>IN THE LATE 1990S, CYPHERPUNK NICK SZABO PROPOSED USING A BLOCKCHAIN TO SECURE A DIGITAL PAYMENTS SYSTEM, KNOWN AS BIT GOLD.</h2>
        </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
}

export default Introduction
