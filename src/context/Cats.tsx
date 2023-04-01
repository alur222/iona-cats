import { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { searchCats } from '../api/cats';
import BreedsContext from './Breeds';

const Context = createContext([]);

interface Props {
  children: React.ReactNode;
}

export function CatsProvider({ children }: Props) {
  const { selectedBreed } = useContext(BreedsContext);

  const [cats, setCats] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedBreed) {
      setLoading(true);
      searchCats({
        page: 1,
        limit: 10,
        breed_id: selectedBreed,
      })
        .then((data) => {
          setCats(data);
          setLoading(false);
        })
        .catch(() => {
          setError('error');
          setLoading(false);
        });
    }
  }, [selectedBreed]);

  const memoizedValue = useMemo(() => {
    return {
      error,
      loading,
      cats,
    };
  }, [error, loading, cats]);

  return <Context.Provider value={memoizedValue}>{children}</Context.Provider>;
}

export default Context;
