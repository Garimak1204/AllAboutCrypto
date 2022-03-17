import React, { Component } from "react";
import { Parallax } from "react-parallax";
import About from "./components/About";
import Home from "./components/Home";
import Carousel0 from "./components/Carousel0";
import Carousel1 from "./components/Carousel1";
import Carousel2 from "./components/Carousel2";
import Carousel6 from "./components/Carousel6";
import Carousel7 from "./components/Carousel7";
import Carousel8 from "./components/Carousel8";
import Carousel9 from "./components/Carousel9";
import Carousel10 from "./components/Carousel10";
import Carousel11 from "./components/Carousel11";
import Carousel3 from "./components/Carousel3";
import Carousel4 from "./components/Carousel4";
import Carousel5 from "./components/Carousel5";
import Introduction from "./components/Introduction";
import Quote from "./components/Quote";
import Table from "./components/Table";
import Calculator from "./components/Calculator";
import { Scatter } from 'react-chartjs-2';
import Solver  from "./solver";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Parallax strength={500}>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/carousel0" element={<Carousel0/>}>
          </Route>
          <Route exact path="/carousel1" element={<Carousel1 />}>
          </Route>
          <Route exact path="/carousel2" element={<Carousel2 />}>
          </Route>
          <Route exact path="/carousel3" element={<Carousel3 />}>
          </Route>
          <Route exact path="/carousel4" element={<Carousel4 />}>
          </Route>
          <Route exact path="/carousel5" element={<Carousel5 />}>
          </Route>
          <Route exact path="/carousel6" element={<Carousel6 />}>
          </Route>
          <Route exact path="/carousel7" element={<Carousel7 />}>
          </Route>
          <Route exact path="/carousel8" element={<Carousel8 />}>
          </Route>
          <Route exact path="/carousel9" element={<Carousel9 />}>
          </Route>
          <Route exact path="/carousel10" element={<Carousel10 />}>
          </Route>
          <Route exact path="/carousel11" element={<Carousel11 />}>
          </Route>
        </Routes>
        <About/>
        <Calculator/>
        <Table/>
        <Solver/>
        <Quote/>
        <Introduction/>
        </Parallax>
    </Router>

      </>
    );
  }
}

export default App;
