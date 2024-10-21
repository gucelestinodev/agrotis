import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

interface UseFetchResult<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export function useFetch<T>(fetchFunction: () => Promise<AxiosResponse<T>>): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFunction();
        setData(response.data);
      } catch (err: any) {
        const errorMessage = err.response?.data?.message || 'Erro ao carregar os dados.';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, error, isLoading };
}
