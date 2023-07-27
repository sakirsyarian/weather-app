import { useRef } from "react";
import { useDispatch } from "react-redux";
import { searching } from "./searchSlice";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Search() {
    const inputSearch = useRef(null);
    const dispatch = useDispatch();

    function handlerSearch(e) {
        e.preventDefault();

        dispatch(searching(inputSearch.current.value));
        inputSearch.current.value = ''
    }

    return (
        <>
            <ToastContainer />
            <section className="max-w-3xl mx-auto py-10 text-center text-gray-500 rounded-xl shadow">
                <form onSubmit={handlerSearch}>
                    <input ref={inputSearch} type="text" placeholder="Type location..." className="input bg-gray-100 w-full max-w-lg" />
                </form>
            </section>
        </>

    )
}