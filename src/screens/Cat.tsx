import { Link, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect, useState } from 'react';
import CatCard from '../components/CatCard';
import CatsContext from '../context/Cats';
import { filterCatsById } from '../utils/filterCatById';

function Cat() {
  const { catId } = useParams();
  const { cat, setCatId } = useContext(CatsContext);

  useEffect(() => {
    if (catId) {
      setCatId(catId);
    }
  }, [catId, setCatId]);

  if (!cat) {
    return (
      <Row>
        <Col xs={12} md={12} style={{ paddingTop: '20px' }}>
          <h4>Cat Not Found.</h4>
        </Col>
      </Row>
    );
  }

  return (
    <>
      <Row>
        <Col xs={12} md={12} style={{ paddingTop: '20px' }}>
          <Link to="/" className="btn btn-secondary">
            Back to results
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} style={{ paddingTop: '20px' }}>
          <CatCard
            url={cat.url}
            id={cat.id}
            smWidth={12}
            mdWidth={12}
            showCardBody={false}
          />
        </Col>
        <Col xs={12} md={4} style={{ paddingTop: '20px' }}>
          <h2>{cat.breeds[0].name}</h2>
          <p>Origin: {cat.breeds[0].origin}</p>
          <p className="text-justify">{cat.breeds[0].description}</p>
          <p className="mb-0">Attributes:</p>
          <span>{cat.breeds[0].temperament}</span>
        </Col>
      </Row>
    </>
  );
}

export default Cat;
