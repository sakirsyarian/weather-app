import { useEffect } from "react";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { weather as wea, loading as loa, error as err } from "./weatherSlice";

function useFetch() {
    const dispatch = useDispatch();
    const { weather, loading, error } = useSelector(state => state.weather);
    const { search } = useSelector(state => state.search);

    const fullURL = new URL('http://api.weatherapi.com/v1/current.json');
    const params = fullURL.searchParams;

    params.append("aqi", "yes");
    params.append("q", search);
    params.append("key", "3f2453c68f9149c58f4102956232507");

    useEffect(() => {
        fetch(fullURL)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    if (data.error.code === 1003) toast.error("Please type a location")
                    if (data.error.code === 1006) toast.error(data.error.message)

                    throw data.error
                }

                dispatch(err(null))
                return dispatch(wea(data))
            })
            .catch(error => dispatch(err(error)))
            .finally(() => dispatch(loa(false)))
    }, [search])

    return [weather, loading, error];
}

export default useFetch;