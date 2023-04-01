import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <h1>iona 🐈‍⬛ 💕</h1>
          <span>cats api exercise</span>
        </Col>
      </Row>
      {children}
    </Container>
  );
}
