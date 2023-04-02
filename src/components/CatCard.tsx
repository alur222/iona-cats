import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

interface Props {
  url: string;
  id: string;
  mdWidth?: number;
  smWidth?: number;
  showCardBody?: boolean;
}

function CatCard({ url, id, mdWidth, smWidth, showCardBody }: Props) {
  const href = `/cat/${id}`;
  const time = new Date().valueOf();
  const imageSrc = showCardBody ? url : `${url}?t=${time}`;
  return (
    <Col md={mdWidth} sm={smWidth} className="cat-card">
      <Card>
        <Card.Img variant="top" src={imageSrc} />
        {showCardBody && (
          <Card.Body>
            <Link to={href} className="btn btn-primary">
              View details
            </Link>
          </Card.Body>
        )}
      </Card>
    </Col>
  );
}

CatCard.defaultProps = {
  mdWidth: 3,
  smWidth: 6,
  showCardBody: true,
};

export default CatCard;
