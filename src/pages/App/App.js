import React, {Component} from 'react';
import './App.scss';
import {TransitionGroup,Transition} from 'react-transition-group';
import {TimelineMax} from "gsap/TweenMax";
//
//COMPONENT
import Nav from "../../components/Nav/Nav";
//PAGES
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Kitchen from "../Kitchen/Kitchen";
import SimpleSlider from "../Slider/SimpleSlider";
import Footer from "../../layout/Footer/Footer";
import MyContext from "../../layout/MyContext/MyContext";
import NotFound from "../../layout/NotFound/NotFound";
//ROUTER
import {BrowserRouter, Switch, Route} from "react-router-dom";
export * from "react-router";

////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
//VOIR PAGE ABOUT POUR LE FETCH
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
//ICI GESTION DU ROUTE
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////

class App extends Component {
  render() {
    return (
      <MyContext.Provider value={{color:"green",otherOne:"JE TESTE LES PROVIDERS"}}>
        <BrowserRouter>
          <div className="app">
          <Nav/>

          <Route render={({ location }) => {
            const { pathname, key } = location
            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node) => playOff( node)}
                  timeout={{enter: 750, exit: 600}}>

                  <Switch location={location}>
                    <Route path="/" exact component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Contact" component={Contact}/>
                    <Route path="/Kitchen" component={Kitchen}/>
                    <Route path="/Slider" component={SimpleSlider}/>
                    <Route  component={NotFound}/>
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}/>
          </div>
          <Footer/>
        </BrowserRouter>
        </MyContext.Provider>
    )
  }
}
















//TRANSITION BETWEEN PAGE
export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5
  let timeline

  if (pathname === '/')
    timeline = getHomeTimeline(node, delay)
  else
    timeline = getDefaultTimeline(node, delay)

  timeline.play()
}
//TRANSITION BETWEEN PAGE
export const playOff = (node) => {
  let timeline
  timeline = getDefaultTimelineOff(node);
  timeline.play();
}




//FUNCTION WHEN HOME PAGE
const getHomeTimeline = (node, delay) => {
  const timeline = new TimelineMax({ paused: true });
  timeline
    .from(node, 0.5, { display: 'none', autoAlpha: 0, delay })

  return timeline
}


//FUNCTION WHEN OTHER PAGE
const getDefaultTimeline = (node, delay) => {
  const timeline = new TimelineMax({ paused: true });
  // const texts = node.querySelectorAll('h1 > div');

  timeline
    .from(node, 0.5, { display: 'none', autoAlpha: 0, delay })
    // .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline
}


//FUNCTION WHEN OTHER PAGE
const getDefaultTimelineOff = (node) => {
  const timeline = new TimelineMax({ paused: true });
  timeline
    .to(node, 1, { autoAlpha: 0, delay:0 })
    // .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline
}

export default App;
