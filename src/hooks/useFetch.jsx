import { useEffect, useState } from "react";
import axios from "../api/axios";

const useFetch = (url, searchText = '') => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            setError(null);

            try {

                const searchURL = searchText
                    ? `${url}/search?q=${encodeURIComponent(searchText)}`
                    : url;
                    
                const response = await axios.get(searchURL);

                setData(response.data.recipes || response.data);
            } catch (err) {

                console.error("Maʼlumotlarni olib boʻlmadi:", err);
                setError('Maʼlumotlarni olib boʻlmadi. Keyinroq qayta urinib ko‘ring.');
                setData(null);

            } finally {

                setLoading(false);

            }
        };

        fetchData();
    }, [url, searchText]);

    return { data, loading, error };
};

export { useFetch };
