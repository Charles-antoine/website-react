import React, {useState,useEffect} from 'react';
import './About.scss';

function About() {

  //FUNCTION CALL ON LOAD
  useEffect(()=>{
    fetchItems();
  },[]);




  //STATE
  const url = 'http://mydev.sinifikant.com/headless/wp-json/';
  const [itemsName, setItemsName] = useState([]);
  const [items, setItems] = useState([]);



  //FUNCTION LOAD API
  const fetchItems = async () => {
    //FETCH API
    const data = await axios(url);

    //CONVERT IN JSON
    const items = await data.json();

    //UPDATE STATE
    setItemsName(items);
    setItems(items.namespaces);
    
    //FOR THE PLEASURE :)
    console.log(items);
  }



  return (
    <div>
      <h1>{itemsName.name}</h1>

      {items.map((item,index) => (
        <li key={index}>{item}</li>
        ))}
    </div>
  );



}

export default About;
