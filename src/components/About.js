import React, { Component } from 'react'
import Items from "./Items"
import img1 from "../pics/1.avif"
import img2 from "../pics/2.avif"
import img3 from "../pics/3.avif"
import img4 from "../pics/4.avif"
import img5 from "../pics/5.avif"
import img6 from "../pics/6.avif"
import img7 from "../pics/7.avif"
import img8 from "../pics/8.avif"
import img9 from "../pics/9.avif"
import img10 from "../pics/10.avif"
import img11 from "../pics/11.avif"
import img12 from "../pics/12.avif"
export class about extends Component {
  render() {
    return (
      //these flex boxes will act like items of navbar to navigate to different pages
        <div className="container4">
            <div className="row d-flex justify-content-around">
              <div className="col d-flex justify-content-center"><Items title="What is a blockchain" img={img1} goto="/carousel0"/></div>
              <div className="col d-flex justify-content-center"><Items title="Transparency" img={img2} goto="/carousel3"/></div>
              <div className="col d-flex justify-content-center"><Items title="Is Blockchain Secure?" img={img3} goto="/carousel4"/></div>
              <div className="col d-flex justify-content-center"><Items title="How Does a Blockchain Work?" img={img4} goto="/carousel2"/></div>
          </div>
          <div className="row d-flex justify-content-around">
              <div className="col d-flex justify-content-center"><Items title="Bitcoin vs. Blockchain" img={img5} goto="/carousel5"/></div>
              <div className="col d-flex justify-content-center"><Items title="Banking and Finance" img={img6} goto="/carousel7"/></div>
              <div className="col d-flex justify-content-center"><Items title="How Are Blockchains Used?" img={img7} goto="/carousel6"/></div>
              <div className="col d-flex justify-content-center"><Items title="Blockchain Decentralization" img={img8} goto="/carousel1"/></div> 
          </div>
          <div className="row d-flex justify-content-around">
              <div className="col d-flex justify-content-center"><Items title="Pros and Cons of Blockchain" img={img9} goto="/carousel8"/></div>
              <div className="col d-flex justify-content-center"><Items title="What Is a Blockchain Platform?" img={img10} goto="/carousel9"/></div>
              <div className="col d-flex justify-content-center"><Items title="What’s Next for Blockchain?" img={img11} goto="/carousel11"/></div>
              <div className="col d-flex justify-content-center"><Items title="Private Blockchain Vs Public Blockchain" img={img12} goto="/carousel10"/></div>
          </div>    
        </div>
    )
  }
}

export default about
