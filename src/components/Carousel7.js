import React, { Component } from 'react'
import img1 from "../pics2/16.avif"
import img2 from "../pics2/17.avif"
export class Carousel7 extends Component {
  render() {
    // This page describes about Banking and Finance
    return (
      <div>
        <div className="row" style={{height:"100vh",width:"100vw"}}>
            <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{backgroundImage:"linear-gradient(black,rgba(255, 255, 255, 0.007))"}}>
                <h1 style={{fontFamily: 'Kaushan Script',marginTop:'3%' }}>Banking and Finance</h1>
            </div>
            <div className="col-lg-6" style={{backgroundColor:"black",color:"white"}}>
                <div className="container mt-5">
                <p>Perhaps no industry stands to benefit from integrating blockchain into its business operations more than banking. Financial institutions only operate during business hours, usually five days a week. That means if you try to deposit a check on Friday at 6 p.m., you will likely have to wait until Monday morning to see that money hit your account. Even if you do make your deposit during business hours, the transaction can still take one to three days to verify due to the sheer volume of transactions that banks need to settle. Blockchain, on the other hand, never sleeps.</p>
                <p>By integrating blockchain into banks, consumers can see their transactions processed in as little as 10 minutes—basically the time it takes to add a block to the blockchain, regardless of holidays or the time of day or week. With blockchain, banks also have the opportunity to exchange funds between institutions more quickly and securely. In the stock trading business, for example, the settlement and clearing process can take up to three days (or longer, if trading internationally), meaning that the money and shares are frozen for that period of time.</p>
                <p>Given the size of the sums involved, even the few days that the money is in transit can carry significant costs and risks for banks.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Carousel7
