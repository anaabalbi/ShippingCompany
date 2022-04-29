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
        setData(response.data.address.address[0]);
        console.log(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setTimeout(() => {
          setIsFetching(false);
        }, 3000);
      });
  }, []);

  return { data, error, isFetching };
}
