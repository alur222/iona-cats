import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

interface Props {
  url: string;
  id: string;
}

function CatCard({ url, id }: Props) {
  const href = `/cat/${id}`;
  return (
    <Col md={3} sm={6} className="cat-card">
      <Card>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Link to={href} className="btn btn-primary">
            View details
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CatCard;
