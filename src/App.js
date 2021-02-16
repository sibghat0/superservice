import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./layout/components/navbar/navbar";
import Home from "./layout/pages/home/home";
import Footer from "./layout/components/footer/footer";
import Cars from "./layout/pages/cars/cars";
import TravelMe from "./layout/pages/travel/travel";
import Contact from "./layout/pages/contact/contact";
import Tourme from "./layout/pages/tour/tour";
import GalleryIn from "./layout/pages/galleryIn/galleryIn";
import Gallery from "./layout/pages/gallery/gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vehicles" component={Cars} />
        <Route exact path="/tour" component={Tourme} />
        <Route exact path="/travel" component={TravelMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery/:id" component={GalleryIn} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
