import React, { Component } from 'react'

export class Carousel11 extends Component {
  render() {
    // This page describes about What’s Next for Blockchain?
    return (
        <div>
        <div className="row" style={{height:"100vh",width:"100vw"}}>
            <div className="col-md-6 d-flex align-items-center justify-content-center" style={{backgroundImage:"linear-gradient(black,rgba(255, 255, 255, 0.007))"}}>
                <h1 style={{fontFamily: 'Kaushan Script',marginTop:'3%' }}>What’s Next for Blockchain?</h1>
            </div>
            <div className="col-md-6" style={{backgroundColor:"black",color:"white"}}>
                <div className="container mt-5">
                <p>With many practical applications for the technology already being implemented and explored, blockchain is finally making a name for itself in no small part because of bitcoin and cryptocurrency. As a buzzword on the tongue of every investor in the nation, blockchain stands to make business and government operations more accurate, efficient, secure, and cheap, with fewer middlemen.</p>
                <p>As we prepare to head into the third decade of blockchain, it’s no longer a question of if legacy companies will catch on to the technology—it’s a question of when. Today, we see a proliferation of NFTs and the tokenization of assets. The next decades will prove to be an important period of growth for blockchain.</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Carousel11
