import React from 'react';
import List from '../../components/List/List';
import {useHttp} from '../../helpers/http';
//
import './About.scss';
//
function About() {
  //STATE
  const url = 'http://mydev.sinifikant.com/headless/wp-json/';
  const [isLoading, fetchedData] = useHttp(url,[]);

  const onPostClick = (e,datatest) => {
    e.preventDefault();
    console.log(`ICI POST cliquer = ${e.target.id} + ${datatest}`);  
  }


  let list;
  //
  if(!isLoading && fetchedData != null && fetchedData.namespaces.length > 1){
    list = fetchedData.namespaces.map((data,index) =>  (
      <List posts={data} index={index} key={index} triggerParentUpdate = {onPostClick}/>
    ));
  }else{
    list = <h1>Is loading</h1>;
  }


  return (
      <div className="container">
        <ul>     
          {list}
        </ul>
      </div>
  );
}



export default About;
