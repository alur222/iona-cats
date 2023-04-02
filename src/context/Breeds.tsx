import { createContext, useState, useMemo } from 'react';

type Breed = {
  id?: string;
  name?: string;
};

type Breeds = Breed[];

type BreedsContextType = {
  breeds: Breeds;
  setBreeds?: React.Dispatch<React.SetStateAction<Breeds>>;
  selectedBreed: string;
  setSelectedBreed?: React.Dispatch<React.SetStateAction<string>>;
  breedsError: string;
  setBreedsError?: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = createContext<BreedsContextType>({
  breeds: [],
  selectedBreed: '',
  breedsError: '',
  loading: false,
});

interface Props {
  children: React.ReactNode;
}

export function BreedsProvider({ children }: Props) {
  const [breeds, setBreeds] = useState<Breeds | []>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [breedsError, setBreedsError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const memoizedValue = useMemo(() => {
    return {
      breeds,
      setBreeds,
      selectedBreed,
      setSelectedBreed,
      breedsError,
      setBreedsError,
      loading,
      setLoading,
    };
  }, [breeds, selectedBreed, breedsError, loading]);

  return <Context.Provider value={memoizedValue}>{children}</Context.Provider>;
}

export default Context;
