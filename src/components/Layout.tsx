import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useContext } from 'react';
import BreedsContext from '../context/Breeds';
import CatsContext from '../context/Cats';

interface Props {
  children: React.ReactNode;
}

const SpacedContainer = styled(Container)`
  margin-bottom: 5vh;
`;

const HeaderRow = styled(Row)`
  margin-bottom: 4vh;
`;

export default function Layout({ children }: Props) {
  const { catsError, setCatsError } = useContext(CatsContext);
  const { breedsError, setBreedsError } = useContext(BreedsContext);

  // setShow(catsError || breedsError);

  return (
    <SpacedContainer>
      <ToastContainer position="top-end">
        <Toast
          onClose={() => {
            setCatsError?.('');
            setBreedsError?.('');
          }}
          show={!!(catsError || breedsError)}
          delay={3000}
          autohide
        >
          <Toast.Body>
            Apologies but we could not load new cats for you at this time!
            Miau!!
          </Toast.Body>
        </Toast>
      </ToastContainer>
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
