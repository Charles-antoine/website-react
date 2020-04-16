import React, { useState } from 'react';
import Slider from "react-slick";
import './Slider.scss';



const SimpleSlider = () => {
  const urlsData =[process.env.PUBLIC_URL + "/slides/adrian-infernus-S6t8kRrlIXU-unsplash.jpg",
            process.env.PUBLIC_URL + "/slides/awu-wang-x0hD-_mLSbw-unsplash.jpg",
            process.env.PUBLIC_URL + "/slides/cheng-feng-Tu_lH5CFFZw-unsplash.jpg",
          //  "https://miro.medium.com/max/3600/1*WtUi-dk-xwdyGGaLdR_7Jw.jpeg"
          ];

  const [urls] = useState(urlsData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };  
  
  
  //FUNCTION CALL ON LOAD
  // useEffect(()=>{
    // seturls(...);
  // },[]);



  return (
    <Slider {...settings}>
       {urls.map((url,index) => (
          <div key={index}>
            <img  src={url} alt=""/>
          </div>
          ))}      
    </Slider>
  );

}

export default SimpleSlider;
