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
        console.log("await json: ", json.results);
        setData(json.results);
        setLoading(false);
      } catch (err) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
