import { useCallback, useEffect, useState } from 'react'
import { prepareApiUrl } from '../utils/url';

export const useRequest = <T = {}>(endpoint: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(prepareApiUrl(endpoint));
      const { data }: { data: T}  = await response.json();
      
      setData(data);
    } catch (err) {

    } finally {
      setIsLoading(true);
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
