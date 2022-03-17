import React, { Component } from 'react'
import img from "../pics2/4.webp";
export class Carousel2 extends Component {
  render() {
    // This page describes about How Does a Blockchain Work?
    return (
      <div className="div" style={{width:"100vw"}}>
        <div className="row">
          <div className="col-lg-6 text-center " style={{backgroundColor:"cadetblue",height:"100vh"}}>
          <h1 style={{ marginTop: "5%",fontFamily: 'Kaushan Script' }}>How Does a Blockchain Work?</h1>
          <img src={img} style={{ marginTop: "45px" }}></img>
        </div>
        <div className="col-lg-6 text-center" style={{backgroundColor:"black",color:"white",height:"100vh"}}>
          <p style={{marginTop:"20vh"}}>
            The goal of blockchain is to allow digital information to be
            recorded and distributed, but not edited. In this way, a blockchain
            is the foundation for immutable ledgers, or records of transactions
            that cannot be altered, deleted, or destroyed. This is why
            blockchains are also known as a distributed ledger technology (DLT).
          </p>
          <p style={{marginTop:"20vh"}}>
            First proposed as a research project in 1991, the blockchain concept
            predated its first widespread application in use: Bitcoin, in 2009.
            In the years since, the use of blockchains has exploded via the
            creation of various cryptocurrencies, decentralized finance (DeFi)
            applications, non-fungible tokens (NFTs), and smart contracts.
          </p>
        </div>
      </div>
      </div>
    )
  }
}

export default Carousel2
