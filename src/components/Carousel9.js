import React, { Component } from 'react'
import img from "../pics2/19.avif"
export class Carousel9 extends Component {
  render() {
    // This page describes about What Is a Blockchain Platform?
    return (
      <div>
        <div className="row">
            <div className="col-md-6">
                <img src={img} style={{width:"100%",height:"100vh"}}></img>
            </div>
            <div className="col-md-6 text-center" style={{backgroundColor:"darkgoldenrod"}}>
                <h1 style={{fontFamily: 'Kaushan Script' }}>What Is a Blockchain Platform?</h1>
                <p style={{marginTop:"25%"}}>A blockchain platform allows users and developers to create novel uses of an existing blockchain infrastructure. One example is Ethereum, which has a native cryptocurrency known as ether (ETH).16 But the Ethereum blockchain also allows the creation of smart contracts and programmable tokens used in initial coin offerings (ICOs), and non-fungible tokens (NFTs). These are all built up around the Ethereum infrastructure and secured by nodes on the Ethereum network.</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Carousel9