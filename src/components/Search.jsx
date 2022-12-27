import {Col,Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Search = () => {
  return (
   
      <InputGroup className='my-3'>
        <Form.Control
          placeholder='Search For Audit Template'
          style={{ borderRadius: 0 }}
        />
        <Button
          variant='outline-secondary'
          id='button-addon2'
          style={{ borderRadius: 0 }}
        >
          Search
        </Button>
      </InputGroup>
    
  )
}

export default Search
