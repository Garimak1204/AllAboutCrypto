import React, { Component } from 'react'
import img from "../pics2/15.avif"
export class Carousel6 extends Component {
  render() {
    // This page describes about How Are Blockchains Used?
    return (
        <div className="row text-center" style={{width:"100vw",height:"100vh"}}>
            <img src={img} style={{width:"100vw",height:"100vh"}}></img>
            <div style={{position:'absolute',width:'100%',height:'50%',Color:"black"}}>
            <h1 style={{fontFamily: 'Kaushan Script',marginTop:'3vh' }}>How Are Blockchains Used?</h1>
                <div className=" container fw-bold" style={{marginTop:"15vh"}}>
                <p>As we now know, blocks on Bitcoin’s blockchain store data about monetary transactions. Today, there are more than 10,000 other cryptocurrency systems running on blockchain. But it turns out that blockchain is actually a reliable way of storing data about other types of transactions as well.</p>
                <p>Some companies that have already incorporated blockchain include Walmart, Pfizer, and a host of others. For example, IBM has created its Food Trust blockchain to trace the journey that food products take to get to their locations.</p>
                </div>
            </div>
        </div>
    )
  }
}

export default Carousel6