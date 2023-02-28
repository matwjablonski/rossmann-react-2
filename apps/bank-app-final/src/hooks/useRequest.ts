import { useCallback, useEffect, useState } from 'react'
import { prepareApiUrl } from '../utils/url';

type RawData<S> = {
  data: S
}

export const useRequest = <T = {}>(endpoint: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(prepareApiUrl(endpoint));
      const { data }: RawData<T> = await response.json();
      
      setData(data);
    } catch (err) {

    } finally {
      setIsLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    data,
  }
}
