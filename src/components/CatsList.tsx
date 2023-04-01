import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import CatsContext from '../context/Cats';
import CatCard from './CatCard';

interface Breed {
  name: string;
  id: string;
}

interface Cat {
  url: string;
  id: string;
}

// interface Data {
//   cats: Cat[];
// }

function CatsList() {
  const { cats } = useContext(CatsContext);
  // const handleSelection = (event) => {
  //   const { value } = event.target;
  //   setSelectedBreed(value);
  //   return false;
  // };

  if (!cats.length) {
    return (
      <Row className="cats-list">
        <Col xs={12} md={12}>
          <h3>Please select a breed.</h3>
        </Col>
      </Row>
    );
  }

  return (
    <Row className="cats-list">
      {cats.map(({ url, id }: Cat) => (
        <CatCard url={url} key={id} />
      ))}
    </Row>
  );
}

export default CatsList;
