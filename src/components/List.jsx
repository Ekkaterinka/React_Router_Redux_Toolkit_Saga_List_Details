import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList} from '../redux/slices/listSlice';
import { Link } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';


export default function List() {
    const items = useSelector((state) => state.list.list);
    const loading = useSelector((state) => state.list.loading);
    const error  = useSelector((state) => state.list.errors);
    const dispatch = useDispatch();

    function repeatRequest() {
        dispatch(getList());
    };

    useEffect(() => {
        dispatch(getList());
    }, []);

    const List = items.map((p) =>
    <Link to={`/${p.id}/details`} key={p.id}><li >
        {p.name}..</li>
    </Link>);

console.log(import.meta.env.VITE_APP_LIST_URL)

    return (
        <section>
            <h1>Список услуг:</h1>
             {loading && <TailSpin color="red" height={60} width={60} />}
            {error && <div className='Error'><p>Произошла ошибка!</p><button onClick={repeatRequest}>Повторить запрос.</button></div>}
            {List}
        </section>
    );
}
