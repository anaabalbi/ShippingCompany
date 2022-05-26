import { useEffect, useState } from 'react';
import axios from 'axios';

export function useApi(url) {
  const [data, setData] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        setData(response.data.address);
        setError(response.data.erro);
        console.log(response.data.erro);
      })
      .catch((err) => {
        setError(err.response.data);
        console.log(err.response.data);
      })
      .finally(() => {
        setTimeout(() => {
          setIsFetching(false);
        }, 3000);
      });
  }, []);

  return { data, error, isFetching };
}
