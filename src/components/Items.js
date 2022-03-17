import React, { Component } from 'react';
export class items extends Component {
    constructor(){
        super();
        this.state = {
            hover: false,
        }
    }
    changeState1=()=>{
        this.setState({
            hover: true
        });
    }
    changeState2=()=>{
        this.setState({
            hover: false
        });
    }
  render() {
      //one block will run if you hover and other when you not.
    let { title,img ,goto} = this.props;
    return (
        <>
        {!this.state.hover && <div className="card text-dark bg-light" onMouseEnter={this.changeState1} onMouseLeave={this.changeState2} style={{width: "15rem",height:"12rem",marginTop:"20%"}}>
        <p className="card-text text-center" style={{fontFamily: 'Kaushan Script',zIndex:"1"}}>{title}</p>
            <img src={img} style={{width:"100%",height:"100%"}}></img>
        </div>    
        }  
        {
            this.state.hover && <div className="card d-flex align-items-center justify-content-center" onMouseEnter={this.changeState1} onMouseLeave={this.changeState2} style={{width: "15rem",height:"12rem",marginTop:"15%"}}>
                <img src={img} style={{width:"100%",height:"100%"}}></img>
                <div style={{width:"100%",height:"100%",backgroundColor:"rgb(0,0,0,0.6)",position:"absolute",top:"0",left:"0"}}></div>
                <a href={goto}>
                <button style={{position:"absolute",top:"10%",left:"20%",right:"10%"}} >{title}</button>
                </a>
            </div>    
        }  
        </>
    )
  }
}

export default items

