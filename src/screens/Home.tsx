import { useContext, useEffect, useRef } from 'react';
import BreedsForm from '../components/BreedsForm';
import CatsList from '../components/CatsList';
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

  return (
    <>
      <BreedsForm />
      <CatsList />
    </>
  );
}

export default Home;
