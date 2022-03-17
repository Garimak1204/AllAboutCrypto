import React, { Component } from 'react'
import img1 from '../pics2/8.avif'
import img2 from '../pics2/7.avif'
export class Carousel3 extends Component {
  render() {
    // This page describes about Transparency
    return (
        <>
        <img src={img1} class="d-block" alt="..." style={{width:"100vw",height:"100vh"}} />
        <div style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.2)"}}></div>
        <div className="row" style={{position:"absolute",top:"10vh",left:"10vw",width:"80vw",height:"80vh",backgroundColor:"black",color:"white"}}>
            <div className=" d-none d-lg-block col-lg-5">
            <img src={img2} style={{width:"90%",height:"60%"}}></img>
            </div>
            <div className="col-lg-7 text-center">
                <h1 style={{fontFamily: 'Kaushan Script' }}>Transparency</h1>
                <p>ecause of the decentralized nature of Bitcoin’s blockchain, all transactions can be transparently viewed by either having a personal node or using blockchain explorers that allow anyone to see transactions occurring live. Each node has its own copy of the chain that gets updated as fresh blocks are confirmed and added. This means that if you wanted to, you could track Bitcoin wherever it goes. </p>
                <p>Of course, the records stored in the Bitcoin blockchain (as well as most others) are encrypted. This means that only the owner of a record can decrypt it to reveal their identity (using a public-private key pair). As a result, users of blockchains can remain anonymous while preserving transparency.</p>
            </div>
        </div>
        </>
    )
  }
}

export default Carousel3