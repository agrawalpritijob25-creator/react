import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      setError(false);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("data not fetched");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    return fetchData;
  }, [url]);

  return { user, loading, error };
}
