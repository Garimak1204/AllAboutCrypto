import React, { Component } from 'react'
import img from "../pics2/10.avif"
export class Carousel4 extends Component {
  render() {
    // This page describes about Is Blockchain Secure?
    return (
      <div>
        <div className="row">
            <div className="col-md-6">
                <img src={img} style={{width:"100%",height:"100vh"}}></img>
            </div>
            <div className="col-md-6 text-center" style={{backgroundColor:"lavender"}}>
                <h1 style={{fontFamily: 'Kaushan Script' }}>Is Blockchain Secure?</h1>
                <p style={{marginTop:"5vh"}}>Blockchain technology achieves decentralized security and trust in several ways. To begin with, new blocks are always stored linearly and chronologically. That is, they are always added to the “end” of the blockchain. After a block has been added to the end of the blockchain, it is extremely difficult to go back and alter the contents of the block unless a majority of the network has reached a consensus to do so. That’s because each block contains its own hash, along with the hash of the block before it, as well as the previously mentioned time stamp. Hash codes are created by a mathematical function that turns digital information into a string of numbers and letters. If that information is edited in any way, then the hash code changes as well.</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Carousel4
