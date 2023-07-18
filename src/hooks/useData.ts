import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchGenres<T> {
    count: number;
    results: T[];
  }

const useData =<T> (endpoint : string) => {
  const [datas, setDatas] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenres<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setDatas(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { datas, error, isLoading };
};

export default useData;
