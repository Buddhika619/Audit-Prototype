import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

function CheckListCard({title}) {
  return (
    <Accordion className='mb-2'>
    <Accordion.Item eventKey="0">
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>
        <p>Are switchboards, electrical in a safe condition?</p>
        <p style={{fontWeight:'bold'}}>Reference:</p>
        <p style={{fontWeight:'bold'}}>Files:</p>
      </Accordion.Body>
    </Accordion.Item>
    </Accordion>

  );
}

export default CheckListCard;



