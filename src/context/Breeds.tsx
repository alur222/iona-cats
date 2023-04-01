import { createContext, useState, useMemo } from 'react';

const Context = createContext([]);

interface Props {
  children: React.ReactNode;
}

export function BreedsProvider({ children }: Props) {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const memoizedValue = useMemo(() => {
    return {
      breeds,
      setBreeds,
      selectedBreed,
      setSelectedBreed,
      error,
      setError,
      loading,
      setLoading,
    };
  }, [breeds, selectedBreed, error, loading]);

  return <Context.Provider value={memoizedValue}>{children}</Context.Provider>;
}

export default Context;
