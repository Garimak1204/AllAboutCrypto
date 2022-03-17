import React, { Component } from 'react'
import img1 from '../pics2/18.avif'
import img2 from '../pics2/20.avif'
export class Carousel10 extends Component {
  render() {
    // This page describes about Private Blockchain Vs Public Blockchain?
    return (
        <>
        <img src={img1} class="d-block" alt="..." style={{width:"100vw",height:"100vh"}} />
        <div style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.2)"}}></div>
        <div className="row"style={{position:"absolute",top:"10vh",left:"10vw",width:"70vw",height:"70vh",backgroundColor:"white",color:"black"}}>
            <div className="col-lg-7">
            <h1 style={{fontFamily: 'Kaushan Script' }}>Private Blockchain Vs Public Blockchain?</h1>
                <p>A public blockchain, also known as an open or permissionless blockchain, is one where anybody can join the network freely and establish a node. Because of its open nature, these blockchains must be secured with cryptography and a consensus system like proof of work (PoW).</p>
                <p>A private or permissioned blockchain, on the other hand, requires each node to be approved before joining. Because nodes are considered to be trusted, the layers of security do not need to be as robust.</p>
            </div>
            <div className="d-none d-lg-block col-lg-5">
                <img src={img2} style={{width:"70%",height:"60%",marginTop:"25%"}}></img>
            </div>
        </div>
        </>
    )
  }
}

export default Carousel10