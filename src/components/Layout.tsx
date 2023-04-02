import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode
}


const SpacedContainer = styled(Container)`
  margin-bottom: 5vh;
`;

const HeaderRow = styled(Row)`
  margin-bottom: 4vh;
`;

export default function Layout({ children }: Props) {
  return (
    <SpacedContainer>
      <HeaderRow>
        <Col xs={12} md={12}>
          <h1>iona 🐈‍⬛ 💕</h1>
          <span>cats api exercise</span>
        </Col>
      </HeaderRow>
      {children}
    </SpacedContainer>
  );
}
