import { createContext, useEffect, useState } from 'react';
import { getAllBreeds } from '../api/cats';

const Context = createContext([]);

interface Props {
  children: React.ReactNode;
}

function BreedsProvider({ children }: Props) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getAllBreeds()
      .then((data) => setBreeds(data))
      .catch((ex) => console.log(ex));
  }, [setBreeds]);

  return <Context.Provider value={breeds}>{children}</Context.Provider>;
}

export default BreedsProvider;
