import React from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const TemplateListItem = ({ item }) => {
  const link = `/template/${item.id}`
  return (
    <ListGroup.Item>
      <Row>
        <Col md={12} lg={6}>
          <Link to={link}>{item.name}</Link>
        </Col>
        <Col md={12} lg={3}>
          {item.times}
        </Col>
        <Col md={12} lg={3}>
          {item.date}
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

export default TemplateListItem
