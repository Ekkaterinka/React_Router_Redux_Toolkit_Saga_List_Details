import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from '../redux/slices/detailsSlice';
import { TailSpin } from 'react-loader-spinner';

export default function Details() {
  const items = useSelector((state) => state.details.data);
  const loading = useSelector((state) => state.details.loading);
  const error = useSelector((state) => state.details.errors);
  const dispatch = useDispatch();
  const { id: Id = "" } = useParams();

  function repeatRequest() {
    dispatch(getDetails(Id));
};
  useEffect(() => {
    dispatch(getDetails(Id));
  }, [Id]);

  return (
    <article>
      {loading && <TailSpin color="red" height={60} width={60} />}
      {error && <div className='Error'><p>Произошла ошибка!</p><button onClick={repeatRequest}>Повторить запрос.</button></div>}
      <h2>{items.name}</h2>
      <p>{items.price}</p>
      <p>{items.content}</p>
    </article>
  );
}
