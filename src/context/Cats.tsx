import {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from 'react';
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
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const page = useRef(1);
  const limit = useRef(10);

  // we are reacting when user selected a breed.
  useEffect(() => {
    if (selectedBreed) {
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
          setError('error');
          setLoading(false);
        });
    } else {
      // we just reset cats to empty
      setCats([]);
    }
  }, [selectedBreed]);

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
        const newData = data.filter(({ id }) => ids.indexOf(id) === -1);
        const merged = [...cats, ...newData];
        setCats(merged);
        setHasMore(newData.length === 10);
        setLoading(false);
      })
      .catch(() => {
        setError('error');
        setLoading(false);
      });
  }, [selectedBreed, cats]);

  const memoizedValue = useMemo(() => {
    return {
      error,
      loading,
      cats,
      hasMore,
      loadMore,
    };
  }, [error, loading, cats, hasMore, loadMore]);

  return <Context.Provider value={memoizedValue}>{children}</Context.Provider>;
}

export default Context;
