import React, { Component } from 'react'

export class Carousel0 extends Component {
  render() {
    return (
      // This page describes about What Is a Blockchain?
        <div className="row">
        <div className="col-sm-12 col-md-6 container2"></div>
        <div className="col container3">
          <h1 className="text-center my-3">What Is a Blockchain?</h1>
          <p className="container my-5">
            A blockchain is a distributed database that is shared among
            the nodes of a computer network. As a database, a blockchain
            stores information electronically in digital format.
            Blockchains are best known for their crucial role in
            cryptocurrency systems, such as Bitcoin, for maintaining a
            secure and decentralized record of transactions. The
            innovation with a blockchain is that it guarantees the
            fidelity and security of a record of data and generates trust
            without the need for a trusted third party.
          </p>
          <p className="container my-5">
            One key difference between a typical database and a blockchain
            is how the data is structured. A blockchain collects
            information together in groups, known as blocks, that hold
            sets of information. Blocks have certain storage capacities
            and, when filled, are closed and linked to the previously
            filled block, forming a chain of data known as the blockchain.
            All new information that follows that freshly added block is
            compiled into a newly formed block that will then also be
            added to the chain once filled.
          </p>
        </div>
      </div>
    )
  }
}

export default Carousel0
