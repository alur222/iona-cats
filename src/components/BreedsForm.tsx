import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import BreedsContext from '../context/Breeds';

function BreedsForm() {
  const { breeds, selectedBreed, setSelectedBreed } = useContext(BreedsContext);

  const handleSelection = (event: React.ChangeEvent) => {
    setSelectedBreed?.((event.target as HTMLInputElement).value);
    return false;
  };

  return (
    <Row className="breeds-form">
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
                breeds.map(({ id, name }) => (
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
