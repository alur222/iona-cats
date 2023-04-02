/* eslint-disable import/prefer-default-export */

type CatType = {
  id?: string;
  url?: string;
};

type CatsType = CatType[];

type FilterCatsByIdParams = {
  cats: CatsType;
  filterId: string;
};

export const filterCatsById = ({ cats, filterId }: FilterCatsByIdParams) => {
  const catsFiltered = cats.filter(({ id }) => id === filterId);
  return (catsFiltered.length && catsFiltered[0]) || null;
};
