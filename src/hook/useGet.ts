import axios from "axios";
import { useEffect, useState } from "react";


function useGet<T = any>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get<T>(url)
      .then((r) => setData(r.data))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
}

export default useGet;
