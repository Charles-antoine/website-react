import React, { useEffect, useState } from 'react';
import {} from 'react-bootstrap';
import {TimelineMax,Power2} from "gsap/TweenMax";
import ReactHtmlParser from 'react-html-parser';
import './Hero.scss';

const Hero = () => {
  const [isLoading, setisLoading] = useState(true);
  const [textIt] = useState('THIS<br/>IS REACT.');
  //
  const $back = document.querySelector('.hero');
  const $title = document.querySelector('.hero h1');

  const animeIn = () =>{
    if(!isLoading){
      const animation = new TimelineMax({repeat:-1,yoyo:true, repeatDelay:2,delay:2});
      animation.to($title, 1, {ease: Power2.easeInOut,color:'#fff', delay:0});
      animation.to($back, 1, {ease: Power2.easeInOut,backgroundColor:'#567e97', delay:-1});
    }
  }


  useEffect(()=>{
    setisLoading(false);
    animeIn();
  },[isLoading])

  

  return (
    <div className="hero">
      <h1 className="title">{ReactHtmlParser(textIt)}</h1>
    </div>
  );
}

export default Hero;
