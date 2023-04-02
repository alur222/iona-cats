/* eslint-disable import/prefer-default-export */

type FilterCatsByIdParams = {
  cats: object[];
  filterId: string;
};

type Cat = {
  id: string;
};

export const filterCatsById = ({ cats, filterId }: FilterCatsByIdParams) => {
  const catsFiltered = cats.filter(({ id }: Cat) => id === filterId);
  return (catsFiltered.length && catsFiltered[0]) || null;
};
