import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = axios.get(url)
  //       setData(response.data)
  //       setStatus('fulfilled');
  //       // setStatus('data: ', response.data);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    setLoading('pending')
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios.get(url, { cancelToken: source.token })
      .then(res => {
        setLoading('fulfilled');
        res.data.content && setData(res.data.content);
        res.content && setData(res.content);
      })
      .catch(err => {
        setLoading('fulfilled');
        setError(err);
      })
    return () => {
      source.cancel();
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch;
