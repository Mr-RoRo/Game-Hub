import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchGenres<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  reauestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [datas, setDatas] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenres<T>>(endpoint, {
          signal: controller.signal,
          ...reauestConfig,
        })
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
    },
    deps ? [...deps] : []
  );

  return { datas, error, isLoading };
};

export default useData;
