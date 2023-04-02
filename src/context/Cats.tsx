import {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { searchCats, getCatById } from '../api/cats';
import BreedsContext from './Breeds';

type CatBreeds = {
  name: string;
  description: string;
  temperament: string;
  origin: string;
};

type CatType = {
  id?: string;
  url?: string;
  breeds?: CatBreeds[];
};
type CatsType = CatType[];

type CatsContextType = {
  catsError: string;
  loading: boolean;
  cats: CatsType;
  cat: CatType;
  setCatId?: React.Dispatch<React.SetStateAction<string>>;
  setCatsError?: React.Dispatch<React.SetStateAction<string>>;
  hasMore: boolean;
  loadMore?: () => void;
};

const Context = createContext<CatsContextType>({
  catsError: '',
  loading: false,
  cats: [],
  cat: {},
  hasMore: false,
  loadMore: () => {},
});

interface Props {
  children: React.ReactNode;
}

type Cat = {
  id: string;
};

export function CatsProvider({ children }: Props) {
  const { selectedBreed, setSelectedBreed } = useContext(BreedsContext);

  const [cats, setCats] = useState<CatsType | []>([]);
  const [cat, setCat] = useState<CatType>({});
  const [catId, setCatId] = useState<string>('');
  const [catsError, setCatsError] = useState<string>('');
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const page = useRef(0);
  const limit = useRef(10);

  // we are reacting when user selected a breed.
  useEffect(() => {
    if (selectedBreed) {
      page.current = 1;
      setLoading(true);
      searchCats({
        page: page.current,
        limit: limit.current,
        breed_id: selectedBreed,
      })
        .then((data) => {
          setCats(data);
          setHasMore(data.length === 10);
          setLoading(false);
        })
        .catch(() => {
          setCatsError('error');
          setLoading(false);
        });
    } else {
      // we just reset cats to empty
      setCats([]);
    }
  }, [selectedBreed]);

  // we are now reacting to url params changes
  useEffect(() => {
    if (catId) {
      setLoading(true);
      getCatById({
        id: catId,
      })
        .then((data) => {
          setCat(data);

          // just in case user refreshes the cat view screen
          if (!selectedBreed) {
            setSelectedBreed?.(data.breeds[0].id);
          }

          setLoading(false);
        })
        .catch(() => {
          setCatsError('error');
          setLoading(false);
        });
    } else {
      setCat({});
    }
  }, [catId, setSelectedBreed, selectedBreed]);

  const loadMore = useCallback(() => {
    page.current += 1;
    searchCats({
      page: page.current,
      limit: limit.current,
      breed_id: selectedBreed,
    })
      .then((data) => {
        // check if there is new data from the response
        // we can check this by filtering by cat id and only
        // return the ids that are not found in the old data.
        // if new data is lesser than 10, we remove the load more button
        // from the UI
        const ids = cats.map(({ id }) => id);
        const newData: [] = data.filter(
          ({ id }: Cat): boolean => ids.indexOf(id) === -1
        );
        const merged = [...cats, ...newData];
        setCats(merged);
        setHasMore(!!newData.length);
        setLoading(false);
      })
      .catch(() => {
        setCatsError('error');
        setLoading(false);
      });
  }, [selectedBreed, cats]);

  const memoizedValue = useMemo(() => {
    return {
      catsError,
      loading,
      cats,
      cat,
      setCatId,
      setCatsError,
      hasMore,
      loadMore,
    };
  }, [
    catsError,
    setCatId,
    setCatsError,
    loading,
    cats,
    cat,
    hasMore,
    loadMore,
  ]);

  return <Context.Provider value={memoizedValue}>{children}</Context.Provider>;
}

export default Context;
