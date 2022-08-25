import { useState, useEffect } from "react";

function useFetch(url: string) {
  const [data, setData] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
        setLoading(false);
      } catch (err) {
        setError(error);
      }
    };

    fetchData();
  }, [url, error]);

  return { data, loading, error };
}

export default useFetch;
