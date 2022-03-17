import React, { Component } from 'react'

export class Carousel8 extends Component {
  render() {
    // This page describes about Pros And Cons of Blockchain
    return (
      <div>
        <div className="row" >
            <div className="col-sm-6 container5">
            <h1 className="text-center" style={{fontFamily: 'Kaushan Script',margin:'5% auto' }}>Pros of Blockchain</h1>
            <div className="div container5 mt-5">
                <p> Improved accuracy by removing human involvement in verification</p>
                <p> Cost reductions by eliminating third-party verification</p>
                <p> Decentralization makes it harder to tamper with</p>
                <p> Transactions are secure, private, and efficient</p>
                <p> Transparent technology</p>
                <p> Provides a banking alternative and a way to secure personal information for citizens of countries with unstable or underdeveloped governments</p>
            </div>
            </div>
            <div className=" col-sm-6 container5">
            <h1 className="text-center" style={{fontFamily: 'Kaushan Script',margin:'5% auto' }}>Cons of Blockchain</h1>
            <div className="container mt-5">
              <p> Significant technology cost associated with mining bitcoin</p>
              <p> Low transactions per second</p>
              <p> History of use in illicit activities, such as on the dark web</p>
              <p> Regulation varies by jurisdiction and remains uncertain</p>
              <p> Data storage limitations</p>
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Carousel8
