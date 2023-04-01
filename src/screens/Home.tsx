import { useContext, useEffect, useRef } from 'react';
import BreedsContext from '../context/Breeds';
import { getAllBreeds } from '../api/cats';

function Home() {
  const { setBreeds } = useContext(BreedsContext);

  const isCalled = useRef(false);

  useEffect(() => {
    if (!isCalled.current) {
      getAllBreeds().then((data) => {
        isCalled.current = true;
        setBreeds(data);
      });
      isCalled.current = true;
    }
  }, [isCalled, setBreeds]);

  return <h1>IONA CATS</h1>;
}

export default Home;
