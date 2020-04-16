import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import './List.scss';

const List = (props) => {

  const btClick = (e) => {
    const datatest = e.currentTarget.getAttribute('data-test');
    props.triggerParentUpdate(e,datatest);
  }


    return (
      <li data-test={props.index} onClick={btClick}>
          {props.posts}
      </li>

    )
};

export default List;
