import React, { Component } from 'react'
import img1 from '../pics2/12.avif'
import img2 from '../pics2/13.avif'
export class Carousel5 extends Component {
  render() {
    // This page describes about Bitcoin vs. Blockchain
    return (
        <>
        <img src={img1} class="d-block" alt="..." style={{width:"100vw",height:"100vh"}} />
        <div style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.2)"}}></div>
        <div className="row"style={{position:"absolute",top:"10vh",left:"10vw",width:"80vw",height:"80vh",backgroundColor:"black",color:"white"}}>
            <div className="col-lg-7">
                <p>The Bitcoin protocol is built on a blockchain. In a research paper introducing the digital currency, Bitcoin’s pseudonymous creator, Satoshi Nakamoto, referred to it as “a new electronic cash system that’s fully peer-to-peer, with no trusted third party.”</p>
                <p>The key thing to understand here is that Bitcoin merely uses blockchain as a means to transparently record a ledger of payments, but blockchain can, in theory, be used to immutably record any number of data points. As discussed above, this could be in the form of transactions, votes in an election, product inventories, state identifications, deeds to homes, and much more. </p>
            </div>
            <div className="d-none d-lg-block col-lg-5 text-center">
                <h1 style={{fontFamily: 'Kaushan Script' }}>Bitcoin vs. Blockchain</h1>
                <img src={img2} style={{width:"70%",height:"60%"}}></img>
            </div>
        </div>
        </>
    )
  }
}

export default Carousel5