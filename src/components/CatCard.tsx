import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

interface Props {
  url: string;
}

function CatCard({ url }: Props) {
  return (
    <Col md={3} sm={6} className="cat-card">
      <Card>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CatCard;
