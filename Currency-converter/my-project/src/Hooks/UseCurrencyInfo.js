import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null); // Use null to indicate no data initially
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json(); // Correctly call json()
        setData(result[currency]); // Set the specific currency data
      } catch (err) {
        setError(err); // Set error if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchCurrencyInfo();
  }, [currency]); // Only depend on currency

  // Log the data after it has been set
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return { data, loading, error }; // Return data, loading state, and error
}

export default useCurrencyInfo;