import React, { Component } from 'react'
import img1 from '../pics2/5.avif'
import img2 from '../pics2/9.avif'
export class Carousel1 extends Component {
  render() {
    // This page describes about Blockchain Decentralization
    return (
        <>
        <img src={img1} class="d-block" alt="..." style={{width:"100vw",height:"100vh"}} />
        <div style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.2)"}}></div>
        <div className="row"style={{position:"absolute",top:"10vh",left:"10vw",width:"80vw",height:"80vh",backgroundColor:"black",color:"white"}}>
            <div className="col-lg-7">
            <h1 style={{fontFamily: 'Kaushan Script' }}>Blockchain Decentralization</h1>
                <p>Imagine that a company owns a server farm with 10,000 computers used to maintain a database holding all of its client’s account information. This company owns a warehouse building that contains all of these computers under one roof and has full control of each of these computers and all of the information contained within them. This, however, provides a single point of failure.</p>
                <p>What a blockchain does is to allow the data held in that database to be spread out among several network nodes at various locations. This not only creates redundancy but also maintains the fidelity of the data stored therein—if somebody tries to alter a record at one instance of the database, the other nodes would not be altered and thus would prevent a bad actor from doing so. If one user tampers with Bitcoin’s record of transactions, all other nodes would cross-reference each other and easily pinpoint the node with the incorrect information.</p>
            </div>
            <div className="d-none d-lg-block col-lg-5 text-center">               
                <img src={img2} style={{width:"70%",height:"60%",marginTop:"7%"}}></img>
            </div>
        </div>
        </>
    )
  }
}

export default Carousel1
