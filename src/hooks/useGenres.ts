import genres from "../data/genres";

export interface Genres {
    id: number;
    name: string;
    image_background: string
  }

const useGenres = () => ({datas: genres , isLoading: false , error: null})

export default useGenres;
