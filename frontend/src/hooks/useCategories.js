import {useCallback, useEffect, useState} from "react";
import categoryRepository from "../repository/categoryRepository.js";

const useCategories = () => {
    const [state, setState] = useState([]);

    const fetchCategories = useCallback(() => {
        categoryRepository.findAll()
            .then((response) => {
                setState(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return state;
};

export default useCategories;