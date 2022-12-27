import React from 'react'
import Search from '../components/Search'
import { Col, ListGroup, Row } from 'react-bootstrap'

import { templates } from '../data/templates'
import TemplateListItem from '../components/TemplateListItem'


const Home = () => {
  return (
    <>
      <header className='my-5'>
        <h1>Audit Templates</h1>
      </header>

     
        <Col sm={8}>
          <Search />
        </Col>
        <h3>Compnay Templates</h3>
        <p>No company templates has been created</p>
        <h3>Public Templates</h3>
       
        <ListGroup variant='flush'>
          {templates.map((item,index) => (
           <TemplateListItem item={item} key={index}/>
          ))}
        </ListGroup>
     
    </>
  )
}

export default Home
