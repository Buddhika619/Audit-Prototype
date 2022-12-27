import React from 'react'
import { useEffect } from 'react'
import CheckListCard from '../components/CheckListCard'
import { templates } from '../data/templates'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

const Template = () => {
  const [template, setTemplate] = useState({})
  const { id } = useParams()
  console.log(templates)

  useEffect(() => {
    setTemplate(templates.find((item) => item.id == id))
  }, [])

  return (
    <>
      <div>
        <h1 className='mt-5 mb-5'>{template.name}</h1>
        <p>
          {template.times},Last modified on {template.date}
        </p>
      </div>
      <CheckListCard title='1-Switchboards electrical equipment'/>
      <CheckListCard title='2-Portable electrical equipments'/>
    </>
  )
}

export default Template
