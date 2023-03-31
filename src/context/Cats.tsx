import { createContext } from 'react';

const Context = createContext({
  breeds: [],
  setBreeds: (breeds) => {},
  selectedBreed: '',
  setSelectedBreed: (breed) => {},
  hasMore: false,
  setHasMore: (value) => {},
});

export default Context;
