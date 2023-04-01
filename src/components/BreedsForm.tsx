import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import BreedsContext from '../context/Breeds';

interface Breed {
  name: string;
  id: string;
}

function BreedsForm() {
  const { breeds, selectedBreed, setSelectedBreed } = useContext(BreedsContext);

  const handleSelection = (event) => {
    const { value } = event.target;
    setSelectedBreed(value);
    return false;
  };

  return (
    <Row className="breeds-form">
      <Link to="/cats/asdada">asdsadasd</Link>
      <Col xs={12} md={12}>
        <Form className="col-md-4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Breed</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={selectedBreed || ''}
              onChange={handleSelection}
            >
              <option value="">Please select a breed</option>
              {breeds &&
                breeds.map(({ id, name }: Breed) => (
                  <option value={id} key={id}>
                    {name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

export default BreedsForm;
