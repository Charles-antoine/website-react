import { useState, useEffect } from 'react';
import axios from 'axios';

export const useHttp = (url,dependencies) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState(null);


    //FUNCTION LOAD API
    const fetchItems = async () => {
        await axios.get(url)
        .then(res => {
            const resData = res.data;
            setIsLoading(false);
            setFetchedData(resData);
            // console.log(isLoading);
            });
        }

    useEffect( () => {
        fetchItems();
        },dependencies);


    return [isLoading, fetchedData];
};