import useData from "./useData";

export interface Genres {
    id: number;
    name: string;
  }

const useGenres = () => useData<Genres>("/genres")

export default useGenres;
