import { useCallback, useEffect, useState } from "react";
import accommodationRepository from "../repository/accommodationRepository.js";

const useHostsByAccommodation = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchHostsByAccommodation = useCallback(() => {
        setLoading(true);
        setError(null);

        accommodationRepository.getHostsByAccommodation()
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.error("Error fetching hosts:", err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetchHostsByAccommodation();
    }, [fetchHostsByAccommodation]);

    return { data, loading, error };
};

export default useHostsByAccommodation;