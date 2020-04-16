import React, { useEffect } from 'react';
import Hero from "../../components/Hero/Hero";
import SimpleSlider from '../Slider/SimpleSlider';
import TwoColumns from '../../components/TwoColumns/TwoColumns';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const Home = () => {
  const arrayTwoColumns = [
  {id:1 , img:'/slides/cheng-feng-Tu_lH5CFFZw-unsplash.jpg', title:'Two Column', subline:'Le Lorem Ipsum est simplement du faux texte', desc:'Le Lorem Ipsum est simplement du faux texte employé dans la composition e', link :'https://www.sinifikant.com'},
  {id:2 , img:'/slides/cheng-feng-Tu_lH5CFFZw-unsplash.jpg', title:'Two Column', subline:'Le Lorem Ipsum est simplement du faux texte', desc:'Le Lorem Ipsum est simplement du faux texte employé dans la composition e', link :'https://www.sinifikant.com'}
  ];
  
  useEffect (() => {
    AOS.init();
  },[])

  return (
    <div className="block__home">
      <Hero data-aos="fade-up" data-aos-easing="ease-in-circle"  data-aos-delay="100"  data-aos-offset="100" />
      <SimpleSlider data-aos="fade-up" data-aos-easing="ease-in-circle"  data-aos-delay="100"  data-aos-offset="100"/>
      {arrayTwoColumns.map((arrayTwoColumn, index) => (<TwoColumns props={arrayTwoColumn} key={index}/>))};
    </div>
  );
}

export default Home;
