import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';
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

const CardRow = styled(Row)`
  row-gap: 15px;
`;

function CatsList() {
  const { cats, hasMore, loadMore, loading } = useContext(CatsContext);

  const handleLoadMore = () => {
    loadMore();
    return false;
  };

  if (loading) {
    return <Spinner animation="grow" variant="dark" />;
  }

  if (!cats.length) {
    return (
      <CardRow>
        <Col xs={12} md={12}>
          <h3>Please select a breed.</h3>
        </Col>
      </CardRow>
    );
  }

  return (
    <>
      <CardRow>
        {cats.map(({ url, id }: Cat) => (
          <CatCard url={url} id={id} key={id} />
        ))}
      </CardRow>
      <CardRow>
        <Col xs={12} md={12} style={{ paddingTop: '20px' }}>
          {hasMore && (
            <Button variant="success" onClick={handleLoadMore}>
              Load More
            </Button>
          )}
        </Col>
      </CardRow>
    </>
  );
}

export default CatsList;
